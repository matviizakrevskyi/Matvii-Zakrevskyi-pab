import express from "express";
import { Request, Response } from "express";

const Zamowienie = require("../schemas/zamowienieSchema");
const Danie = require("../schemas/danieSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  let a = Zamowienie.find({ kwota: 0 });
 
    Zamowienie.aggregate([
      {
        $addFields: {
          kwota: { $round: [{ $sum: "$pozycje.cena" }, 2] },
        },
      },
    ])
      .then((result: any) => {
        res.send(result);
      })
      .catch((err: any) => {
        res.send(err);
      });
  
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("There is no order for such id in the database");
    });
});

router.get("/oblozenieStolikow", (req: Request, res: Response) => {
  Zamowienie.aggregate([
    {
      $group: {
        _id: "$stolik",
        iloscZamowien: { $sum: 1 },
      },
    },
  ]).then((result: any) => {
    res.send(result);
  }).catch((err: any) => {
    res.send(err);
  });;
});

router.post("/addNew", (req: Request, res: Response) => {
  let zamowienie = new Zamowienie({
    pracownik: req.body.pracownik,
    pozycje: req.body.pozycje,
    status: req.body.status,
    stolik: req.body.stolik,
    kwota: req.body.kwota,
  });

  zamowienie
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("Incorrect order data " + error);
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("There is no order with this id in the database");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Zamowienie.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "The order with this id is not in the database or has been previously removed"
      );
    });
});

export default router;

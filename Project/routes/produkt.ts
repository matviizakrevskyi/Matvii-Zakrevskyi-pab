import express from "express";
import { Request, Response } from "express";

const Produkt = require("../schemas/produktSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Produkt.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Produkt.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Such product is not in stock");
    });
});

router.get("/sort",(req: Request, res: Response) =>{
  Produkt.find()
    .sort('cena')
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Products cannot be sorted"+err);
    });
})

router.post("/addNew", (req: Request, res: Response) => {
  let produkt = new Produkt({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    ilosc: req.body.ilosc,
    jednostkaMiary: req.body.jednostkaMiary,
  });

  produkt
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Incorrect product data, please check the format of the entered data" + error
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Produkt.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("There is no product with this id in the database");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Produkt.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "The product with this id is not in the database or has been previously removed"
      );
    });
});

export default router;

import express from "express";
import { Request, Response } from "express";

const Restauracja = require("../schemas/restauracjaSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Restauracja.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Restauracja.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("There are no restaurants with this id in the base");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let restauracja = new Restauracja({
    nazwa: req.body.nazwa,
    adres: req.body.adres,
    telefon: req.body.telefon,
    nip: req.body.nip,
    email: req.body.email,
    www: req.body.www,
  });

  restauracja
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Incorrect data of the Restaurant, please check the format of the entered data"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("There are no restaurants with this id in the base");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Restauracja.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "The restaurant with this id is not available in the database or has been previously removed"
      );
    });
});
export default router;
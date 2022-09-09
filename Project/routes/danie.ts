import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Danie = require("../schemas/danieSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Danie.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Danie.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("Such a dish is not on the menu");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let danie = new Danie({
    nazwa: req.body.nazwa,
    cena: req.body.cena,
    kategoria: req.body.kategoria,
  });

  danie
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Incorrect data of the dish, please check the format of the entered data"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("There is no dish with this id in the database");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Danie.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "The dish with this id is not available in the database or has been previously removed"
      );
    });
});

export default router;

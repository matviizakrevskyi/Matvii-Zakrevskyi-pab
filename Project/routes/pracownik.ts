import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import { appendFile } from "fs";

const Pracownik = require("../schemas/pracownikSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Pracownik.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Pracownik.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("An employee with this id does not work for us");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let pracownik = new Pracownik({
    imie: req.body.imie,
    nazwisko: req.body.nazwisko,
    stanowisko: req.body.stanowisko,
  });

  pracownik
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Incorrect employee data, please check the format of the entered data"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Pracownik.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("We do not have an employee with this id in the database");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Pracownik.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "An employee with this id is not in the database or has been previously deleted"
      );
    });
});

export default router;
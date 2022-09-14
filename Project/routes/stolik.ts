import express from "express";
import { Request, Response } from "express";

const Stolik = require("../schemas/stolikSchema");
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  Stolik.find()
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(err);
    });
});

router.get("/getSingle/:id", (req: Request, res: Response) => {
  Stolik.findById(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("There is no table with this id at the base");
    });
});

router.get("/wolneStoliki", (req: Request, res: Response) => {

  const iloscOsob = req.body.miejsca;
  Stolik.find({ status: "Wolny", iloscOsob:iloscOsob })
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send("There are no tables available");
    });
});

router.post("/addNew", (req: Request, res: Response) => {
  let stolik = new Stolik({
    nazwa: req.body.nazwa,
    iloscOsob: req.body.iloscOsob,
    status: req.body.status,
  });

  stolik
    .save()
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send(
        "Incorrect table data, please correct the status and check the format of the entered data"
      );
    });
});

router.put("/updateSingle/:id", (req: Request, res: Response) => {
  Stolik.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result: any) => {
      res.send(result);
    })
    .catch((error: any) => {
      res.send("There is no table with this id at the base");
    });
});

router.delete("/deleteSingle/:id", (req: Request, res: Response) => {
  Stolik.findByIdAndRemove(req.params.id)
    .then((result: any) => {
      res.send(result);
    })
    .catch((err: any) => {
      res.send(
        "The table with this id is not available in the database or has been previously removed"
      );
    });
});

export default router;

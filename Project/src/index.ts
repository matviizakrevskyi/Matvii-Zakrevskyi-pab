import express from "express";
import { Request, Response } from "express";
import bodyParser from "body-parser";
import restauracjaRoutes from "../routes/restauracja";
import pracownikRoutes from "../routes/pracownik"
import stolikRoutes from "../routes/stolik";
import rezerwacjaRoutes from "../routes/rezerwacja";
import produktRoutes from "../routes/produkt";
import danieRoutes from "../routes/danie";

const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

const dbURI =
  "";

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result:any) => console.log("Connected to Mongoose: " + app.listen(3000)))
    .catch((err:any) => console.log("Failed to connect to Mongoose: " + err))

app.use(bodyParser.json());

app.use("/restauracja", restauracjaRoutes);
app.use("/pracownik", pracownikRoutes);
app.use("/stolik", stolikRoutes);
app.use("/rezerwacja", rezerwacjaRoutes);
app.use("/produkt", produktRoutes);
app.use("/danie", danieRoutes);


app.get("/", function (req: Request, res: Response) {
  res.send("Witaj w API restauracji");
});
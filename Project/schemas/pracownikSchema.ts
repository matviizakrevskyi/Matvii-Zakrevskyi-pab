const PracownikMongo = require("mongoose");
const SchemaPracownik = PracownikMongo.Schema;

let pracownikSchema = new SchemaPracownik(
  {
    imie: {
      type: String,
      required: true,
    },
    nazwisko: {
      type: String,
      required: true,
    },
    stanowisko: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pracownik = PracownikMongo.model("Pracownik", pracownikSchema);
module.exports = Pracownik;
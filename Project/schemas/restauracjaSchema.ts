const RestauracjaMongo = require("mongoose");
const SchemaRestauracja = RestauracjaMongo.Schema;

let restauracjaSchema = new SchemaRestauracja(
  {
    nazwa: {
      type: String,
      required: true,
    },
    adres: {
      type: String,
      required: true,
    },
    telefon: {
      type: String,
      required: true,
    },
    nip: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    www: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Restauracja = RestauracjaMongo.model("Restauracja", restauracjaSchema);
module.exports = Restauracja;
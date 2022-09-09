const DanieMongo = require("mongoose");
const SchemaDanie = DanieMongo.Schema;

let danieSchema = new SchemaDanie(
  {
    nazwa: {
      type: String,
      required: true,
    },
    cena: {
      type: Number,
      required: true,
    },
    kategoria: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Danie = DanieMongo.model("Danie", danieSchema);
module.exports = Danie;

const StolikMongo = require("mongoose");
const SchemaStolik = StolikMongo.Schema;

export let stolikSchema = new SchemaStolik(
  {
    nazwa: {
      type: String,
      required: true,
    },
    iloscOsob: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Wolny", "Zajety", "Niedostepny"],
      default: "Wolny",
    },
  },
  { timestamps: true }
);

const Stolik = StolikMongo.model("Stolik", stolikSchema);
module.exports = Stolik;
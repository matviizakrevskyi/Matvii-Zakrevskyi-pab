const RezerwacjaMongo = require("mongoose");
const SchemaRezerwacja = RezerwacjaMongo.Schema;

let rezerwacjaSchema = new SchemaRezerwacja(
  {
    stolik: [
      {
        type: SchemaRezerwacja.Types.ObjectId,
        ref: "Stolik",
        required: true,
      },
    ],
    
    start: {
      type: Date,
      required: true,
      
    },
    koniec: {
      type: Date,
      required: true,
      
    },
    klient: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Rezerwacja = RezerwacjaMongo.model("Rezerwacja", rezerwacjaSchema);
module.exports = Rezerwacja;
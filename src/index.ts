import gradient, { Gradient } from "gradient-string";

const gradienteDeColores = gradient("red", "green", "blue");
const questions = [
  {
    type: "confirm",
    name: "isDelivered",
    message: "¿La quiere para llevar a casa?",
    default: false,
  },

  {
    type: "list",
    name: "size",
    message: "¿Qué tamaño quiere?",
    choices: ["Grande", "Mediana", "Pequeña"],
  },
  {
    type: "checkbox",
    name: "toppings",
    message: "¿Qué toppings quiere?",
    choices: [
      {
        key: "p",
        name: "Pepperoni",
        value: "Pepperoni",
      },
      {
        key: "q",
        name: "Extra de queso",
        value: "extraCheese",
      },
      {
        key: "m",
        name: "Champiñones",
        value: "mushrooms",
      },
      {
        key: "b",
        name: "Salsa Barbacoa",
        value: "bbqSauce",
      },
      {
        key: "c",
        name: "Queso de cabra",
        value: "goatCheese",
      },
      {
        key: "e",
        name: "Carne de vacuno",
        value: "meat",
      },
    ],
  },
  {
    type: "list",
    name: "beverage",
    message: "¿Qué bebida quiere?",
    choices: ["7up", "Coca-cola", "Fanta Naranja"],
  },
  {
    type: "confirm",
    name: "commentQuestion",
    message:
      "¿Quiere dejarnos alguna sugerencia para mejorar nuestro servicio?",
    default: "Todo bien, muchas gracias.",
  },
  {
    type: "list",
    name: "desert",
    message: "¿Quiere algo de postre?",
    choices: ["Tarta de queso", "Brownie", "No quiero postre"],
  },
];

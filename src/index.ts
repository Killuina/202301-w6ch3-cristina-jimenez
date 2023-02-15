import inquirer from "inquirer";
import { type Answers } from "inquirer";
import gradient from "gradient-string";
import chalk from "chalk";

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

console.log(
  `${gradienteDeColores(
    "¡Bienvenido a Pizza Coders!"
  )} \n Por favor, rellene las opciones para pedir su ${chalk.yellowBright(
    "pizza"
  )}`
);
await inquirer.prompt(questions).then((answers: Answers) => {
  console.log("\nAquí tiene su recibo: \n \n ");
  console.log(JSON.stringify(answers, null, "  "));
});

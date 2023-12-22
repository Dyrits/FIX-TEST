// Ce fichier est destiné à lancer l'API localement sur le port 3001.

const app = require("./index.js");

app.listen(3001, () => {
  console.log("L'API est disponible à l'adresse http://localhost:3001.");
});
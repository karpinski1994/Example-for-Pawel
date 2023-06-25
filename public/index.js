import Worker from "./scripts/Worker.js";

document.addEventListener("DOMContentLoaded", () => {
  const pabloWorker = new Worker("pablo", "z pubelo");

  const nameDiv = document.createElement("div");
  const surnameDiv = document.createElement("div");
  const name = document.createTextNode(pabloWorker.getName());
  const surname = document.createTextNode(pabloWorker.getSurname());
  nameDiv.appendChild(name);
  surnameDiv.appendChild(surname);

  document.body.appendChild(nameDiv);
  document.body.appendChild(surnameDiv);
});

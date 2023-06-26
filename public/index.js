import Worker1 from "./scripts/Worker1.js";
import Worker2 from "./scripts/Worker2.js";
import { axios} from "axios";

document.addEventListener("DOMContentLoaded", () => {
  const pabloWorker = new Worker2();
  const nameDiv = document.createElement("div");
  const surnameDiv = document.createElement("div");
  const name = document.createTextNode(pabloWorker.getName());
  const surname = document.createTextNode(pabloWorker.getSurname());
  nameDiv.appendChild(name);
  surnameDiv.appendChild(surname);

  document.body.appendChild(nameDiv);
  document.body.appendChild(surnameDiv);
});

import { api } from "./api/catsApi.js";

const button = document.querySelector(".generate-button");
button.addEventListener("click", function () {
  api.fetchPics();
});

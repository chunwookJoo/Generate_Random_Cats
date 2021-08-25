// thecatapi API
const API_ENDPOINT = "https://api.thecatapi.com/v1";

const api = {
  fetchPics: () => {
    let catsImgDiv = document.querySelector(".catsImgDiv");
    catsImgDiv.innerHTML = "";
    return fetch(`${API_ENDPOINT}/images/search`)
      .then((res) => {
        res.json().then((data) => {
          let catsImgUrl = data[0].url;

          let catsImgEl = document.createElement("img");
          catsImgEl.setAttribute("src", `${catsImgUrl}`);
          catsImgEl.classList.add("showcase");

          catsImgDiv = document.querySelector(".catsImgDiv");
          catsImgDiv.appendChild(catsImgEl);
        });
      })
      .catch((err) => console.log(err));
  },
};
export { api };

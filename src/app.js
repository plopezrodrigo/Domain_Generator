/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#name").innerHTML = domainName();
});

let pronoun = ["the", "our"];
let adj = ["greate", "big"];
let noun = ["jogger", "racoon"];

function domainName() {
  let i = 0;
  let j = 0;
  let k = 0;

  let combination1 = "";

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        combination1 += pronoun[i] + adj[j] + noun[k] + ".com <br>";
      }
    }
  }
  return combination1;
}

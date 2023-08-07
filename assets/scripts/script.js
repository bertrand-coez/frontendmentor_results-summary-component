import Criteria from "./components/Criteria.js";

customElements.define("li-criteria", Criteria, { extends: "li" });

const setGlobalScore = (scores) => {
  const global = document.querySelector(".result-counter p.score");
  const sum = scores.reduce((old, current) => old + current, 0);
  const average = Math.floor(sum / scores.length);

  global.innerHTML = average;
};

const init = async (e) => {
  const criteria = document.querySelectorAll(`li[is="li-criteria"]`);
  const response = await fetch("./data.json");
  const json = await response.json();

  for (const li of criteria) {
    console.log(json);
    const { score, icon } = json.find(
      (c) => c.category === li.$criteriaUpperCase
    );
    li.setScore(score);
    li.setIcon(icon);
  }
  setGlobalScore(json.map(({ score }) => score));
};

document.addEventListener("DOMContentLoaded", init);

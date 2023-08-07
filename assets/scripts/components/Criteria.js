export default class Criteria extends HTMLLIElement {
  $criteria;
  $criteriaUpperCase;

  constructor() {
    super();
    this.$criteria = this.getAttribute("criteria");
    this.$criteriaUpperCase =
      this.$criteria.slice(0, 1).toUpperCase() + this.$criteria.slice(1);

    this.setClass();
    this.insertTemplate();
    this.setHeading();
  }

  insertTemplate() {
    const { content } = document.getElementById("criteria");
    this.appendChild(content.cloneNode(true));
  }

  setClass() {
    this.classList.add(this.$criteria);
  }

  setHeading() {
    const heading = this.querySelector("div.heading");

    heading.querySelector("p").innerHTML = this.$criteriaUpperCase;
  }

  setScore(score) {
    const scoreElement = this.querySelector("p.score");
    const spans = scoreElement.querySelectorAll("span");
    scoreElement.innerHTML = score;
    for (const span of spans) {
      scoreElement.appendChild(span);
    }
  }

  setIcon(iconURL) {
    console.log(`criteria : ${this.$criteria}. icon : ${iconURL}`);
    const iconContainer = this.querySelector(".list-icon");
    console.log(iconContainer.style);
    iconContainer.style.background = `url("${iconURL}") no-repeat`;
  }
}

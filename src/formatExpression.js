import execute from "./execute.js";

const formatExpression = (element, screen) => {
  const value = element.innerText === "=" ? "" : element.innerText;
  screen.innerHTML += value;

  if (value == "") {
    execute(screen);
    return;
  }
};

export default formatExpression;

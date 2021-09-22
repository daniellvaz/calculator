import formatExpression from "./formatExpression.js";

const handleOperatorIntoScreen = (btn, screen) => {
  btn.forEach((item, i) => {
    btn[i].addEventListener("click", () => {
      formatExpression(item, screen);
    });
  });
};

export default handleOperatorIntoScreen;

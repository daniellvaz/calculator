const handleOperators = (element, operators) => {
  const insertOperators = operators
    .map(
      (value) => `
      <buttom class="btn-keyboard">
        <p>${value}</p>  
      </buttom>
    `
    )
    .join("");

  element.innerHTML = insertOperators;
};

export default handleOperators;

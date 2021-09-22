const execute = (screen) => {
  const total = eval(screen.innerText);

  screen.innerText = total;
};

export default execute;

export default function clearAll(btn, screen) {
  btn.addEventListener("click", () => {
    screen.innerText = "";
  });
}

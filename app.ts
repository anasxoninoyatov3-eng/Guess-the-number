const btn = document.getElementById("btn") as HTMLButtonElement;
const heading = document.getElementById("heading") as HTMLHeadingElement;

btn.addEventListener("click", () => {
  let randomNumber: number;
  do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
  } while (randomNumber === 50);

  let userNumber: number | null = null;

  while (userNumber !== randomNumber) {
    const input = prompt("1 dan 100 gacha son yozing:");
    if (!input) return;

    userNumber = Number(input);

    if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
      alert("Faqat 1 dan 100 gacha son yozing!");
      continue;
    }

    if (userNumber === randomNumber) {
      heading.textContent = "Toptiz!";
      break;
    } else if (randomNumber > 50) {
      alert("Random son 50 dan katta!");
    } else {
      alert("Random son 50 dan kichik!");
    }
  }
});

const btn = document.getElementById("btn") as HTMLButtonElement;
const heading = document.getElementById("heading") as HTMLHeadingElement;

btn.addEventListener("click", () => {
  const input = prompt("1 dan 100 gacha son yozing:");
  if (!input) return;

  const userNumber = Number(input);

  if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
    heading.textContent = "Faqat 1 dan 100 gacha son yozing!";
    return;
  }

  let randomNumber: number;
  do {
    randomNumber = Math.floor(Math.random() * 100) + 1;
  } while (randomNumber === 50);
  console.log(randomNumber);

  if (userNumber === randomNumber) {
    heading.textContent = "Toptiz!";
  } else if (randomNumber > 50) {
    heading.textContent = "Random son 50 dan katta!";
  } else {
    heading.textContent = "Random son 50 dan kichik!";
  }
});

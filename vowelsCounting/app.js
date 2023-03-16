const countEl = document.querySelector(".count");
const input = document.querySelector("input");

input.addEventListener("keyup", () => {
  let word = input.value.toLocaleLowerCase();
  let vowelsCount = 0;

  for (let i = 0; i < word.length; i++) {
    let letters = word[i];
    console.log(letters);

    if (letters.match(/([a,e,i,o,u])/)) {
      vowelsCount++;
    }
  }
  countEl.innerHTML = vowelsCount;
});

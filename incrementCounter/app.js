const counters = document.querySelectorAll(".counter");

counters.forEach((counters) => {
  counters.innerText = 0;
  const updateCounter = () => {
    const target = +counters.getAttribute("data-target");
    const start = +counters.innerText;
    const increment = target / 200;
    if (start < target) {
      counters.innerText = `${Math.ceil(start + increment)}`;
      setTimeout(updateCounter, 5);
    } else {
      counters.innerText = target;
    }
  };
  updateCounter();
});

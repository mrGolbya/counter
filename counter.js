window.addEventListener("click", function (e) {
  if (
    e.target.dataset.counter === "plus" ||
    e.target.dataset.counter === "minus"
  ) {
    let counterWrapper = e.target.closest(".counter-wrap");
    let counter = counterWrapper.querySelector("[data-counter]");

    if (e.target.dataset.counter === "plus") {
      counter.textContent = ++counter.textContent;
    }
    if (e.target.dataset.counter === "minus") {
      if (parseInt(counter.textContent) > 0) {
        counter.textContent = --counter.textContent;
      }
    }
  }
});

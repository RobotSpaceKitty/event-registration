document.addEventListener("DOMContentLoaded", () => {
  const steps = Array.from(document.querySelectorAll(".step"));
  const progressDots = Array.from(document.querySelectorAll(".progress__step"));
  let current = 0;

  function showStep(index) {
    steps.forEach((step, i) => {
      step.classList.toggle("step--active", i === index);
    });

    progressDots.forEach((dot, i) => {
      dot.classList.toggle("step--active", i === index);
    });

    current = index;
  }

  function nextStep() {
    if (current < steps.length - 1) {
      showStep(current + 1);
    }
  }

  function previousStep() {
    if (current > 0) {
      showStep(current - 1);
    }
  }

  // NEXT buttons
  document.querySelectorAll("[data-next]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      nextStep();
    });
  });

  // PREVIOUS buttons
  document.querySelectorAll("[data-prev]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      previousStep();
    });
  });

  // Initialize on first step
  showStep(0);
});

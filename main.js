// ======================
// SCROLL REVEAL
// ======================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0) scale(1)";
      }
    });
  },
  {
    threshold: 0.15,
  },
);

document.querySelectorAll(".card").forEach((el) => {
  el.style.opacity = "0";
  el.style.transform = "translateY(60px) scale(.95)";
  el.style.transition = "all .8s ease";

  observer.observe(el);
});

// ======================
// 3D HERO TILT
// ======================

const heroImage = document.querySelector(".hero-image");

heroImage.addEventListener("mousemove", (e) => {
  const rect = heroImage.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width - 0.5;

  const y = (e.clientY - rect.top) / rect.height - 0.5;

  heroImage.style.transform = `
      perspective(1500px)
      rotateY(${x * 12}deg)
      rotateX(${-y * 12}deg)
    `;
});

heroImage.addEventListener("mouseleave", () => {
  heroImage.style.transform = `
      perspective(1500px)
      rotateY(0deg)
      rotateX(0deg)
    `;
});

// ======================
// CARD TILT
// ======================

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 12;

    const rotateX = -(y / rect.height - 0.5) * 12;

    card.style.transform = `
          perspective(1200px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateY(-8px)
        `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
          perspective(1200px)
          rotateX(0deg)
          rotateY(0deg)
        `;
  });
});

// ======================
// MAGNETIC BUTTONS
// ======================

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.12}px,${y * 0.12}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
});

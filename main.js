// FILTER BUTTONS

document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".filter-btn")
      .forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});

// SCROLL REVEAL

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

document
  .querySelectorAll(".card,.product-card,.collection-item")
  .forEach((el) => {
    el.style.opacity = "0";

    el.style.transform = "translateY(100px) scale(.9)";

    el.style.transition = "all 1s ease";

    observer.observe(el);
  });

// 3D TILT

document.querySelectorAll(".card,.product-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 20;

    const rotateX = -(y / rect.height - 0.5) * 20;

    card.style.transform = `
    perspective(1200px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)
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

// MAGNETIC BUTTONS

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("mousemove", (e) => {
    const rect = button.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;

    const y = e.clientY - rect.top - rect.height / 2;

    button.style.transform = `translate(${x * 0.15}px,${y * 0.15}px)`;
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translate(0,0)";
  });
});

/* =========================
   KEYCHAIN PARALLAX
========================= */

const keychains = document.querySelectorAll(".keychain");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 12;

    kc.style.transform = `
        rotate(${x * speed}deg)
        translateY(${y * speed}px)
        `;
  });
});

/* TOUCH */

window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const x = touch.clientX / window.innerWidth - 0.5;
  const y = touch.clientY / window.innerHeight - 0.5;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 12;

    kc.style.transform = `
        rotate(${x * speed}deg)
        translateY(${y * speed}px)
        `;
  });
});

/* =========================
   SCROLL DEPTH
========================= */

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 0.08;

    kc.style.marginTop = `${scroll * speed}px`;
  });
});

/* =========================
   KEYCHAIN PARALLAX
========================= */

const keychains = document.querySelectorAll(".keychain");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 12;

    kc.style.transform = `
        rotate(${x * speed}deg)
        translateY(${y * speed}px)
        `;
  });
});

/* TOUCH */

window.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];

  const x = touch.clientX / window.innerWidth - 0.5;
  const y = touch.clientY / window.innerHeight - 0.5;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 12;

    kc.style.transform = `
        rotate(${x * speed}deg)
        translateY(${y * speed}px)
        `;
  });
});

/* =========================
   SCROLL DEPTH
========================= */

window.addEventListener("scroll", () => {
  const scroll = window.scrollY;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 0.08;

    kc.style.marginTop = `${scroll * speed}px`;
  });
});

/* =========================================
   CURSOR GLOW
========================================= */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

/* =========================================
   KEYCHAIN PARALLAX
========================================= */

const keychains = document.querySelectorAll(".keychain");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;

  const y = e.clientY / window.innerHeight - 0.5;

  keychains.forEach((kc, index) => {
    const speed = (index + 1) * 10;

    kc.style.transform = `
        rotate(${x * speed}deg)
        translateY(${y * speed}px)
        `;
  });
});

/* =========================================
   DEVICE GYROSCOPE
========================================= */

function handleOrientation(event) {
  const x = event.gamma / 15;
  const y = event.beta / 15;

  keychains.forEach((kc, index) => {
    const depth = (index + 1) * 8;

    kc.style.transform = `
        rotate(${x * depth}deg)
        translateY(${y * depth}px)
        `;
  });
}

window.addEventListener("deviceorientation", handleOrientation);

/* =========================================
   AURORA PARALLAX
========================================= */

const orbs = document.querySelectorAll(".aurora");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;

  const y = e.clientY / window.innerHeight - 0.5;

  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 40;

    orb.style.transform = `
        translate(
        ${x * speed}px,
        ${y * speed}px
        )
        scale(1.1)
        `;
  });
});

/* =========================================
   CARD LIGHT EFFECT
========================================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  });
});

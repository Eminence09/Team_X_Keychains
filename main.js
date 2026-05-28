// FILTER BUTTONS

/* =========================
   PARTICLE ENGINE
========================= */

const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;

    this.size = Math.random() * 2;

    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;

    this.opacity = Math.random() * 0.5;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) {
      this.speedX *= -1;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.speedY *= -1;
    }
  }

  draw() {
    ctx.beginPath();

    ctx.fillStyle = `rgba(255,255,255,${this.opacity})`;

    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

    ctx.fill();
  }
}

for (let i = 0; i < 160; i++) {
  particles.push(new Particle());
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    particle.update();
    particle.draw();

    for (let j = index; j < particles.length; j++) {
      const dx = particle.x - particles[j].x;
      const dy = particle.y - particles[j].y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 120) {
        ctx.beginPath();

        ctx.strokeStyle = `rgba(255,255,255,${0.05 - distance / 3000})`;

        ctx.lineWidth = 0.5;

        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particles[j].x, particles[j].y);

        ctx.stroke();
      }
    }
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

/* =========================
   CURSOR GLOW
========================= */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

/* TOUCH SUPPORT */

window.addEventListener("touchmove", (e) => {
  glow.style.left = e.touches[0].clientX + "px";
  glow.style.top = e.touches[0].clientY + "px";
});

/* =========================
   PARALLAX
========================= */

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".gradient-orb").forEach((orb, index) => {
    const speed = (index + 1) * 0.08;

    orb.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".card, .hero-image, .cta-box, .section-title",
);

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("reveal", "active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* =========================
   MAGNETIC BUTTON EFFECT
========================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.15}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});

/* =========================
   3D CARD TILT
========================= */

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 18;
    const rotateX = (y / rect.height - 0.5) * -18;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

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

/* LOADER */

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "0";

    setTimeout(() => {
      document.querySelector(".loader").style.display = "none";
    }, 1500);
  }, 1500);
});

/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});

/* PARALLAX */

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

/* DEVICE MOTION */

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

/* IMAGE REVEAL */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";

        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.2,
  },
);

document.querySelectorAll(".gallery").forEach((section) => {
  section.style.opacity = "0";

  section.style.transform = "translateY(100px)";

  section.style.transition = "1s ease";

  observer.observe(section);
});

/* HERO PARALLAX */

const heroImg = document.querySelector(".floating-keychain-main");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;

  const y = e.clientY / window.innerHeight - 0.5;

  heroImg.style.transform = `
    translate(${x * 30}px,${y * 30}px)
    rotateY(${x * 12}deg)
    rotateX(${-y * 12}deg)
    `;
});

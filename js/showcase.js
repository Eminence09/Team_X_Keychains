window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  setTimeout(() => {
    loader.style.opacity = "0";

    setTimeout(() => {
      loader.remove();
    }, 1000);
  }, 1500);
});

const keychain = document.querySelector(".floating-keychain");

document.addEventListener("mousemove", (e) => {
  const x = (e.clientX - window.innerWidth / 2) / 30;

  const y = (e.clientY - window.innerHeight / 2) / 30;

  keychain.style.transform = `
translate(${x}px,${y}px)
rotateY(${x}deg)
rotateX(${-y}deg)
`;
});

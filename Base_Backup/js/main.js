// FILTER BUTTONS

document.querySelectorAll(".filter-btn")
.forEach(button=>{

  button.addEventListener("click",()=>{

    document.querySelectorAll(".filter-btn")
    .forEach(btn=>btn.classList.remove("active"));

    button.classList.add("active");

  });

});

// SCROLL REVEAL

const observer = new IntersectionObserver(entries=>{

  entries.forEach(entry=>{

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";

      entry.target.style.transform =
      "translateY(0) scale(1)";

    }

  });

},{
  threshold:.15
});

document
.querySelectorAll(".card,.product-card,.collection-item")
.forEach(el=>{

  el.style.opacity="0";

  el.style.transform=
  "translateY(100px) scale(.9)";

  el.style.transition=
  "all 1s ease";

  observer.observe(el);

});

// 3D TILT

document
.querySelectorAll(".card,.product-card")
.forEach(card=>{

  card.addEventListener("mousemove",e=>{

    const rect =
    card.getBoundingClientRect();

    const x =
    e.clientX - rect.left;

    const y =
    e.clientY - rect.top;

    const rotateY =
    (x / rect.width - .5) * 20;

    const rotateX =
    -(y / rect.height - .5) * 20;

    card.style.transform =
    `
    perspective(1200px)
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
    translateY(-10px)
    `;

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform=
    `
    perspective(1200px)
    rotateX(0deg)
    rotateY(0deg)
    `;

  });

});

// MAGNETIC BUTTONS

document.querySelectorAll(".btn")
.forEach(button=>{

  button.addEventListener("mousemove",e=>{

    const rect =
    button.getBoundingClientRect();

    const x =
    e.clientX - rect.left -
    rect.width/2;

    const y =
    e.clientY - rect.top -
    rect.height/2;

    button.style.transform=
    `translate(${x*.15}px,${y*.15}px)`;

  });

  button.addEventListener("mouseleave",()=>{

    button.style.transform=
    "translate(0,0)";

  });

});
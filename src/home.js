export function displayHome() {
  // container
  const content = document.getElementById("content");
  content.innerHTML = "";

  // hero section
  const hero = document.createElement("section");
  hero.className = "hero-section reveal";
  const heroTitle = document.createElement("h1");
  heroTitle.className = "hero-title";
  heroTitle.textContent = "LOS POLLOS HERMANOS";

  const heroTagLine = document.createElement("p");
  heroTagLine.className = "hero-tagline";
  heroTagLine.textContent = "Excellence in Every Detail";

  const ctaButton = document.createElement("button");
  ctaButton.className = "cta-button";
  ctaButton.textContent = "RESERVE A TABLE";

  hero.append(heroTitle, heroTagLine, ctaButton);

  //   cards
  const cards = document.createElement("section");
  cards.className = "cards-section reveal";

  const cardsData = [
    {
      title: "THE MENU",
      icon: `<svg viewBox="0 0 24 24" fill="none"  stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>`,
    },
    {
      title: "PRIVATE DINING",
      icon: `<svg viewBox="0 0 24 24" fill="none"  stroke-width="2"><path d="M2 20h20M4 20V10m16 10V10M2 10h20M12 10v10"/></svg>`,
    },
    {
      title: "THE EXPERIENCE",
      icon: `<svg viewBox="0 0 24 24" fill="none"  stroke-width="2"><path d="M8 22h8M7 10h10M12 15v7M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"/></svg>`,
    },
  ];

  cardsData.forEach((data) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <div class="icon-wrapper">${data.icon}</div>
      <h3>${data.title}</h3>
    `;

    cards.append(card);
  });

  content.append(hero, cards);

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  initHomeButtons();
  initRevealAnimations();
}

function initHomeButtons() {
  
  const reserveBtn = document.querySelector(".cta-button");
  if (reserveBtn) {
    reserveBtn.addEventListener("click", () => {
     
      document.getElementById("reserve").click();
    });
  }

  // Feature Cards
  const menuCard = document.querySelector(".card:nth-child(1)"); 
  const diningCard = document.querySelector(".card:nth-child(2)");
  const experienceCard = document.querySelector(".card:nth-child(3)"); 

  if (menuCard)
    menuCard.addEventListener("click", () =>
      document.getElementById("menu").click(),
    );

  
  if (diningCard)
    diningCard.addEventListener("click", () =>
      document.getElementById("reserve").click(),
    );

  
  if (experienceCard)
    experienceCard.addEventListener("click", () =>
      document.getElementById("story").click(),
    );
}
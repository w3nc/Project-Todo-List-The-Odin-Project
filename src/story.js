import storeOutside from "./images/store-outside.jpg";
import nachoGus from "./images/nacho-gus.jpg";

export function displayStory() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("section");
  hero.className = "story-hero";

  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${storeOutside}')`;

  hero.innerHTML = `
    <h1 class="story-title">OUR STORY</h1>
    <p class="story-subtitle">A Legacy of Excellence. A Commitment to Community.</p>
  `;

  const narrativeSection = document.createElement("section");
  narrativeSection.className = "story-narrative";

  narrativeSection.innerHTML = `
    <div class="narrative-container reveal">
      
      <!-- Left Side: The Story Text -->
      <div class="story-text">
        <h2 class="section-heading">From Humble Beginnings</h2>
        <p>
          What started as a small family operation has grown into one of Albuquerque's most 
          trusted dining establishments. At Los Pollos Hermanos, we believe that great food 
          is more than just a meal, it's a promise.
        </p>
        <p>
          Our founder's vision was simple: serve the finest quality poultry with uncompromising 
          standards and unwavering dedication to our community. Every dish that leaves our 
          kitchen is a testament to that commitment.
        </p>
        <p>
          We take pride in our meticulous preparation, our secret family recipes, and our 
          devotion to excellence in every detail. Because when you dine with us, you're not 
          just a customer, you're family.
        </p>
      </div>

      <!-- Right Side: Image -->
      <div class="story-image">
        <img src="${nachoGus}" 
             alt="Our Kitchen" 
             loading="lazy">
      </div>

    </div>
  `;

  const valuesSection = document.createElement("section");
  valuesSection.className = "story-values";

  const valuesData = [
    {
      title: "QUALITY",
      desc: "Only the finest ingredients. Every time. No exceptions.",
    },
    {
      title: "COMMUNITY",
      desc: "Serving our neighbors with pride and respect since day one.",
    },
    {
      title: "PRECISION",
      desc: "Excellence in every detail. Perfection in every plate.",
    },
  ];

  const valuesContainer = document.createElement("div");
  valuesContainer.className = "values-container";

  valuesData.forEach((value) => {
    const card = document.createElement("div");
    card.className = "value-card reveal";
    card.innerHTML = `
      
      <h3 class="value-title">${value.title}</h3>
      <p class="value-desc">${value.desc}</p>
    `;
    valuesContainer.appendChild(card);
  });

  valuesSection.innerHTML = `<h2 class="values-heading reveal">Our Core Values</h2>`;
  valuesSection.appendChild(valuesContainer);

  content.append(hero, narrativeSection, valuesSection);

  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  initRevealAnimations();
}

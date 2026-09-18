import fringChicken from "./images/pollos-chicken.jpg";
import fringWings from "./images/pollos-wings.jpg";

import baconEgg from "./images/bacon-egg.jpg";
import pollosDrink from "./images/pollos-drink.jpg";
import saulCoffee from "./images/saul-coffee.jpg";
import chickenTenders from "./images/chicken-tenders.jpg";
import loadedNachos from "./images/loaded-nachos.jpg";

export function displayMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("section");
  hero.className = "menu-hero reveal";
  hero.innerHTML = `
    <h1 class="menu-title">THE MENU</h1>
    <p class="menu-subtitle">Crafted with Precision. Served with Pride.</p>
  `;

  const menuData = [
    {
      category: "SIGNATURE POULTRY",
      items: [
        {
          name: "Fring's Spice Chicken",
          desc: "Our famous secret-spice blend, fried to golden perfection.",
          price: "$24",
          image: fringChicken,
        },
        {
          name: "Pollos Hermanos Wings",
          desc: "Tossed in our signature crimson glaze.",
          price: "$16",
          image: fringWings,
        },
        {
          name: "Nacho's Chicken Tenders",
          desc: "Served with a side of homemade ranch.",
          image: chickenTenders,
          price: "$18",
        },
      ],
    },
    {
      category: "STARTERS",
      items: [
        {
          name: "Bacon Omellete",
          desc: "Lightly scrambled, served with bacon.",
          price: "$14",
          image: baconEgg,
        },
        {
          name: "Loaded Nachos",
          desc: "Jalapeños, queso, and slow-cooked brisket.",
          price: "$15",
          image: loadedNachos,
        },
        {
          name: "Spice Curls",
          desc: "Premium, southwest-style curly fry.",
          price: "$16",
          image:
            "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=600&auto=format&fit=crop",
        },
      ],
    },
    {
      category: "DRINKS",
      items: [
        {
          name: "Los Pollos Root Beer",
          desc: "Ice-cold, classic, and perfectly carbonated.",
          price: "$4",
          image: pollosDrink,
        },
        {
          name: "Saul's 'Better Call Saul' Coffee",
          desc: "Strong, honored, and legally binding.",
          price: "$5",
          image: saulCoffee,
        },
      ],
    },
  ];

  const menuContainer = document.createElement("section");
  menuContainer.className = "menu-container";

  menuData.forEach((cat) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "menu-category";

    const catTitle = document.createElement("h2");
    catTitle.className = "category-title reveal";
    catTitle.textContent = cat.category;
    categoryDiv.appendChild(catTitle);

    // Build individual items
    const gridDiv = document.createElement("div");
    gridDiv.className = "menu-grid";

    // Build individual cards
    cat.items.forEach((item) => {
      const card = document.createElement("div");
      card.className = "menu-card reveal";

      card.innerHTML = `
        <div class="card-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="item-name">${item.name}</h3>
            <span class="item-price">${item.price}</span>
          </div>
          <p class="item-desc">${item.desc}</p>
        </div>
      `;

      gridDiv.appendChild(card);
    });

    
    categoryDiv.appendChild(gridDiv);
    menuContainer.appendChild(categoryDiv);
  });

  content.append(hero, menuContainer);



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

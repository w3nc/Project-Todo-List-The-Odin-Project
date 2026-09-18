import "./style.css";
import { displayHome } from "./home.js";
import { displayMenu } from "./menu.js";
import { displayReservations } from "./reservation.js";
import { displayStory } from "./story.js";
import { displayContact } from "./contact.js";

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu");
  const reserveBtn = document.getElementById("reserve");
  const storyBtn = document.getElementById("story");
  const contactBtn = document.getElementById("contact");

  const logoLink = document.getElementById("logo-link");
  if (logoLink) {
    logoLink.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo("home", displayHome);
    });
  }

  // Function to handle Active State
  function setActiveButton(activeId) {
    document.querySelectorAll("nav ul li button").forEach((btn) => {
      btn.classList.remove("active");
    });
    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.classList.add("active");
  }

  // Helper function to navigate AND save the state
  function navigateTo(pageId, displayFunction) {
    displayFunction();
    setActiveButton(pageId);

    sessionStorage.setItem("currentPage", pageId);
  }

  //  Attach Listeners using the new helper

  menuBtn.addEventListener("click", () => navigateTo("menu", displayMenu));
  reserveBtn.addEventListener("click", () =>
    navigateTo("reserve", displayReservations),
  );
  storyBtn.addEventListener("click", () => navigateTo("story", displayStory));
  contactBtn.addEventListener("click", () =>
    navigateTo("contact", displayContact),
  );

  //  Check for a saved page on load
  const savedPage = sessionStorage.getItem("currentPage");

  if (savedPage === "menu") {
    navigateTo("menu", displayMenu);
  } else if (savedPage === "reserve") {
    navigateTo("reserve", displayReservations);
  } else if (savedPage === "story") {
    navigateTo("story", displayStory);
  } else if (savedPage === "contact") {
    navigateTo("contact", displayContact);
  } else {
    navigateTo("logo-link", displayHome);
  }
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 },
);

window.initRevealAnimations = function () {
  document.querySelectorAll(".reveal").forEach((el) => {
    el.classList.remove("active");
    revealObserver.observe(el);
  });
};

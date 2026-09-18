import reserveBg from "./images/reserve-bg.jpg";

export function displayReservations() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("section");
  hero.className = "res-hero";

  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("${reserveBg}")`;

  hero.innerHTML = `
    <h1 class="res-title reveal">RESERVATIONS</h1>
  `;

  const mainContainer = document.createElement("section");
  mainContainer.className = "res-container";

  mainContainer.innerHTML = `
    <div class="res-layout">
      
      
      <div class="res-form-card reveal">
        <form class="booking-form" onsubmit="event.preventDefault(); alert('Table reserved! Gus Fring approves.');">
          <input type="text" placeholder="Name" required>
          <input type="email" placeholder="Email" required>
          <input type="tel" placeholder="Phone" required>
          
          <div class="form-row">
            <input type="date" required>
            <input type="time" required>
          </div>
          
          <select required>
            <option value="" disabled selected>Number of guests</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5+">5+ People</option>
          </select>
          
          <textarea placeholder="Special requests" rows="3"></textarea>
          
          <button type="submit" class="submit-btn">CONFIRM RESERVATION</button>
        </form>
      </div>

      
      <div class="res-sidebar reveal">
        <div class="info-card">
          <h3>Phone:</h3>
          <p>(505) 555-0199</p>
        </div>
        <div class="info-card">
          <h3>Email:</h3>
          <p>reservations@lospollos.com</p>
        </div>
        <div class="info-card">
          <h3>Business Hours:</h3>
          <p>Mon–Sun 11am–10pm</p>
        </div>
      </div>

    </div>
  `;

  content.append(hero, mainContainer);

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

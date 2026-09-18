import pollosInside from "./images/pollos-inside2.jpg";

export function displayContact() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const hero = document.createElement("section");
  hero.className = "contact-hero";

  hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${pollosInside}')`;

  hero.innerHTML = `
    <h1 class="contact-title">CONTACT US</h1>
    <p class="contact-subtitle">We'd love to hear from you.</p>
  `;

  const mainContainer = document.createElement("section");
  mainContainer.className = "contact-container";

  mainContainer.innerHTML = `
    <div class="contact-layout">
      
      <!-- Left Side: Contact Info & Map -->
      <div class="contact-info reveal">
        <div class="info-block">
          <h3>Visit Us</h3>
          <p>9809 Margo St NE<br>Albuquerque, NM 87112</p>
        </div>
        <div class="info-block">
          <h3>Call Us</h3>
          <p>(505) 555-0199</p>
        </div>
        <div class="info-block">
          <h3>️ Email Us</h3>
          <p>gusfring@lospollos.com</p>
        </div>
        
        <!-- Map Placeholder -->
        <div class="map-placeholder">
          <iframe src="https://www.google.com/maps/embed?pb=!3m2!1sen!2sph!4v1789485438651!5m2!1sen!2sph!6m8!1m7!1sR0E3ZbN9UH9nqCqvmdsLpw!2m2!1d35.01444340288661!2d-106.6861062453035!3f255.4685783477395!4f-11.726061857888027!5f0.7820865974627469" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>

      <!-- Right Side: Message Form -->
      <div class="contact-form-card reveal">
        <h2 class="form-heading">Send a Message</h2>
        <form class="message-form" onsubmit="event.preventDefault(); alert('Message received. We will be in touch. - G.F.');">
          <input type="text" placeholder="Your Name" required>
          <input type="email" placeholder="Your Email" required>
          <input type="text" placeholder="Subject" required>
          <textarea placeholder="How can we help you?" rows="5" required></textarea>
          <button type="submit" class="send-btn">SEND MESSAGE</button>
        </form>
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

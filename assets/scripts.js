// ===== SCRIPT.JS (Separated File) =====

// Dark Mode Toggle
const toggle = document.getElementById("darkModeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = toggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  });
}

// Smooth Scroll
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Card Reveal Animation
const cards = document.querySelectorAll(".card");
function revealCards() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
}
window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);

// Firebase Contact Form
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXGuxI303y1rSQyJnRsgTkNGIrvpqbmCk",
  authDomain: "portfolio-contact-4edd1.firebaseapp.com",
  projectId: "portfolio-contact-4edd1",
  storageBucket: "portfolio-contact-4edd1.firebasestorage.app",
  messagingSenderId: "659428762074",
  appId: "1:659428762074:web:e6c8e35e8dda34f846e0e3",
  measurementId: "G-EVF5EQP9Q2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    try {
      await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
        timestamp: serverTimestamp(),
      });
      alert("Message sent successfully!");
      form.reset();
    } catch (error) {
      alert("Error sending message. Try again later.");
      console.error(error);
    }
  });
}

 
// document.getElementById('signup-form').addEventListener('submit', function(e) {
//   e.preventDefault();
//   alert('Thank you for signing up!');
//   this.reset();
// });
function toggleMenu() {
document.querySelector('.nav-links').classList.toggle('show');
}
document.getElementById("signup-form").addEventListener("submit", function(e) {
e.preventDefault();
const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const skill = document.getElementById("skill").value.trim();
const portfolio = document.getElementById("portfolio").value.trim();

if (name && email && skill && portfolio) {
  document.getElementById("signup-form").reset();
  document.getElementById("thank-you").classList.remove("hidden");
} else {
  alert("Please fill all fields correctly.");
}
});
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const showSlide = (index) => {
slides.forEach((s, i) => {
  s.classList.toggle('active', i === index);
});
currentSlide = index;
};
setInterval(() => {
showSlide((currentSlide + 1) % slides.length);
}, 3000);

// Hamburger toggle
 
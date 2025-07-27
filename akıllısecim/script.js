
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if(window.scrollY > 50) {
    header.style.backgroundColor = '#005fa3';
  } else {
    header.style.backgroundColor = '#0077cc';
  }
});


  const toggle = document.getElementById("theme-toggle");

  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    
    if (document.body.classList.contains("dark-mode")) {
      toggle.textContent = "☀️ Light Mode";
    } else {
      toggle.textContent = "🌙 Dark Mode";
    }
  });




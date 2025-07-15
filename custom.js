document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    alert("Thanks for reaching out, " + name + "! 🎉");
    this.reset();
  } else {
    alert("Please fill out all the fields before submitting. ⚠️");
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = this;
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  // Show loading text or spinner (optional)
  document.getElementById("response").innerText = "⏳ Sending...";

  fetch("https://script.google.com/macros/s/AKfycbx9KwVdtugri4gGHBywk0vWRyi_bslXWjSm-tr-7P1J4iFVc3ObDmURLCakaSxpz7mmyw/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.text())
    .then((response) => {
      document.getElementById("response").innerText = "✅ Your message has been sent!";
      form.reset(); // Clear the form
    })
    .catch((error) => {
      document.getElementById("response").innerText = "❌ Something went wrong. Try again!";
      console.error("Error:", error);
    });
});

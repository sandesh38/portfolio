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

  fetch("https://script.google.com/macros/s/AKfycbx1N9xeTUSAJF0_mBSXHGJfQ_-vZh_ltSg6Bp9g_ozenKDrMpeAoy7x6X05--7vANPjKg/exec", {
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

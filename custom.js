document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  fetch("https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.text())
    .then(response => {
      document.getElementById("response").innerText = "✅ Email Sent!";
    })
    .catch(error => {
      document.getElementById("response").innerText = "❌ Error sending email.";
    });
});


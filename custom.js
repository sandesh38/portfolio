document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message")
  };

  fetch("https://script.google.com/macros/s/AKfycbx1N9xeTUSAJF0_mBSXHGJfQ_-vZh_ltSg6Bp9g_ozenKDrMpeAoy7x6X05--7vANPjKg/exec", {
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


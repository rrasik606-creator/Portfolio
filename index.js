function sendMail(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("mail").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation
    if (name === ""||email === ""||subject === ""||message === "") {
        alert("Please fill the box.");
        return;
    }
    if (name.length < 3) {
        alert("Name must be at least 3 characters.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    const contact = { name, email, subject, message };

    const serviceID = "service_zht8ewv";
    const templateID = "template_1f8266k";

    emailjs.send(serviceID, templateID, contact)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully!");
        })
        .catch(err => console.log(err));
}

function goToDiv() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
let navbarCollapse = document.querySelector(".navbar-collapse");
let navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    navbarCollapse.classList.toggle("show");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("CChT4BRf-1V2DV_8J");

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const serviceID = "service_3lk5kxh";
      const templateID = "template_1y8gnhi";

      emailjs.sendForm(serviceID, templateID, "#contact-form").then(
        () => {
          alert("Message sent successfully!");
          document.getElementById("contact-form").reset();
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send message. Please try again later.");
        }
      );
    });
});

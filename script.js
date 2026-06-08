// EDIT: Change this if the main enquiry email address changes.
const enquiryEmail = "support@securelinkltd.co.uk";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const enquiryForm = document.querySelector("#enquiry-form");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

enquiryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(enquiryForm);
  const subject = `SecureLink LTD enquiry - ${formData.get("service")}`;
  const body = [
    "SecureLink LTD website enquiry",
    "",
    `Name: ${formData.get("name")}`,
    `Company: ${formData.get("company") || "Not provided"}`,
    `Email: ${formData.get("email")}`,
    `Phone: ${formData.get("phone") || "Not provided"}`,
    `Service required: ${formData.get("service")}`,
    "",
    "Message:",
    formData.get("message")
  ].join("\n");

  const mailtoUrl = `mailto:${enquiryEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoUrl;
});

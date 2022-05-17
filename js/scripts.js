window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      offset: 74,
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });

  // Activate SimpleLightbox plugin for portfolio items
  new SimpleLightbox({
    elements: "#portfolio a.portfolio-box",
  });
});

//EmailJS

(function () {
  emailjs.init("user_iT8PeoOmd8g43E2I3f2Wb");
})();

function sendMail(params) {
  let tempParams = {
    to_name: document.getElementById("recipient-name").value,
    number: document.getElementById("number").value,
    email: document.getElementById("Email").value,
    message: document.getElementById("mssg").value,
  };
  emailjs
    .send("service_u8vvva9", "template_xrv2jyp", tempParams)
    .then(function (res) {
      console.log("Sucess", res.status);
      location.reload();
    });
}

const year1 = new Date().getFullYear();
const year = document.getElementById("year");

year.innerHTML = year1;

AOS.init();

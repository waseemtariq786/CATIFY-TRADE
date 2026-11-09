document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const opened = nav.classList.toggle("active");
      toggle.setAttribute("aria-expanded", opened);
      toggle.textContent = opened ? "✕" : "☰";
    });

    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.textContent = "☰";
      });
    });
  }

  document.querySelectorAll(".quote-link").forEach(link => {
    link.addEventListener("click", () => {
      const product = document.getElementById("productInterest");
      if (product) product.value = link.dataset.product;
    });
  });

  const form = document.getElementById("inquiryForm");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("customerName").value.trim();
      const email = document.getElementById("customerEmail").value.trim();
      const product = document.getElementById("productInterest").value;
      const message = document.getElementById("customerMessage").value.trim();

      const text = `CATIFY TRADE - New Inquiry
Name: ${name}
Email: ${email}
Product: ${product}
Message: ${message}`;

      window.open(
        "https://wa.me/923247615133?text=" + encodeURIComponent(text),
        "_blank"
      );
    });
  }

  const revealElements = document.querySelectorAll("section, .product-card");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(element => {
      element.classList.add("reveal");
      observer.observe(element);
    });
  } else {
    revealElements.forEach(element => element.classList.add("visible"));
  }
});

document.querySelector(".email-btn")?.addEventListener("click", () => {
  const name = document.getElementById("customerName").value.trim();
  const email = document.getElementById("customerEmail").value.trim();
  const product = document.getElementById("productInterest").value;
  const message = document.getElementById("customerMessage").value.trim();

  if (!name || !email || !product || !message) {
    alert("Please complete all inquiry fields.");
    return;
  }

  const subject = encodeURIComponent("CATIFY TRADE - Product Inquiry");
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nProduct: ${product}\nMessage: ${message}`
  );

  window.location.href =
    `mailto:Tradecatify@gmail.com?subject=${subject}&body=${body}`;
});

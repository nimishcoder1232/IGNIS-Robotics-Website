document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", (event) => {
      if (event.target.matches("a")) {
        nav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  const currentPage = window.location.pathname.includes("/about/")
    ? "about"
    : window.location.pathname.includes("/sponsors/")
      ? "sponsors"
      : window.location.pathname.includes("/contact/")
        ? "contact"
        : window.location.pathname.includes("/our-team/")
          ? "our-team"
          : "home";

  document.querySelectorAll("#site-nav a").forEach((link) => {
    const linkPath = new URL(link.href).pathname;
    const linkPage = linkPath.includes("/about/")
      ? "about"
      : linkPath.includes("/sponsors/")
        ? "sponsors"
        : linkPath.includes("/contact/")
          ? "contact"
          : linkPath.includes("/our-team/")
            ? "our-team"
            : "home";
    if (linkPage === currentPage) link.setAttribute("aria-current", "page");
  });

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }
});

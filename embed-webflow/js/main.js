(function () {
  "use strict";

  /* ---------------------------------------------------------
     Footer year
  --------------------------------------------------------- */
  var yearEl = document.getElementById("v1-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------------------------------------------------
     Header: solid background past the hero, mobile menu toggle
     (mirrors components/Header/Header.tsx)
  --------------------------------------------------------- */
  var header = document.getElementById("v1-header");
  var burger = document.getElementById("v1-burger");
  var mobileMenu = document.getElementById("v1-mobile-menu");

  if (header) {
    var threshold = function () {
      return window.innerHeight * 0.82;
    };
    var onScroll = function () {
      if (window.scrollY > threshold()) header.classList.add("is-solid");
      else header.classList.remove("is-solid");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
  }

  if (burger && mobileMenu) {
    var menuOpen = false;
    var setMenuOpen = function (open) {
      menuOpen = open;
      mobileMenu.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      document.documentElement.style.overflow = open ? "hidden" : "";
    };
    burger.addEventListener("click", function () {
      setMenuOpen(!menuOpen);
    });
    mobileMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuOpen(false);
      });
    });
  }

  /* ---------------------------------------------------------
     Scroll reveal (mirrors hooks/useReveal.ts): each [data-reveal]
     element gets "reveal-visible" added once it enters the viewport.
  --------------------------------------------------------- */
  var revealTargets = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    revealTargets.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealTargets.forEach(function (el) {
      el.classList.add("reveal-visible");
    });
  }

  /* ---------------------------------------------------------
     Pill-nav carousels: Services and Excellence (mobile) tracks
     (mirrors the `scroll()` helpers in Services.tsx / Excellence.tsx)
  --------------------------------------------------------- */
  document.querySelectorAll("[data-scroll-target]").forEach(function (button) {
    button.addEventListener("click", function () {
      var track = document.getElementById(button.getAttribute("data-scroll-target"));
      if (!track) return;
      var dir = Number(button.getAttribute("data-scroll-dir")) || 1;
      var card = track.querySelector("li");
      var amount = card ? card.getBoundingClientRect().width + 24 : track.clientWidth * 0.5;
      track.scrollBy({ left: amount * dir, behavior: "smooth" });
    });
  });
})();

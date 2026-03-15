// ============================================================
// RAMGANGA JEWELLERS - Enhanced App with Gravity & Scroll Effects
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initCustomCursor();
  initScrollProgress();
  initParallax();
  initMagneticButtons();
  renderCategories();
  renderFeatured();
  renderProducts("all");
  setupFilters();
  setupNav();
  initScrollReveal();
  setupModal();
  setupBackToTop();
  typewriterEffect();
  initTiltCards();
  initCounters();
});

// ============================================================
// PRELOADER
// ============================================================
function initPreloader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const loader = document.getElementById("preloader");
      if (loader) loader.classList.add("hidden");
    }, 800);
  });
  // Fallback - hide after 3s regardless
  setTimeout(() => {
    const loader = document.getElementById("preloader");
    if (loader) loader.classList.add("hidden");
  }, 3000);
}

// ============================================================
// CUSTOM CURSOR
// ============================================================
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  if (!dot || !ring || window.innerWidth < 768) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX - 4 + "px";
    dot.style.top = mouseY - 4 + "px";
  });

  // Smooth follow for ring
  function animateRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Hover effect on interactive elements
  const interactives = "a, button, .product-card, .cat-card, .filter-btn, .magnetic, .contact-item";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(interactives)) ring.classList.add("hover");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(interactives)) ring.classList.remove("hover");
  });
}

// ============================================================
// SCROLL PROGRESS BAR
// ============================================================
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    bar.style.width = progress + "%";
  }, { passive: true });
}

// ============================================================
// PARALLAX EFFECT
// ============================================================
function initParallax() {
  // Skip parallax on mobile for smooth scrolling
  if (window.innerWidth < 768) return;

  const parallaxElements = document.querySelectorAll("[data-parallax]");
  const parallaxBgs = document.querySelectorAll("[data-parallax-bg]");

  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.style.transform = `translateY(${scrollY * speed * 0.1}px)`;
      }
    });

    parallaxBgs.forEach(el => {
      const speed = parseFloat(el.dataset.parallaxBg);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const offset = (rect.top * speed * 0.3);
        el.style.backgroundPositionY = offset + "px";
      }
    });
  }, { passive: true });
}

// ============================================================
// MAGNETIC BUTTONS
// ============================================================
function initMagneticButtons() {
  if (window.innerWidth < 768) return;
  document.querySelectorAll(".magnetic").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)";
    });
  });
}

// ============================================================
// TILT EFFECT ON PRODUCT CARDS (Gravity feel)
// ============================================================
function initTiltCards() {
  if (window.innerWidth < 768) return;
  document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".product-card").forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const dist = Math.sqrt((x - centerX) ** 2 + (y - centerY) ** 2);
        if (dist < 400) {
          const rotateX = ((y - centerY) / centerY) * 3;
          const rotateY = ((x - centerX) / centerX) * -3;
          card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        }
      }
    });
  });

  document.addEventListener("mouseleave", () => {
    document.querySelectorAll(".product-card").forEach(card => {
      card.style.transform = "";
    });
  }, true);
}

// ============================================================
// HERO TYPEWRITER
// ============================================================
function typewriterEffect() {
  const el = document.getElementById("typewriter");
  if (!el) return;
  const words = ["Elegance", "Tradition", "Craftsmanship", "Heritage", "Beauty"];
  let wordIdx = 0, charIdx = 0, deleting = false;
  function tick() {
    const word = words[wordIdx];
    el.textContent = word.substring(0, charIdx);
    if (!deleting) {
      charIdx++;
      if (charIdx > word.length) { deleting = true; setTimeout(tick, 2000); return; }
    } else {
      charIdx--;
      if (charIdx === 0) { deleting = false; wordIdx = (wordIdx + 1) % words.length; }
    }
    setTimeout(tick, deleting ? 40 : 100);
  }
  tick();
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCategories() {
  const grid = document.getElementById("category-grid");
  if (!grid) return;
  grid.innerHTML = CATEGORIES.map((cat, i) => `
    <div class="cat-card reveal-scale" style="--delay: ${i * 0.06}s" onclick="scrollToProducts('${cat.slug}')">
      <div class="cat-icon"><i class="${cat.icon}"></i></div>
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
      <span class="cat-count">${PRODUCTS.filter(p => p.category === cat.slug).length} pieces</span>
    </div>
  `).join("");
}

// ============================================================
// FEATURED
// ============================================================
function renderFeatured() {
  const grid = document.getElementById("featured-grid");
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured);
  grid.innerHTML = featured.map((p, i) => productCard(p, i)).join("");
}

// ============================================================
// ALL PRODUCTS
// ============================================================
function renderProducts(category) {
  const grid = document.getElementById("products-grid");
  if (!grid) return;
  const filtered = category === "all" ? PRODUCTS : PRODUCTS.filter(p => p.category === category);
  if (filtered.length === 0) {
    grid.innerHTML = '<p class="no-products">No products found in this category.</p>';
    return;
  }
  grid.innerHTML = filtered.map((p, i) => productCard(p, i)).join("");
  initScrollReveal();
}

function productCard(product, index) {
  return `
    <div class="product-card animate-on-scroll" style="--delay: ${index * 0.04}s" onclick="openModal(${product.id})">
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy"
             onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 300 300%22><rect fill=%22%23f3f4f6%22 width=%22300%22 height=%22300%22/><text x=%2250%%22 y=%2250%%22 text-anchor=%22middle%22 dy=%22.3em%22 fill=%22%23d4af37%22 font-size=%2240%22>&#128142;</text></svg>'">
        <div class="card-overlay">
          <span class="view-btn">View Details</span>
        </div>
        ${product.featured ? '<span class="badge-featured">Featured</span>' : ''}
        <span class="badge-weight"><i class="fas fa-weight-hanging"></i> ${product.weight}</span>
      </div>
      <div class="card-body">
        <span class="card-category">${getCategoryName(product.category)}</span>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-meta">
          <span class="meta-material"><i class="fas fa-palette"></i> ${product.material}</span>
          ${product.gemstone ? `<span class="meta-gem"><i class="fas fa-gem"></i> ${product.gemstone}</span>` : ''}
        </div>
      </div>
    </div>
  `;
}

function getCategoryName(slug) {
  const cat = CATEGORIES.find(c => c.slug === slug);
  return cat ? cat.name : slug;
}

// ============================================================
// FILTERS
// ============================================================
function setupFilters() {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(btn => {
    btn.addEventListener("click", () => {
      btns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderProducts(btn.dataset.category);
    });
  });
}

function scrollToProducts(category) {
  const btns = document.querySelectorAll(".filter-btn");
  btns.forEach(b => {
    b.classList.remove("active");
    if (b.dataset.category === category) b.classList.add("active");
  });
  renderProducts(category);
  document.getElementById("collections").scrollIntoView({ behavior: "smooth" });
}

// ============================================================
// MODAL
// ============================================================
function setupModal() {
  const modal = document.getElementById("product-modal");
  const close = document.getElementById("modal-close");
  if (close) close.addEventListener("click", closeModal);
  if (modal) modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

function openModal(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const modal = document.getElementById("product-modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <div class="modal-grid">
      <div class="modal-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-info">
        <span class="modal-category">${getCategoryName(product.category)}</span>
        <h2>${product.name}</h2>
        <p class="modal-desc">${product.description}</p>
        <div class="modal-details">
          <div class="detail-row">
            <span class="detail-label"><i class="fas fa-weight-hanging"></i> Approx. Weight</span>
            <span class="detail-value">${product.weight}</span>
          </div>
          <div class="detail-row">
            <span class="detail-label"><i class="fas fa-palette"></i> Material</span>
            <span class="detail-value">${product.material}</span>
          </div>
          ${product.gemstone ? `
          <div class="detail-row">
            <span class="detail-label"><i class="fas fa-gem"></i> Gemstone</span>
            <span class="detail-value">${product.gemstone}</span>
          </div>` : ''}
          <div class="detail-row">
            <span class="detail-label"><i class="fas fa-tag"></i> Category</span>
            <span class="detail-value">${getCategoryName(product.category)}</span>
          </div>
        </div>
        <div class="modal-actions">
          <a href="https://wa.me/919897000000?text=Hi! I'm interested in ${encodeURIComponent(product.name)}" target="_blank" class="btn-whatsapp">
            <i class="fab fa-whatsapp"></i> Enquire on WhatsApp
          </a>
          <button class="btn-outline" onclick="closeModal()">Continue Browsing</button>
        </div>
      </div>
    </div>
  `;
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("open");
  document.body.style.overflow = "";
}

// ============================================================
// NAVBAR
// ============================================================
function setupNav() {
  const nav = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      hamburger.classList.toggle("active");
    });
  }

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("active");
    });
  });

  // Active nav highlight on scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute("id");
      const link = document.querySelector(`.nav-link[href="#${id}"]`);
      if (link) {
        if (scrollY >= top && scrollY < top + height) {
          document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
          link.classList.add("active");
        }
      }
    });
  }, { passive: true });
}

// ============================================================
// SCROLL REVEAL (Intersection Observer)
// ============================================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Stagger children if needed
        const delay = entry.target.style.getPropertyValue('--delay') || '0s';
        entry.target.style.transitionDelay = delay;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
}

// ============================================================
// BACK TO TOP
// ============================================================
function setupBackToTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", () => {
    btn.classList.toggle("show", window.scrollY > 600);
  }, { passive: true });
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ============================================================
// COUNTER ANIMATION
// ============================================================
function initCounters() {
  const statsSection = document.getElementById("stats-section");
  if (!statsSection) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting && !animated) {
      animated = true;
      document.querySelectorAll(".counter").forEach(counter => {
        const target = +counter.dataset.target;
        const suffix = counter.dataset.suffix || "";
        const duration = 2200;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          counter.textContent = Math.floor(current) + suffix;
        }, 16);
      });
    }
  }, { threshold: 0.4 });

  observer.observe(statsSection);
}

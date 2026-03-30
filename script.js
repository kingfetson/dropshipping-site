/* ============================================================
   script.js — TrendKe Fashion Landing Page
   All features: Carousel · Modals · Orders · WhatsApp
                 M-Pesa · Countdown · Abandoned Cart
   ============================================================ */

// ── Wait for DOM ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {

  /* ============================================================
     1. APPLY CONFIG
  ============================================================ */
  // Brand names
  const brand = (typeof CONFIG !== 'undefined') ? CONFIG.BUSINESS_NAME : 'TrendKe Fashion';
  document.title = `${brand} – Kenya's Best Deals`;
  const el = (id) => document.getElementById(id);
  el('headerBrand').textContent = brand;
  el('footerBrand').textContent = brand;

  const WHATSAPP = (typeof CONFIG !== 'undefined') ? CONFIG.WHATSAPP_NUMBER : '254700000000';
  const TILL     = (typeof CONFIG !== 'undefined') ? CONFIG.MPESA_TILL : 'XXXXXX';
  const SCRIPT   = (typeof CONFIG !== 'undefined') ? CONFIG.GOOGLE_SCRIPT_URL : '';
  const DEL_NBI  = (typeof CONFIG !== 'undefined') ? CONFIG.DELIVERY_NAIROBI : 150;
  const DEL_OUT  = (typeof CONFIG !== 'undefined') ? CONFIG.DELIVERY_OUTSIDE : 350;

  el('mpesaTill').textContent = TILL;
  el('footerPhone').textContent = `+${WHATSAPP}`;

  /* ============================================================
     2. PRODUCT DATA
        Replace images with your real product photos
  ============================================================ */
  const PRODUCTS = [
    {
      id: 1,
      name: "Elegant Ankara Wrap Dress",
      price: 1850,
      oldPrice: 2800,
      image: "https://images.unsplash.com/photo-1590548784585-643d2b9f2925?w=600&q=80",
      badge: "🔥 HOT DEAL",
      badgeClass: "",
      stock: 7,
      desc: "Stunning Ankara-print wrap dress. Vibrant colours, perfect for events, church, and casual outings. Machine washable. Available in sizes S–XL.",
    },
    {
      id: 2,
      name: "Men's Slim-Fit Chinos – Beige",
      price: 1200,
      oldPrice: 1800,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80",
      badge: "SALE",
      badgeClass: "amber",
      stock: 12,
      desc: "Premium slim-fit chinos crafted from breathable cotton blend. Smart-casual look for office or weekends. Sizes 28–38.",
    },
    {
      id: 3,
      name: "Ladies Peplum Blouse – Black",
      price: 950,
      oldPrice: 1500,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
      badge: "✅ NEW",
      badgeClass: "green",
      stock: 5,
      desc: "Chic peplum blouse in elegant matte black. Pairs perfectly with jeans, trousers, or skirts. Sizes S–2XL.",
    },
    {
      id: 4,
      name: "African Print Bucket Hat",
      price: 650,
      oldPrice: 1000,
      image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80",
      badge: "🔥 HOT DEAL",
      badgeClass: "",
      stock: 18,
      desc: "Bold Kente-inspired print bucket hat. Protects from Nairobi sun with ultimate style. One size fits all (adjustable).",
    },
    {
      id: 5,
      name: "Denim Jacket – Washed Blue",
      price: 2200,
      oldPrice: 3500,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
      badge: "BEST VALUE",
      badgeClass: "amber",
      stock: 9,
      desc: "Classic washed denim jacket with distressed detailing. Unisex cut, versatile layering piece. Sizes S–XXL.",
    },
    {
      id: 6,
      name: "Women's Bodycon Mini Dress",
      price: 1100,
      oldPrice: 1700,
      image: "https://images.unsplash.com/photo-1572804013427-4d7ca7268217?w=600&q=80",
      badge: "🔥 HOT DEAL",
      badgeClass: "",
      stock: 6,
      desc: "Figure-hugging bodycon mini in stretchy ribbed fabric. Perfect for nights out. Available in black, red, and olive. Sizes S–XL.",
    },
  ];

  /* ============================================================
     3. TESTIMONIALS DATA
  ============================================================ */
  const TESTIMONIALS = [
    {
      name: "Amina W.",
      location: "Westlands, Nairobi",
      text: "My dress arrived the same day I ordered! Quality is amazing and the price is unbeatable. Definitely ordering again!",
      stars: 5,
      initials: "AW",
    },
    {
      name: "Brian Ochieng",
      location: "Kisumu",
      text: "Paid via M-Pesa and got my chinos in 2 days. Very impressed with the fitting. Will recommend to my boys!",
      stars: 5,
      initials: "BO",
    },
    {
      name: "Cynthia Njoki",
      location: "Thika Road",
      text: "The Ankara dress is FIRE 🔥 Got so many compliments at the wedding. Packaging was neat, no issues at all.",
      stars: 5,
      initials: "CN",
    },
    {
      name: "David Kamau",
      location: "Mombasa",
      text: "Fast delivery outside Nairobi — didn't expect it this quick. Good quality and pay on delivery option is a plus.",
      stars: 4,
      initials: "DK",
    },
    {
      name: "Grace Auma",
      location: "Kibera, Nairobi",
      text: "Ordered the blouse and it fits perfectly. Customer service on WhatsApp is very responsive. 10/10!",
      stars: 5,
      initials: "GA",
    },
    {
      name: "James Mwangi",
      location: "Nakuru",
      text: "Delivery was fast and the jacket looks exactly like in the photo. No surprises. Happy customer!",
      stars: 5,
      initials: "JM",
    },
  ];

  /* ============================================================
     4. CAROUSEL SLIDES — Hero background images
  ============================================================ */
  const SLIDES = [
    {
      img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=75",
      alt: "Fashion collection",
    },
    {
      img: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1200&q=75",
      alt: "Trendy outfits Kenya",
    },
    {
      img: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=75",
      alt: "Fashion deals Nairobi",
    },
  ];

  /* ============================================================
     5. RENDER CAROUSEL
  ============================================================ */
  const track  = el('carouselTrack');
  const dotsEl = el('carouselDots');
  let currentSlide = 0;
  let carouselTimer;

  SLIDES.forEach((s, i) => {
    const div = document.createElement('div');
    div.className = `carousel-slide${i === 0 ? ' active' : ''}`;
    div.innerHTML = `<img src="${s.img}" alt="${s.alt}" loading="${i === 0 ? 'eager' : 'lazy'}" />`;
    track.appendChild(div);

    const dot = document.createElement('div');
    dot.className = `dot${i === 0 ? ' active' : ''}`;
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goToSlide(i));
    dotsEl.appendChild(dot);
  });

  function goToSlide(n) {
    const slides = track.querySelectorAll('.carousel-slide');
    const dots   = dotsEl.querySelectorAll('.dot');
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (n + SLIDES.length) % SLIDES.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }

  function nextSlide() { goToSlide(currentSlide + 1); }

  function startCarousel() {
    carouselTimer = setInterval(nextSlide, 4000);
  }

  el('carouselNext').addEventListener('click', () => { clearInterval(carouselTimer); nextSlide(); startCarousel(); });
  el('carouselPrev').addEventListener('click', () => { clearInterval(carouselTimer); goToSlide(currentSlide - 1); startCarousel(); });

  startCarousel();

  /* ============================================================
     6. RENDER PRODUCTS
  ============================================================ */
  const grid = el('productsGrid');

  PRODUCTS.forEach((p, i) => {
    const discount = Math.round((1 - p.price / p.oldPrice) * 100);
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.animationDelay = `${i * 0.08}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" loading="lazy" />
        <span class="product-badge ${p.badgeClass}">${p.badge}</span>
        <span class="product-stock-badge">Only ${p.stock} left!</span>
      </div>
      <div class="product-info">
        <div class="product-name">${p.name}</div>
        <div class="product-price-row">
          <span class="product-price">KES ${p.price.toLocaleString()}</span>
          <span class="product-old-price">KES ${p.oldPrice.toLocaleString()}</span>
          <span class="product-badge amber" style="position:static;margin-left:auto;font-size:.6rem;">${discount}% OFF</span>
        </div>
        <button class="btn btn-order" data-id="${p.id}">🛒 Order Now</button>
      </div>
    `;
    // Open product modal on card click
    card.addEventListener('click', (e) => {
      if (!e.target.classList.contains('btn-order')) openProductModal(p.id);
    });
    card.querySelector('.btn-order').addEventListener('click', (e) => {
      e.stopPropagation();
      openOrderModal(p.id);
    });
    grid.appendChild(card);
  });

  /* ============================================================
     7. RENDER TESTIMONIALS
  ============================================================ */
  const testGrid = el('testimonialsGrid');
  TESTIMONIALS.forEach((t, i) => {
    const card = document.createElement('div');
    card.className = 'testi-card reveal';
    card.style.animationDelay = `${i * 0.1}s`;
    card.innerHTML = `
      <div class="testi-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5 - t.stars)}</div>
      <p class="testi-text">"${t.text}"</p>
      <div class="testi-author">
        <div class="testi-avatar">${t.initials}</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-loc">📍 ${t.location}</div>
        </div>
      </div>
    `;
    testGrid.appendChild(card);
  });

  /* ============================================================
     8. SCROLL REVEAL
  ============================================================ */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); }
    });
  }, { threshold: 0.12 });

  // Observe all .reveal elements (products + testimonials)
  // Re-query since cards were just added
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

  /* ============================================================
     9. COUNTDOWN TIMER
  ============================================================ */
  const HOURS = (typeof CONFIG !== 'undefined') ? CONFIG.COUNTDOWN_HOURS : 2;

  // Persist end time in localStorage so refresh doesn't reset
  let endTime = localStorage.getItem('trendke_countdown');
  if (!endTime) {
    endTime = Date.now() + HOURS * 60 * 60 * 1000;
    localStorage.setItem('trendke_countdown', endTime);
  }
  endTime = Number(endTime);

  function updateCountdown() {
    const diff = endTime - Date.now();
    if (diff <= 0) {
      // Reset for next session
      localStorage.removeItem('trendke_countdown');
      el('countdown').textContent = '00:00:00';
      return;
    }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    el('countdown').textContent =
      `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* ============================================================
     10. PRODUCT MODAL
  ============================================================ */
  function openProductModal(id) {
    const p = PRODUCTS.find((x) => x.id === id);
    if (!p) return;
    el('modalImg').src   = p.image;
    el('modalImg').alt   = p.name;
    el('modalName').textContent  = p.name;
    el('modalPrice').textContent = `KES ${p.price.toLocaleString()}`;
    el('modalStock').textContent = `⚠️ Only ${p.stock} left!`;
    el('modalDesc').textContent  = p.desc;
    el('deliveryNbi').textContent = `KES ${DEL_NBI}`;
    el('deliveryOut').textContent = `KES ${DEL_OUT}`;
    el('modalOrderBtn').onclick = () => { closeModal('productModal'); openOrderModal(id); };
    openModal('productModal');
  }

  /* ============================================================
     11. ORDER MODAL & FORM
  ============================================================ */
  let activeProduct = null;

  function openOrderModal(id) {
    activeProduct = PRODUCTS.find((x) => x.id === id);
    if (!activeProduct) return;
    el('fieldProduct').value = activeProduct.name;
    el('fieldQty').value     = 1;
    updateSummary();
    // Pre-fill from abandoned cart
    const saved = getSavedOrder();
    if (saved) {
      if (saved.name) el('fieldName').value = saved.name;
      if (saved.phone) el('fieldPhone').value = saved.phone;
      if (saved.location) el('fieldLocation').value = saved.location;
    }
    openModal('orderModal');
  }

  // Quantity controls
  el('qtyPlus').addEventListener('click', () => {
    const q = parseInt(el('fieldQty').value) || 1;
    if (q < 10) { el('fieldQty').value = q + 1; updateSummary(); }
  });
  el('qtyMinus').addEventListener('click', () => {
    const q = parseInt(el('fieldQty').value) || 1;
    if (q > 1) { el('fieldQty').value = q - 1; updateSummary(); }
  });
  el('fieldQty').addEventListener('input', updateSummary);
  el('fieldLocation').addEventListener('change', updateSummary);

  function updateSummary() {
    if (!activeProduct) return;
    const qty      = Math.max(1, parseInt(el('fieldQty').value) || 1);
    const loc      = el('fieldLocation').value;
    const subtotal = activeProduct.price * qty;
    const delivery = loc === 'Nairobi' ? DEL_NBI : loc === 'Outside Nairobi' ? DEL_OUT : null;

    // Apply upsell discount
    let discount = 0;
    if (qty >= 3) discount = Math.round(subtotal * 0.10);

    el('summSubtotal').textContent = `KES ${subtotal.toLocaleString()}`;
    el('summDelivery').textContent = delivery !== null
      ? (delivery === 0 ? 'FREE' : `KES ${delivery}`)
      : '—';

    // Free delivery for 2+ items
    const actualDelivery = qty >= 2 ? 0 : (delivery || 0);
    const total = subtotal - discount + (loc ? actualDelivery : 0);
    el('summTotal').textContent = loc ? `KES ${total.toLocaleString()}` : 'KES —';

    if (discount > 0) {
      el('summSubtotal').textContent += ` (−KES ${discount.toLocaleString()} discount!)`;
    }
    if (qty >= 2 && loc) {
      el('summDelivery').textContent = 'FREE 🎉';
    }
  }

  /* ============================================================
     12. FORM VALIDATION & SUBMIT
  ============================================================ */
  el('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const name     = el('fieldName').value.trim();
    const phone    = el('fieldPhone').value.trim();
    const location = el('fieldLocation').value;
    const product  = el('fieldProduct').value;
    const qty      = el('fieldQty').value;

    // Save to localStorage (clear abandoned cart)
    localStorage.removeItem('trendke_abandoned');

    // Show spinner
    el('submitLabel').hidden = true;
    el('spinner').hidden     = false;
    el('submitBtn').disabled = true;

    // Send to Google Sheets
    if (SCRIPT && SCRIPT.includes('script.google.com')) {
      try {
        await fetch(SCRIPT, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, phone, product, quantity: qty, location,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        // Silently fail — order still goes to WhatsApp
        console.warn('Google Sheets error:', err);
      }
    }

    // Restore button
    el('submitLabel').hidden = false;
    el('spinner').hidden     = true;
    el('submitBtn').disabled = false;

    closeModal('orderModal');
    showToast('✅ Order received! Redirecting to WhatsApp…', 'success');

    // Build WhatsApp message
    const price    = activeProduct ? activeProduct.price : 0;
    const del      = location === 'Nairobi' ? DEL_NBI : DEL_OUT;
    const actualDel = Number(qty) >= 2 ? 0 : del;
    const total    = price * Number(qty) + actualDel;

    const msg = encodeURIComponent(
`Hello, I want to order:

🛍 Product: ${product}
📦 Quantity: ${qty}
👤 Name: ${name}
📱 Phone: ${phone}
📍 Location: ${location}
💰 Total: KES ${total.toLocaleString()} (incl. delivery)

Is it available?`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
    }, 800);
  });

  function validateForm() {
    let valid = true;

    const name  = el('fieldName').value.trim();
    const phone = el('fieldPhone').value.trim();
    const loc   = el('fieldLocation').value;

    // Name
    if (name.length < 2) {
      el('errName').textContent = 'Please enter your full name.';
      valid = false;
    } else { el('errName').textContent = ''; }

    // Kenyan phone: 07XXXXXXXX or 01XXXXXXXX (10 digits)
    const phoneReg = /^0[17]\d{8}$/;
    if (!phoneReg.test(phone)) {
      el('errPhone').textContent = 'Enter a valid Kenyan number e.g. 0712345678';
      valid = false;
    } else { el('errPhone').textContent = ''; }

    // Location
    if (!loc) {
      el('errLocation').textContent = 'Please select your location.';
      valid = false;
    } else { el('errLocation').textContent = ''; }

    return valid;
  }

  /* ============================================================
     13. ABANDONED CART — Save partial form to localStorage
  ============================================================ */
  ['fieldName', 'fieldPhone', 'fieldLocation'].forEach((id) => {
    el(id).addEventListener('input', saveAbandonedOrder);
    el(id).addEventListener('change', saveAbandonedOrder);
  });

  function saveAbandonedOrder() {
    const data = {
      name:     el('fieldName').value.trim(),
      phone:    el('fieldPhone').value.trim(),
      location: el('fieldLocation').value,
      product:  el('fieldProduct').value,
      savedAt:  Date.now(),
    };
    if (data.name || data.phone) {
      localStorage.setItem('trendke_abandoned', JSON.stringify(data));
    }
  }

  function getSavedOrder() {
    try {
      const raw = localStorage.getItem('trendke_abandoned');
      if (!raw) return null;
      const data = JSON.parse(raw);
      // Expire after 24h
      if (Date.now() - data.savedAt > 86400000) {
        localStorage.removeItem('trendke_abandoned');
        return null;
      }
      return data;
    } catch { return null; }
  }

  /* ============================================================
     14. M-PESA MODAL
  ============================================================ */
  function openMpesaModal(price) {
    el('mpesaAmount').textContent = price ? `KES ${Number(price).toLocaleString()}` : 'KES —';
    el('mpesaTill').textContent   = TILL;
    // WhatsApp confirm button
    el('mpesaWhatsapp').onclick = () => {
      const msg = encodeURIComponent('Hello! I have just paid via M-Pesa for my order. Please confirm.');
      window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
    };
    openModal('mpesaModal');
  }

  /* ============================================================
     15. WHATSAPP QUICK ORDER (no product selected)
  ============================================================ */
  function whatsappQuick() {
    const msg = encodeURIComponent('Hello! I want to place an order. Please assist me.');
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  }

  /* ============================================================
     16. BUTTON WIRING
  ============================================================ */
  el('heroWhatsapp').addEventListener('click', whatsappQuick);
  el('heroMpesa').addEventListener('click', () => openMpesaModal(null));
  el('stickyWa').addEventListener('click', whatsappQuick);
  el('stickyMp').addEventListener('click', () => openMpesaModal(null));
  el('modalClose').addEventListener('click', () => closeModal('productModal'));
  el('orderModalClose').addEventListener('click', () => closeModal('orderModal'));
  el('mpesaClose').addEventListener('click', () => closeModal('mpesaModal'));

  // Close on backdrop click
  ['productModal','orderModal','mpesaModal'].forEach((id) => {
    el(id).addEventListener('click', (e) => {
      if (e.target === el(id)) closeModal(id);
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      ['productModal','orderModal','mpesaModal'].forEach(closeModal);
    }
  });

  /* ============================================================
     17. MODAL HELPERS
  ============================================================ */
  function openModal(id) {
    el(id).classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(id) {
    el(id).classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ============================================================
     18. TOAST
  ============================================================ */
  let toastTimer;
  function showToast(msg, type = '') {
    const t = el('toast');
    t.textContent = msg;
    t.className   = `toast show ${type}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 3500);
  }

  /* ============================================================
     19. STICKY CTA — Hide when hero visible
  ============================================================ */
  const stickyHeroObs = new IntersectionObserver(
    ([entry]) => {
      el('stickyCta').classList.toggle('hidden', entry.isIntersecting);
    },
    { threshold: 0.1 }
  );
  stickyHeroObs.observe(el('hero'));

  /* ============================================================
     20. HEADER SHADOW ON SCROLL
  ============================================================ */
  window.addEventListener('scroll', () => {
    el('siteHeader').style.boxShadow = window.scrollY > 10
      ? '0 3px 12px rgba(0,0,0,.25)'
      : '0 2px 8px rgba(0,0,0,.2)';
  }, { passive: true });

  /* ============================================================
     21. GOOGLE APPS SCRIPT — doPost code (comment for reference)
  ============================================================

  To set up your Google Sheet backend:
  1. Open Google Sheets → Extensions → Apps Script
  2. Paste the following code:

  function doPost(e) {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data  = JSON.parse(e.postData.contents);
    sheet.appendRow([
      new Date(),
      data.name,
      data.phone,
      data.product,
      data.quantity,
      data.location
    ]);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  3. Deploy → New Deployment → Web App
     - Execute as: Me
     - Who has access: Anyone
  4. Copy the Web App URL into config.js → GOOGLE_SCRIPT_URL

  ============================================================ */

  console.log(`%c${brand} 🚀`, 'color:#e8231a;font-size:1.2rem;font-weight:bold;');
  console.log('%cSite loaded. WhatsApp:', 'color:#25d366', WHATSAPP);

}); // end DOMContentLoaded

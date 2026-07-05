/* ===== VeYoung Beauty - main.js ===== */

/* ---------- SVG icons (clean line style) ---------- */
const svg = {
  facial: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01M8.5 14c.9.9 2.1 1.4 3.5 1.4s2.6-.5 3.5-1.4"/></svg>',
  sparkle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
  needle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20 14 10M13 5l6 6M15 3l6 6-2 2-6-6 2-2ZM11 11l2 2"/></svg>',
  slim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>',
  gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13M5 12v9h14v-9M12 8C12 5 10 3 8 4S8 8 12 8ZM12 8c0-3 2-5 4-4s-.5 4-4 4Z"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>',
  laser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></svg>',
  wax: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8c2-2 4-2 6 0s4 2 6 0 4-2 6 0M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m9 4 6 2 5-2v14l-5 2-6-2-5 2V6l5-2Z"/><path d="M9 4v14M15 6v14"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>'
};

/* ---------- Data ---------- */
const branches = [
  {
    name: "Makati",
    area: "Salcedo Village",
    address: "Lucky Gold Tower 1, 158 H.V. Dela Costa Street, Salcedo Village, Makati",
    lat: 14.5604561, lng: 121.0172487,
    map: "https://www.google.com/maps/place/Veyoung+Beauty+Makati/@14.5604613,121.0146738,1098m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397c9096ec55555:0x33ee62f8b2037328!8m2!3d14.5604561!4d121.0172487!16s%2Fg%2F11kbzndc1v"
  },
  {
    name: "Mandaluyong",
    area: "Boni Avenue, Plainview",
    address: "922 Boni Ave., Plainview, Mandaluyong, Metro Manila 1550",
    lat: 14.575932, lng: 121.0352433,
    map: "https://www.google.com/maps/place/Veyoung+Beauty/@14.5759372,121.0326684,1098m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3397c9007501413d:0x18f49e5a64da0b08!8m2!3d14.575932!4d121.0352433!16s%2Fg%2F11w8jhw0kd"
  },
  {
    name: "Antipolo",
    area: "Sumulong Memorial Circle",
    address: "2nd Fl., ACV Building II, Sumulong Memorial Circle, Antipolo, Rizal",
    lat: 14.5805439, lng: 121.1726838,
    map: "https://www.google.com/maps/place/Veyoung+Beauty+Antipolo/@14.5806277,121.1724846,120m/data=!3m1!1e3!4m6!3m5!1s0x3397bf51d0c9b2cb:0x7af2f2674ede51ef!8m2!3d14.5805439!4d121.1726838!16s%2Fg%2F11sk43g27s"
  }
];

const heroImages = ["assets/f1.jpg", "assets/t4.jpg", "assets/t5.jpg", "assets/c7772648.jpg"];

const treatments = {
  "Slimming": { icon: "slim", items: [
    { n: "RF Skin Tightening", d: "Radiofrequency to tighten skin and contour the body." },
    { n: "Lipo Cavitation", d: "Non-invasive fat reduction for targeted areas." },
    { n: "Vacuum Sculpt", d: "Sculpt and define your silhouette." },
    { n: "Lazy Workout", d: "Muscle-stimulating slimming with zero effort." }
  ]},
  "Facial": { icon: "facial", items: [
    { n: "Basic Facial", d: "Deep cleanse, exfoliate and hydrate for an instant glow." },
    { n: "Deep Cleansing Facial", d: "Targets clogged pores and blackheads for clearer skin." },
    { n: "Diamond Peel", d: "Microdermabrasion to reveal smoother, brighter skin." },
    { n: "Hydrafacial", d: "Multi-step hydration and radiance-boosting treatment." },
    { n: "Acne Treatment Facial", d: "Calms breakouts and controls oil for healthier skin." }
  ]},
  "Microneedling": { icon: "needle", items: [
    { n: "Face Microneedling", d: "Stimulates collagen to improve texture and firmness." },
    { n: "Scar Microneedling", d: "Reduces the appearance of acne scars over time." },
    { n: "Microneedling with Serum", d: "Boosted with serums for enhanced skin repair." }
  ]},
  "Laser": { icon: "laser", items: [
    { n: "Black Doll Laser", d: "Carbon laser peel for smooth, glowing skin." },
    { n: "Acne Laser", d: "Targets active acne and reduces breakouts." },
    { n: "Laser Pigmentation", d: "Fades dark spots and hyperpigmentation." },
    { n: "Laser Facial", d: "Rejuvenates skin and evens out complexion." }
  ]},
  "Hair Removal": { icon: "wax", items: [
    { n: "Underarm Laser", d: "Smooth, hair-free underarms that last." },
    { n: "Full Legs", d: "Silky smooth legs, session after session." },
    { n: "Brazilian", d: "Comfortable and thorough intimate hair removal." },
    { n: "Full Body", d: "Head-to-toe smoothness in one package." }
  ]},
  "Underarms": { icon: "sparkle", items: [
    { n: "Underarm Whitening", d: "Brightens and evens out underarm tone." },
    { n: "Underarm Cleaning & Peeling", d: "Gentle exfoliation for smoother, fresher underarms." },
    { n: "Underarm Laser Hair Removal", d: "Long-lasting smoothness with safe laser technology." }
  ]},
  "Add-ons": { icon: "plus", items: [
    { n: "Collagen / Phototherapy Mask", d: "Intense hydration and firming boost." },
    { n: "Targeted Skin Add-ons", d: "Boosters tailored to your skin concern." },
    { n: "Bleaching", d: "Brightening treatment for an even tone." },
    { n: "Eye Treatment", d: "De-puff and brighten the delicate eye area." }
  ]},
  "Packages": { icon: "gift", items: [
    { n: "Cindyrella Glow Care", d: "10 sessions of Cindyrella Glow Care + 5 free sessions. Cash \u20B15,999." },
    { n: "Snow White Glow", d: "10 sessions of Snow White Glow + 5 free sessions. Cash \u20B11,999." },
    { n: "Blooming Glow", d: "10 sessions of Blooming Glow + 10 treatments of your choice. Cash \u20B17,999." },
    { n: "Goddess Glow Drip", d: "5 sessions of Goddess Glow Drip + 2 free sessions. Cash \u20B120,999." }
  ]}
};

const reviews = [
  { name: "Carl", tag: "Tattoo Removal", text: "Super satisfied with my tattoo removal experience here! The clinic is clean, the staff are professional, and they guide you properly before and after the session. I felt safe and well taken care of." },
  { name: "James", tag: "Verified Client", text: "The experience was smooth and comfortable, and I felt well taken care of throughout the session. I left feeling refreshed and more confident. Truly happy with the overall experience with VeYoung Care!" },
  { name: "Audrey", tag: "Carbon Facial", text: "I'm very happy with the results. My breakouts have stopped, and my skin feels calmer and looks better after the carbon facial." },
  { name: "Rose", tag: "First Visit", text: "As a first timer, kinabahan talaga ako \u{1F602} but the session was way easier than I expected. Super accommodating nila and worth it yung experience. \u{1F496}" },
  { name: "Sarah", tag: "Exilift Skin Lift", text: "Had such a nice experience with the Exilift Skin Lift treatment \u{1F496} The clinic was clean, the staff were very welcoming, and everything was explained properly before starting. I noticed my skin looking firmer and more radiant after my sessions. Super thankful for the care and service from the team!" },
  { name: "Dennis", tag: "Cryolipolysis", text: "Very happy with my Cryolipolysis experience at VeYoung Beauty! The staff were friendly, professional, and made me feel comfortable throughout the session. Thank you for the excellent service and care!" },
  { name: "Audrey", tag: "Happy Client", text: "Very relaxing experience \u{1F496} Friendly staff and maayos yung service. Thank you for making me feel comfortable and well taken care of \u2728" },
  { name: "Lyka", tag: "Happy Client", text: "Thank you po VeYoung at sa mga staff jan, ang babait at vibes lang po sila. See you again po! Very accommodating mga staff nyo and so satisfied with the session \u003C3" },
  { name: "Trixie", tag: "First Session", text: "Thanks po! My first session went so well, super nice and accommodating po nina ate, didn't feel uncomfortable at all. Thank you po! Next session po ulit." }
];

/* ---------- Hero carousel (autoplay only, model faces) ---------- */
(function initCarousel(){
  const car = document.getElementById("carousel");
  if(!car) return;

  heroImages.forEach((src, idx) => {
    const slide = document.createElement("div");
    slide.className = "slide" + (idx === 0 ? " active" : "");
    slide.style.backgroundImage = `url('${src}')`;
    car.appendChild(slide);
  });

  const slides = [...car.querySelectorAll(".slide")];
  if(slides.length < 2) return;
  let cur = 0;
  setInterval(() => {
    slides[cur].classList.remove("active");
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add("active");
  }, 4500);
})();

/* ---------- Treatments tabs ---------- */
(function initTreatments(){
  const tabs = document.getElementById("tabs");
  const grid = document.getElementById("treatmentGrid");
  if(!tabs || !grid) return;
  const cats = Object.keys(treatments);

  function render(cat){
    const ico = svg[treatments[cat].icon] || svg.sparkle;
    grid.innerHTML = "";
    treatments[cat].items.forEach(t => {
      const card = document.createElement("div");
      card.className = "treatment-card fade-in";
      card.innerHTML = `
        <div class="tc-ico">${ico}</div>
        <h4>${t.n}</h4>
        <p>${t.d}</p>`;
      grid.appendChild(card);
    });
    if(window.observeReveal) window.observeReveal(grid.querySelectorAll(".treatment-card"));
  }

  cats.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "tab-btn" + (i === 0 ? " active" : "");
    btn.textContent = c;
    btn.addEventListener("click", () => {
      tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(c);
    });
    tabs.appendChild(btn);
  });
  render(cats[0]);
})();

/* ---------- Branches explorer ---------- */
(function initBranches(){
  const list = document.getElementById("branchList");
  if(!list) return;
  const mapFrame = document.getElementById("branchMap");
  const bvNum = document.getElementById("bvNum");
  const bvName = document.getElementById("bvName");
  const bvArea = document.getElementById("bvArea");
  const bvAddr = document.getElementById("bvAddr");
  const bvHours = document.getElementById("bvHours");
  const bvMap = document.getElementById("bvMap");
  const hours = "Mon &ndash; Sun &middot; 10:00 AM &ndash; 8:00 PM";

  branches.forEach((b, i) => {
    const num = String(i + 1).padStart(2, "0");
    const btn = document.createElement("button");
    btn.className = "branch-item";
    btn.type = "button";
    btn.dataset.i = i;
    btn.innerHTML = `
      <span class="branch-item-num">${num}</span>
      <span class="branch-item-text">
        <strong>${b.name}</strong>
        <small>${b.area}</small>
      </span>
      <span class="branch-item-pin">${svg.pin}</span>`;
    btn.addEventListener("click", () => select(i));
    list.appendChild(btn);
  });

  const items = Array.from(list.children);

  function select(i){
    const b = branches[i];
    if(!b) return;
    const num = String(i + 1).padStart(2, "0");
    items.forEach((el, idx) => el.classList.toggle("active", idx === i));
    mapFrame.src = `https://maps.google.com/maps?q=${b.lat},${b.lng}&z=16&output=embed`;
    mapFrame.title = `Map of VeYoung Beauty ${b.name}`;
    bvNum.textContent = num;
    bvName.textContent = b.name;
    bvArea.innerHTML = `${svg.pin} ${b.area}`;
    bvAddr.textContent = b.address;
    bvHours.innerHTML = `${svg.clock} <span>${hours}</span>`;
    bvMap.href = b.map;
    bvMap.innerHTML = `<span>Open in Google Maps</span> ${svg.arrow}`;
  }

  window.selectBranch = function(name){
    const i = branches.findIndex(b => b.name.toLowerCase() === String(name).toLowerCase());
    if(i >= 0) select(i);
  };

  document.querySelectorAll("[data-branch]").forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      selectBranch(link.dataset.branch);
      document.getElementById("branches").scrollIntoView({ behavior: "smooth" });
    });
  });

  select(0);
})();

/* ---------- Reviews carousel ---------- */
(function initReviews(){
  const track = document.getElementById("reviewGrid");
  if(!track) return;
  const prevBtn = document.getElementById("revPrev");
  const nextBtn = document.getElementById("revNext");
  const dotsWrap = document.getElementById("reviewDots");
  const stars = '<span class="stars">' + "\u2605".repeat(5) + '</span>';

  reviews.forEach(r => {
    const initial = r.name.trim().charAt(0).toUpperCase();
    const card = document.createElement("div");
    card.className = "review-card";
    card.innerHTML = `
      <span class="quote-mark">&#8220;</span>
      ${stars}
      <p class="review-text">${r.text}</p>
      <div class="review-author">
        <span class="review-avatar">${initial}</span>
        <div>
          <strong>${r.name}</strong>
          <small>${r.tag}</small>
        </div>
      </div>`;
    track.appendChild(card);
  });

  const cards = Array.from(track.children);
  let index = 0;

  const perView = () => {
    const w = window.innerWidth;
    if(w <= 600) return 1;
    if(w <= 900) return 2;
    return 3;
  };

  const maxIndex = () => Math.max(0, cards.length - perView());

  function buildDots(){
    dotsWrap.innerHTML = "";
    const pages = maxIndex() + 1;
    for(let i = 0; i < pages; i++){
      const d = document.createElement("button");
      d.setAttribute("aria-label", "Go to review " + (i + 1));
      d.addEventListener("click", () => { index = i; update(); });
      dotsWrap.appendChild(d);
    }
  }

  function update(){
    index = Math.min(index, maxIndex());
    const card = cards[0];
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    track.style.transform = `translateX(${-step * index}px)`;
    prevBtn.disabled = index <= 0;
    nextBtn.disabled = index >= maxIndex();
    Array.from(dotsWrap.children).forEach((d, i) =>
      d.classList.toggle("active", i === index));
  }

  prevBtn.addEventListener("click", () => { index--; update(); });
  nextBtn.addEventListener("click", () => { index++; update(); });

  let rz;
  window.addEventListener("resize", () => {
    clearTimeout(rz);
    rz = setTimeout(() => { buildDots(); update(); }, 150);
  });

  buildDots();
  update();
})();

/* ---------- Navbar / menu / scroll ---------- */
(function initNav(){
  const nav = document.getElementById("navbar");
  const ham = document.getElementById("hamburger");
  const links = document.getElementById("navLinks");
  const backTop = document.getElementById("backTop");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    backTop.classList.toggle("show", window.scrollY > 500);
  });
  const backdrop = document.getElementById("navBackdrop");
  const isMenuOpen = () => links.classList.contains("open");
  const openMenu = () => {
    links.classList.add("open");
    ham.classList.add("active");
    backdrop?.classList.add("show");
    backdrop?.setAttribute("aria-hidden", "false");
    document.body.classList.add("menu-open");
    ham.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    links.classList.remove("open");
    ham.classList.remove("active");
    backdrop?.classList.remove("show");
    backdrop?.setAttribute("aria-hidden", "true");
    document.body.classList.remove("menu-open");
    ham.setAttribute("aria-expanded", "false");
  };

  ham.addEventListener("click", () => { isMenuOpen() ? closeMenu() : openMenu(); });
  backdrop?.addEventListener("click", closeMenu);
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", closeMenu));
  document.addEventListener("keydown", e => { if(e.key === "Escape" && isMenuOpen()) closeMenu(); });
  backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  document.getElementById("year").textContent = new Date().getFullYear();
})();

/* ---------- Email Modal ---------- */
(function initModal(){
  const overlay = document.getElementById("modalOverlay");
  const openBtn = document.getElementById("openModalBtn");
  const closeBtn = document.getElementById("modalClose");
  const form = document.getElementById("emailForm");
  const note = document.getElementById("formNote");

  const open = () => overlay.classList.add("open");
  const close = () => overlay.classList.remove("open");

  if(openBtn) openBtn.addEventListener("click", open);
  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", e => { if(e.target === overlay) close(); });
  document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });

  form.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(form);
    const subject = `Inquiry from ${d.get("name")} - ${d.get("branch")} branch`;
    const body =
      `Name: ${d.get("name")}\n` +
      `Email: ${d.get("email")}\n` +
      `Preferred Branch: ${d.get("branch")}\n\n` +
      `Message:\n${d.get("message")}`;
    window.location.href =
      `mailto:veyoungbeautyph@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = "Opening your email app... Thank you!";
    setTimeout(() => { form.reset(); note.textContent = ""; close(); }, 2500);
  });
})();

/* ---------- Chatbot ---------- */
(function initChatbot(){
  const toggle = document.getElementById("chatToggle");
  const win = document.getElementById("chatWindow");
  const min = document.getElementById("chatMin");
  const body = document.getElementById("chatBody");
  const quick = document.getElementById("chatQuick");
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatText");

  const knowledge = [
    {
      keys: ["faq", "faqs", "frequently", "questions", "help"],
      a: "Here are some things I can help with:<br>&bull; Free facial promo<br>&bull; Our branches &amp; locations<br>&bull; Opening hours<br>&bull; Treatments &amp; glow packages<br>&bull; Booking an appointment<br>&bull; Prices &amp; contact info<br><br>Just tap a button below or type your question!"
    },
    {
      keys: ["promo", "free", "first visit", "discount", "offer"],
      a: "Yes! New clients get a <b>FREE Basic Facial</b> on their first visit. Just mention it when you book at any branch!"
    },
    {
      keys: ["branch", "location", "where", "address", "makati", "antipolo", "mandaluyong"],
      a: "We have 3 branches: <b>Makati, Mandaluyong and Antipolo</b>. Check the <a href='#branches'>Branches section</a> \u2014 tap any address to open it in Google Maps!"
    },
    {
      keys: ["hour", "open", "time", "schedule", "close"],
      a: "We're open <b>Monday to Sunday, 10:00 AM \u2013 8:00 PM</b>."
    },
    {
      keys: ["package", "cindyrella", "snow white", "blooming", "goddess", "glow drip", "installment"],
      a: "We offer glow packages with 0% interest installments \u2014 Cindyrella, Snow White, Blooming Glow and Goddess Glow Drip. See the <a href='#treatments'>Packages tab</a> or message us for full details!"
    },
    {
      keys: ["service", "treatment", "facial", "laser", "slimming", "hair removal", "microneedling", "underarm"],
      a: "We offer Facials, Underarms, Microneedling, Slimming, Packages, Add-ons, Laser and Hair Removal. Browse them in the <a href='#treatments'>Treatments section</a>!"
    },
    {
      keys: ["book", "appointment", "reserve"],
      a: "You can book by tapping <a href='#contact'>Book Now</a> or sending us a message via the <a href='#contact'>Contact form</a>. We'll confirm your slot right away!"
    },
    {
      keys: ["price", "cost", "how much", "rate", "fee"],
      a: "Prices vary per treatment and branch. Message us through the <a href='#contact'>Contact form</a> for the full price list and current promos."
    },
    {
      keys: ["contact", "email", "phone", "call", "number", "message"],
      a: "You can call/text us at <b>0999-9558427</b>, email <b>veyoungbeautyph@gmail.com</b>, or use the <a href='#contact'>email form</a>. You can also message our Facebook and Instagram pages!"
    },
    {
      keys: ["facebook", "instagram", "tiktok", "social", "fb", "ig"],
      a: "Follow and message us <b>@veyoungbeautyph</b> on Facebook, Instagram and TikTok \u2014 links are in the footer and Contact section."
    },
    {
      keys: ["hi", "hello", "hey", "good", "kumusta"],
      a: "Hi there! Welcome to VeYoung Beauty. How can I help you today?"
    },
    {
      keys: ["thank", "salamat", "ty"],
      a: "You're most welcome! Let me know if there's anything else."
    }
  ];

  const quickReplies = ["Free facial promo?", "Where are the branches?", "What are your hours?", "Glow packages?", "How to book?"];

  const nudge = document.getElementById("chatNudge");
  let started = false;

  function openChat(){
    win.classList.add("open");
    toggle.classList.add("hidden");
    if(nudge) nudge.classList.remove("show");
    if(!started){ started = true; setTimeout(botWelcome, 300); }
  }
  function closeChat(){ win.classList.remove("open"); toggle.classList.remove("hidden"); }

  toggle.addEventListener("click", openChat);
  min.addEventListener("click", closeChat);

  // Little nudge bubble that invites the user to ask a question
  if(nudge){
    nudge.addEventListener("click", openChat);
    setTimeout(() => { if(!started) nudge.classList.add("show"); }, 2600);
  }

  // FAQ links — open chat only, no auto-prompt
  function openFaqOnly(e){
    e.preventDefault();
    openChat();
  }
  const navFaq = document.getElementById("navFaq");
  if(navFaq) navFaq.addEventListener("click", openFaqOnly);
  const faqLink = document.getElementById("faqLink");
  if(faqLink) faqLink.addEventListener("click", openFaqOnly);
  const bookingHelp = document.getElementById("bookingHelp");
  if(bookingHelp) bookingHelp.addEventListener("click", e => {
    e.preventDefault(); openChat();
    setTimeout(() => handle("How to book?"), 500);
  });

  function addMsg(text, who){
    const m = document.createElement("div");
    m.className = "msg " + who;
    m.innerHTML = text;
    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }
  function typing(){
    const t = document.createElement("div");
    t.className = "typing"; t.id = "typing";
    t.innerHTML = "<span></span><span></span><span></span>";
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }
  function stopTyping(){ const t = document.getElementById("typing"); if(t) t.remove(); }

  function botReply(text){
    typing();
    setTimeout(() => { stopTyping(); addMsg(text, "bot"); }, 650);
  }

  function botWelcome(){
    botReply("Hi! I'm the <b>VeYoung Assistant</b>. Ask me about our treatments, packages, branches, hours or promos!");
    renderQuick();
  }

  function renderQuick(){
    quick.innerHTML = "";
    quickReplies.forEach(q => {
      const b = document.createElement("button");
      b.className = "quick-btn";
      b.textContent = q;
      b.addEventListener("click", () => handle(q));
      quick.appendChild(b);
    });
  }

  function answer(msg){
    const low = msg.toLowerCase();
    for(const item of knowledge){
      if(item.keys.some(k => low.includes(k))) return item.a;
    }
    return "I'm still learning! For that, it's best to reach our team via the <a href='#contact'>Contact form</a> or message us <b>@veyoungbeautyph</b>. Meanwhile, I can help with promos, packages, branches, hours, treatments and booking.";
  }

  function handle(msg){
    addMsg(msg, "user");
    botReply(answer(msg));
  }

  form.addEventListener("submit", e => {
    e.preventDefault();
    const v = input.value.trim();
    if(!v) return;
    handle(v);
    input.value = "";
  });
})();

/* ---------- Stats ribbon + count-up ---------- */
(function initStats(){
  const ribbon = document.getElementById("statsRibbon");
  if(!ribbon) return;
  const counters = ribbon.querySelectorAll("[data-count]");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function setFinal(el){
    const suffix = el.dataset.suffix || "";
    el.textContent = el.dataset.count + suffix;
  }

  function countUp(el, delay){
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || "";
    if(reduce || isNaN(target)){
      setFinal(el);
      return;
    }
    const duration = 3000;
    setTimeout(() => {
      const start = performance.now();
      function tick(now){
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        el.textContent = Math.round(target * eased) + suffix;
        if(t < 1) requestAnimationFrame(tick);
        else el.textContent = target + suffix;
      }
      requestAnimationFrame(tick);
    }, delay);
  }

  function play(){
    ribbon.classList.add("expand-in");
    counters.forEach((el, i) => {
      if(reduce) setFinal(el);
      else countUp(el, 380 + i * 120);
    });
  }

  if(reduce){
    ribbon.classList.add("expand-in");
    counters.forEach(setFinal);
    return;
  }

  const io = new IntersectionObserver((entries, obs) => {
    if(!entries[0].isIntersecting) return;
    play();
    obs.disconnect();
  }, { threshold: 0.35 });
  io.observe(ribbon);
})();

/* ---------- Subtle scroll reveal ---------- */
(function initReveal(){
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const selectors = [
    ".section-head", ".about-text", ".about-cards .mini-card",
    ".tabs", ".treatment-card", ".branch-list .branch-item", ".branch-stage",
    ".review-carousel", ".contact-panel", ".footer-col"
  ];

  const revealIO = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if(!entry.isIntersecting) return;
      const el = entry.target;
      const siblings = Array.from(el.parentElement.children).filter(c => c.classList.contains("reveal"));
      const i = Math.max(0, siblings.indexOf(el));
      el.style.transitionDelay = Math.min(i * 60, 240) + "ms";
      el.classList.add("in");
      obs.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  function observeReveal(nodes){
    const list = nodes instanceof NodeList ? [...nodes]
      : typeof nodes === "string" ? [...document.querySelectorAll(nodes)]
      : [...nodes];
    if(!list.length) return;

    if(reduce || !("IntersectionObserver" in window)){
      list.forEach(el => el.classList.add("in"));
      return;
    }

    list.forEach(el => {
      if(el.classList.contains("reveal")) return;
      el.classList.add("reveal");
      revealIO.observe(el);
    });
  }

  window.observeReveal = observeReveal;
  observeReveal(selectors.join(","));
})();

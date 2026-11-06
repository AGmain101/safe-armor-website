/* =========================================================================
   SAFE ARMOR — site.js
   One script for every page. Each feature checks for its own markup.
   Depends on (optional): GSAP + ScrollTrigger + SplitText, Lenis.
   Data: config.js (window.SAFE_ARMOR), catalog.js (window.SA_CATALOG).
   ========================================================================= */
(function () {
  "use strict";

  var d = document, html = d.documentElement, body = d.body;
  var CFG = window.SAFE_ARMOR || {};
  var CAT = window.SA_CATALOG || [];
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var isDesktop = function () { return window.innerWidth > 980; };
  var gsap = window.gsap, ST = window.ScrollTrigger, Split = window.SplitText;
  var hasGsap = !!(gsap && ST);
  if (hasGsap) { gsap.registerPlugin(ST); if (Split) gsap.registerPlugin(Split); ST.config({ ignoreMobileResize: true }); }
  // absolute base URL of the site (works from any page depth, e.g. the 404 page)
  var BASE = (function () { var s = d.currentScript && d.currentScript.src; return s ? s.replace(/assets\/js\/site\.js.*$/, "") : ""; })();
  function asset(p) { return !p || /^(https?:|\/)/.test(p) ? p : BASE + p; }
  if (reduced) html.classList.add("reduced");

  /* ---------- helpers ---------- */
  function $(s, r) { return (r || d).querySelector(s); }
  function $$(s, r) { return Array.prototype.slice.call((r || d).querySelectorAll(s)); }
  function get(path) { return path.split(".").reduce(function (o, k) { return o == null ? undefined : o[k]; }, CFG); }
  function isPlaceholder(v) { return typeof v === "string" && /X{4,}|20XX/.test(v); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function icon(id, cls) { return '<svg class="ico ' + (cls || "") + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function catById(id) { for (var i = 0; i < CAT.length; i++) if (CAT[i].id === id) return CAT[i]; return null; }
  function findItem(key) {
    var p = key.split(":"), c = catById(p[0]); if (!c) return null;
    for (var i = 0; i < c.items.length; i++) if (c.items[i].id === p[1]) return { cat: c, item: c.items[i] };
    return null;
  }
  function photoStyle(c, k) {
    var z = 1 + ((c.zoom || 1) - 1) * (k == null ? 1 : k);
    return "object-position:" + c.focus + ";transform-origin:" + c.focus + ";transform:scale(" + z.toFixed(2) + ")";
  }

  /* =======================================================================
     1. CONFIG BINDING
     ======================================================================= */
  function bindConfig() {
    $$("[data-bind]").forEach(function (el) {
      var v = get(el.getAttribute("data-bind"));
      if (v == null) return;
      if (el.hasAttribute("data-optional") && (!v || isPlaceholder(v))) {
        (el.closest("[data-optional-wrap]") || el).hidden = true; return;
      }
      el.textContent = v;
    });
    $$("[data-bind-href]").forEach(function (el) {
      var tpl = el.getAttribute("data-bind-href");
      el.setAttribute("href", tpl.replace(/\{([\w.]+)\}/g, function (m, p) { var v = get(p); return v == null ? "" : String(v).replace(/\s+/g, ""); }));
    });
    $$("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });

    var social = CFG.social || {}, names = { facebook: "Facebook", instagram: "Instagram", linkedin: "LinkedIn", x: "X", tiktok: "TikTok" };
    var keys = Object.keys(social).filter(function (k) { return social[k]; });
    $$("[data-socials]").forEach(function (w) {
      if (!keys.length) { w.hidden = true; return; }
      w.innerHTML = keys.map(function (k) { return '<a href="' + esc(social[k]) + '" target="_blank" rel="noopener" aria-label="' + (names[k] || k) + '">' + icon(k) + "</a>"; }).join("");
    });
    $$("[data-email-directory]").forEach(function (ul) {
      if (!CFG.emails) return;
      ul.innerHTML = CFG.emails.map(function (e) { return "<li><span>" + esc(e.label) + '</span><a href="mailto:' + esc(e.address) + '">' + esc(e.address) + "</a></li>"; }).join("");
    });
    $$("[data-directors]").forEach(function (w) {
      if (!CFG.directors || !CFG.directors.length) return;
      w.innerHTML = CFG.directors.map(function (p, i) {
        return '<article class="director" data-reveal><div class="director__top"><img class="director__mark" src="' + asset("assets/img/illustrations/shield-lines.svg") + '" alt=""><div class="director__n">' + pad(i + 1) +
          "</div><h3>" + esc(p.name) + '</h3><div class="director__role">' + esc(p.title) + '</div></div><div class="director__body"><p>' + esc(p.bio) + "</p>" +
          (p.email ? '<a class="director__mail" href="mailto:' + esc(p.email) + '">' + icon("mail") + esc(p.email) + "</a>" : "") + "</div></article>";
      }).join("");
    });
    $$("[data-areas]").forEach(function (w) {
      var list = CFG.areas || [];
      if (!list.length) { (w.closest(".reach__col") || w).hidden = true; return; }
      w.innerHTML = list.map(function (a, i) { return '<span class="town"><b>' + pad(i + 1) + "</b>" + esc(a) + "</span>"; }).join("");
    });
    $$("[data-industries]").forEach(function (w) {
      var list = CFG.industries || [];
      if (!list.length) { w.hidden = true; return; }
      w.hidden = false;
      w.innerHTML = list.map(function (i) { return '<span class="chip">' + esc(i) + "</span>"; }).join("");
    });
    var map = $("[data-map-link]");
    if (map && CFG.contact && CFG.contact.mapLink) { map.href = CFG.contact.mapLink; map.hidden = false; }
  }

  /* =======================================================================
     2. QUOTE LIST (shared store + drawer)
     ======================================================================= */
  var Quote = {
    key: "sa-quote", items: [], subs: [],
    load: function () { try { this.items = JSON.parse(store(this.key)) || []; } catch (e) { this.items = []; } this.items = this.items.filter(function (x) { return findItem(x.id); }); },
    save: function () { store(this.key, JSON.stringify(this.items)); this.subs.forEach(function (f) { f(); }); },
    on: function (f) { this.subs.push(f); },
    has: function (id) { return this.items.some(function (x) { return x.id === id; }); },
    add: function (id, qty) { if (this.has(id)) return; this.items.push({ id: id, qty: qty || 1 }); this.save(); },
    remove: function (id) { this.items = this.items.filter(function (x) { return x.id !== id; }); this.save(); },
    toggle: function (id) { if (this.has(id)) { this.remove(id); return false; } this.add(id); return true; },
    setQty: function (id, q) { q = Math.max(1, Math.min(99999, parseInt(q, 10) || 1)); this.items.forEach(function (x) { if (x.id === id) x.qty = q; }); this.save(); },
    clear: function () { this.items = []; this.save(); },
    count: function () { return this.items.length; }
  };
  Quote.load();

  function qtyControl(id, qty) {
    return '<div class="qty" data-qty="' + id + '"><button type="button" data-q-dec aria-label="Decrease quantity">' + icon("minus") +
      '</button><input type="number" inputmode="numeric" min="1" value="' + qty + '" aria-label="Quantity"><button type="button" data-q-inc aria-label="Increase quantity">' + icon("plus") + "</button></div>";
  }

  function renderDrawer() {
    var wrap = $("[data-quote-lines]"); if (!wrap) return;
    if (!Quote.count()) {
      wrap.innerHTML = '<div class="drawer__empty"><img src="' + asset("assets/img/illustrations/ppe-helmet.svg") + '" alt=""><strong>Your list is empty</strong><p>Browse the PPE range and add the items you need.</p></div>';
    } else {
      wrap.innerHTML = Quote.items.map(function (x) {
        var f = findItem(x.id);
        return '<div class="qline"><div class="qline__name">' + esc(f.item.name) + '</div>' + qtyControl(x.id, x.qty) +
          '<div class="qline__cat">' + esc(f.cat.name) + '</div><button class="qline__remove" type="button" data-q-remove="' + x.id + '">' + icon("trash") + "Remove</button></div>";
      }).join("");
    }
    var submit = $("[data-quote-submit]"); if (submit) submit.style.display = Quote.count() ? "" : "none";
  }

  function updateCounts() {
    var n = Quote.count();
    $$("[data-quote-count]").forEach(function (el) { el.textContent = n; });
    $$("[data-quote-count-inline]").forEach(function (el) { el.textContent = n; });
    $$("[data-quote-count-tab]").forEach(function (el) { el.textContent = n; el.hidden = !n; });
    $$(".quote-toggle").forEach(function (b) { b.classList.toggle("has-items", n > 0); });
    $$("[data-add]").forEach(function (b) {
      var on = Quote.has(b.getAttribute("data-add"));
      b.classList.toggle("is-added", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
      var lbl = b.querySelector("[data-add-label]");
      if (lbl) lbl.textContent = on ? "Added" : "Add to quote";
      var ic = b.querySelector("use"); if (ic) ic.setAttribute("href", on ? "#i-check" : "#i-plus");
    });
  }

  var lastFocus = null;
  function openDrawer() {
    lastFocus = d.activeElement;
    renderDrawer(); html.classList.add("drawer-open");
    if (lenis) lenis.stop();
    var dr = $("#quote-drawer"); if (dr) setTimeout(function () { dr.focus(); }, 50);
  }
  function closeDrawer() {
    html.classList.remove("drawer-open");
    if (lenis) lenis.start();
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  var toastTimer;
  function toast(msg) {
    var t = $(".toast"); if (!t) return;
    $("[data-toast-text]", t).textContent = msg;
    t.classList.add("is-on"); clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.classList.remove("is-on"); }, 3200);
  }
  function bump() { $$(".quote-toggle").forEach(function (b) { b.classList.remove("bump"); void b.offsetWidth; b.classList.add("bump"); }); }

  function toggleItem(id) {
    var added = Quote.toggle(id), f = findItem(id);
    if (added) { toast(f.item.name + " added to your quote list"); bump(); }
  }

  function initQuoteUI() {
    Quote.on(function () { updateCounts(); renderDrawer(); renderFormQuote(); });
    updateCounts();
    d.addEventListener("click", function (e) {
      var t = e.target.closest("[data-open-quote]"); if (t) { e.preventDefault(); $(".toast") && $(".toast").classList.remove("is-on"); if (html.classList.contains("menu-open")) toggleMenu(false); openDrawer(); return; }
      if (e.target.closest("[data-close-quote]")) { closeDrawer(); return; }
      var add = e.target.closest("[data-add]"); if (add) { e.preventDefault(); toggleItem(add.getAttribute("data-add")); return; }
      var rm = e.target.closest("[data-q-remove]"); if (rm) { Quote.remove(rm.getAttribute("data-q-remove")); return; }
      var dec = e.target.closest("[data-q-dec]"), inc = e.target.closest("[data-q-inc]");
      if (dec || inc) {
        var box = (dec || inc).closest("[data-qty]"), id = box.getAttribute("data-qty"), input = $("input", box);
        Quote.setQty(id, (parseInt(input.value, 10) || 1) + (inc ? 1 : -1)); return;
      }
    });
    d.addEventListener("change", function (e) {
      var box = e.target.closest("[data-qty]"); if (box && e.target.tagName === "INPUT") Quote.setQty(box.getAttribute("data-qty"), e.target.value);
    });
    d.addEventListener("keydown", function (e) {
      if (e.key === "Escape") { if (html.classList.contains("drawer-open")) closeDrawer(); if (html.classList.contains("menu-open")) toggleMenu(false); }
      if (e.key === "Tab" && html.classList.contains("drawer-open")) {
        var f = $$("#quote-drawer a[href], #quote-drawer button, #quote-drawer input").filter(function (x) { return x.offsetParent !== null; });
        if (!f.length) return;
        if (e.shiftKey && d.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
        else if (!e.shiftKey && d.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
      }
    });
  }

  /* =======================================================================
     3. SMOOTH SCROLL + HEADER + MENU
     ======================================================================= */
  var lenis = null;
  function initScroll() {
    if (!reduced && window.Lenis) {
      lenis = new window.Lenis({ lerp: 0.1, smoothWheel: true, wheelMultiplier: 1 });
      if (hasGsap) {
        lenis.on("scroll", ST.update);
        gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
        gsap.ticker.lagSmoothing(0);
      } else {
        var raf = function (t) { lenis.raf(t); requestAnimationFrame(raf); }; requestAnimationFrame(raf);
      }
    }
    d.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]'); if (!a || a.hasAttribute("data-to-top")) return;
      var id = a.getAttribute("href"); if (id.length < 2) return;
      var t = d.getElementById(id.slice(1)); if (!t) return;
      e.preventDefault(); scrollToEl(t);
      if (id === "#main") { var m = $("#main"); m && m.setAttribute("tabindex", "-1"); }
    });
  }
  function scrollToEl(t) {
    var hdr = $(".site-header"), off = -((hdr ? hdr.offsetHeight : 76) + 10);
    if (lenis) lenis.scrollTo(t, { offset: off, duration: 1.4 });
    else window.scrollTo({ top: t.getBoundingClientRect().top + window.pageYOffset + off, behavior: reduced ? "auto" : "smooth" });
  }

  function initHeader() {
    var header = $(".site-header"), chat = $(".float-chat"), footer = $(".site-footer");
    var lastY = window.pageYOffset, ticking = false;
    function update() {
      var y = window.pageYOffset;
      header.classList.toggle("is-scrolled", y > 24);
      var hide = y > lastY + 2 && y > 320 && !html.classList.contains("menu-open");
      var show = y < lastY - 2 || y < 320;
      if (hide) { header.classList.add("is-hidden"); html.classList.remove("header-visible"); }
      else if (show) { header.classList.remove("is-hidden"); html.classList.add("header-visible"); }
      if (chat && footer) chat.classList.toggle("is-away", footer.getBoundingClientRect().top < window.innerHeight - 40);
      lastY = y; ticking = false;
    }
    window.addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    html.classList.add("header-visible"); update();
  }

  function toggleMenu(open) {
    var btn = $(".burger"), menu = $(".mobile-menu");
    if (open === html.classList.contains("menu-open")) return;
    html.classList.toggle("menu-open", open);
    if (btn) { btn.setAttribute("aria-expanded", open ? "true" : "false"); btn.setAttribute("aria-label", open ? "Close menu" : "Open menu"); }
    if (lenis) open ? lenis.stop() : lenis.start();
    $(".site-header").classList.remove("is-hidden");
    if (open && menu) setTimeout(function () { var f = $("nav a", menu); if (f) f.focus({ preventScroll: true }); }, 350);
    else if (!open && btn && menu && menu.contains(d.activeElement)) btn.focus({ preventScroll: true });
  }
  function initMenu() {
    var btn = $(".burger"); if (!btn) return;
    btn.addEventListener("click", function () { toggleMenu(!html.classList.contains("menu-open")); });
    window.addEventListener("resize", function () { if (window.innerWidth > 980) toggleMenu(false); }, { passive: true });
    d.addEventListener("keydown", function (e) {
      if (e.key !== "Tab" || !html.classList.contains("menu-open")) return;
      var f = [btn].concat($$(".mobile-menu a[href], .mobile-menu button"));
      var i = f.indexOf(d.activeElement);
      if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
    });
  }

  /* =======================================================================
     4. LOADER + PAGE TRANSITIONS
     ======================================================================= */
  var introDone = false, introQueue = [];
  function onIntro(f) { if (introDone) f(); else introQueue.push(f); }
  function finishIntro() { if (introDone) return; introDone = true; introQueue.forEach(function (f) { f(); }); }

  function initLoader() {
    var loader = $(".loader"), pt = $(".pt");
    if (html.classList.contains("pt-enter") && pt) {
      requestAnimationFrame(function () {
        pt.classList.add("is-leaving");
        setTimeout(finishIntro, 180);
        setTimeout(function () { pt.classList.remove("is-leaving"); html.classList.remove("pt-enter"); }, 900);
      });
    } else if (loader && !html.classList.contains("skip-loader") && !reduced) {
      var start = performance.now();
      var done = function () {
        var wait = Math.max(0, 1500 - (performance.now() - start));
        setTimeout(function () { loader.classList.add("is-done"); try { sessionStorage.setItem("sa-visited", "1"); } catch (e) {} setTimeout(finishIntro, 350); setTimeout(function () { loader.classList.add("is-skip"); }, 1100); }, wait);
      };
      if (d.readyState === "complete") done(); else window.addEventListener("load", done);
    } else {
      if (loader) loader.classList.add("is-skip");
      try { sessionStorage.setItem("sa-visited", "1"); } catch (e) {}
      finishIntro();
    }

    if (reduced || !pt) return;
    d.addEventListener("click", function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest("a[href]"); if (!a) return;
      var href = a.getAttribute("href");
      if (!href || href.charAt(0) === "#" || a.target === "_blank" || a.hasAttribute("download") || /^(mailto|tel|https?:|javascript)/i.test(href)) return;
      if (a.host !== location.host) return;
      var norm = function (p) { return p.replace(/index\.html$/, ""); };
      if (norm(a.pathname) === norm(location.pathname)) {
        var t = a.hash && d.getElementById(a.hash.slice(1));
        if (t) {
          e.preventDefault();
          if (html.classList.contains("menu-open")) toggleMenu(false);
          if (html.classList.contains("drawer-open")) closeDrawer();
          try { history.replaceState(null, "", a.hash); } catch (err) {}
          window.dispatchEvent(new CustomEvent("sa:hash", { detail: a.hash }));
          scrollToEl(t);
        }
        return;
      }
      e.preventDefault();
      if (html.classList.contains("menu-open")) toggleMenu(false);
      if (html.classList.contains("drawer-open")) closeDrawer();
      try { sessionStorage.setItem("sa-pt", "1"); } catch (err) {}
      pt.classList.add("is-covering");
      setTimeout(function () { window.location.href = a.href; }, 620);
    });
    window.addEventListener("pageshow", function (e) { if (e.persisted) { pt.classList.remove("is-covering", "is-leaving"); html.classList.remove("pt-enter"); } });
  }

  /* =======================================================================
     5. CURSOR + MAGNETIC
     ======================================================================= */
  function initCursor() {
    if (!finePointer || reduced) return;
    var dot = $(".cursor"), ring = $(".cursor-ring"); if (!dot || !ring) return;
    var label = $("span", ring), mx = -100, my = -100, rx = -100, ry = -100, shown = false;
    window.addEventListener("pointermove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (!shown) { shown = true; rx = mx; ry = my; html.classList.add("has-cursor"); }
      dot.style.transform = "translate(" + mx + "px," + my + "px)";
    }, { passive: true });
    html.addEventListener("mouseleave", function () { html.classList.remove("has-cursor"); shown = false; });
    (function loop() { rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18); ring.style.transform = "translate(" + rx + "px," + ry + "px)"; requestAnimationFrame(loop); })();
    d.addEventListener("pointerover", function (e) {
      var t = e.target.closest("a, button, [data-cursor], input, select, textarea, label");
      var lab = t && t.getAttribute("data-cursor");
      ring.classList.toggle("is-hover", !!t && !lab);
      ring.classList.toggle("has-label", !!lab);
      label.textContent = lab || "";
    });
  }
  function initMagnetic() {
    if (!finePointer || reduced) return;
    $$("[data-magnetic]").forEach(function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(), x = e.clientX - r.left - r.width / 2, y = e.clientY - r.top - r.height / 2;
        el.style.transform = "translate(" + x * 0.18 + "px," + y * 0.3 + "px)";
      });
      el.addEventListener("pointerleave", function () { el.style.transform = ""; });
    });
  }

  /* =======================================================================
     6. REVEALS, SPLIT HEADINGS, WORD SCRUB
     ======================================================================= */
  function initReveals() {
    $$("[data-stagger]").forEach(function (g) { $$("[data-reveal]", g).forEach(function (el, i) { el.style.setProperty("--d", (i % 6) * 0.08 + "s"); }); });
    var els = $$("[data-reveal]");
    if (!("IntersectionObserver" in window) || reduced) { els.forEach(function (el) { el.classList.add("is-in"); }); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach(function (el) { io.observe(el); });
  }

  function splitLines(el) {
    if (!Split) return null;
    try { return Split.create(el, { type: "lines", mask: "lines", linesClass: "split-line-inner", autoSplit: false }); } catch (e) { return null; }
  }
  function initSplits() {
    if (!hasGsap || reduced) return;
    $$("[data-split]").forEach(function (el) {
      var s = splitLines(el); if (!s || !s.lines.length) return;
      gsap.set(s.lines, { yPercent: 105 });
      ST.create({ trigger: el, start: "top 88%", once: true, onEnter: function () { gsap.to(s.lines, { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.09, onComplete: function () { s.revert(); } }); } });
    });
  }

  function wrapWords(el, cls) {
    var out = [];
    function walk(node, hl) {
      Array.prototype.slice.call(node.childNodes).forEach(function (n) {
        if (n.nodeType === 3) {
          var frag = d.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(d.createTextNode(w)); return; }
            var s = d.createElement("span"); s.className = cls + (hl ? " hl" : ""); s.textContent = w; frag.appendChild(s); out.push(s);
          });
          n.parentNode.replaceChild(frag, n);
        } else if (n.nodeType === 1) { walk(n, hl || n.hasAttribute("data-hl")); }
      });
    }
    walk(el, false);
    return out;
  }

  function initScrub() {
    $$("[data-scrub-words]").forEach(function (el) {
      if (reduced || !hasGsap) return;
      var words = wrapWords(el, "w");
      gsap.to(words, { opacity: 1, ease: "none", stagger: 0.12, scrollTrigger: { trigger: el, start: "top 82%", end: "bottom 50%", scrub: 0.6 } });
    });
    var v = $("[data-vision-text]");
    if (v) {
      var words = wrapWords(v, "w");
      if (reduced || !hasGsap) { words.forEach(function (w) { w.classList.add("on"); }); return; }
      var sec = $("[data-vision]");
      var set = function (p) { var n = Math.round(p * words.length); words.forEach(function (w, i) { w.classList.toggle("on", i < n); }); };
      ST.matchMedia({
        "(min-width: 981px)": function () { ST.create({ trigger: sec, start: "top top", end: "+=110%", pin: true, scrub: true, onUpdate: function (s) { set(s.progress * 1.15); } }); },
        "(max-width: 980px)": function () { ST.create({ trigger: v, start: "top 85%", end: "bottom 40%", scrub: true, onUpdate: function (s) { set(s.progress); } }); }
      });
    }
  }

  /* =======================================================================
     7. HERO: torch, title, parallax
     ======================================================================= */
  function torch(stage, target, varX, varY, opts) {
    if (!stage) return;
    opts = opts || {};
    var tx = 0, ty = 0, cx = 0, cy = 0, active = false, visible = true, t0 = performance.now(), userMoved = false;
    var el = target || stage;
    function size() { var r = el.getBoundingClientRect(); return { w: r.width, h: r.height, l: r.left, t: r.top }; }
    var s = size(); tx = cx = s.w * (opts.x || 0.7); ty = cy = s.h * (opts.y || 0.4);
    window.addEventListener("resize", function () { s = size(); }, { passive: true });
    if (finePointer && !reduced) {
      stage.addEventListener("pointermove", function (e) { s = size(); tx = e.clientX - s.l; ty = e.clientY - s.t; userMoved = true; });
    }
    if ("IntersectionObserver" in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(stage);
    function loop(now) {
      if (visible) {
        if (!userMoved || !finePointer) {
          var k = (now - t0) / 1000;
          tx = s.w * (0.55 + 0.32 * Math.sin(k * 0.45)); ty = s.h * (0.5 + 0.26 * Math.sin(k * 0.73 + 1));
        }
        cx = lerp(cx, tx, reduced ? 1 : 0.09); cy = lerp(cy, ty, reduced ? 1 : 0.09);
        el.style.setProperty(varX, cx.toFixed(1) + "px"); el.style.setProperty(varY, cy.toFixed(1) + "px");
      }
      if (!reduced) requestAnimationFrame(loop);
    }
    requestAnimationFrame(loop);
  }

  function initHero() {
    var hero = $("[data-torch]");
    if (hero) {
      torch(hero, hero, "--mx", "--my", { x: 0.7, y: 0.42 });
    }
    var ph = $("[data-torch-photo]");
    if (ph) {
      var photo = $(".page-hero__photo", ph);
      torch(ph, photo, "--px", "--py", { x: 0.55, y: 0.45 });
    }

    // intro animation: hide now, split after fonts load (see heroIntro)
    var title = $("[data-hero-title]");
    if (hasGsap && !reduced && title) {
      gsap.set(title, { autoAlpha: 0 });
      var hin = $$("[data-hero-in]"), hshots = $$("[data-hero-shot]");
      if (hin.length) gsap.set(hin, { autoAlpha: 0, y: 24 });
      if (hshots.length) gsap.set(hshots, { clipPath: "inset(100% 0 0 0)" });
    }

  }

  function heroIntro() {
    var title = $("[data-hero-title]");
    if (!(hasGsap && !reduced && title)) return;
    var ins = $$("[data-hero-in]"), shots = $$("[data-hero-shot]");
    var split = Split ? splitLines(title) : null;
    if (split) gsap.set(split.lines, { yPercent: 108 });
    gsap.set(title, { autoAlpha: 1 });
    onIntro(function () {
      var tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      if (split) tl.to(split.lines, { yPercent: 0, duration: 1.3, stagger: 0.1, onComplete: function () { split.revert(); } }, 0);
      else tl.fromTo(title, { y: 40, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1.2 }, 0);
      if (ins.length) tl.to(ins, { autoAlpha: 1, y: 0, duration: 1.1, stagger: 0.08 }, 0.25);
      if (shots.length) tl.to(shots, { clipPath: "inset(0% 0 0 0)", duration: 1.4, ease: "expo.inOut", stagger: 0.12 }, 0.1);
    });
  }

  function heroParallax() {
    var hero = $("[data-torch]");
    // mouse parallax on hero photos
    var stack = $("[data-parallax]");
    if (stack && finePointer && !reduced) {
      var items = $$("[data-depth]", stack), px = 0, py = 0, cx = 0, cy = 0;
      (hero || stack).addEventListener("pointermove", function (e) { px = e.clientX / window.innerWidth - 0.5; py = e.clientY / window.innerHeight - 0.5; });
      (function loop() {
        cx = lerp(cx, px, 0.06); cy = lerp(cy, py, 0.06);
        items.forEach(function (it) { var k = parseFloat(it.getAttribute("data-depth")) * 22; it.style.translate = (-cx * k).toFixed(2) + "px " + (-cy * k).toFixed(2) + "px"; });
        requestAnimationFrame(loop);
      })();
    }
  }

  /* =======================================================================
     8. TAPE MARQUEES
     ======================================================================= */
  function initMarquees() {
    $$("[data-marquee]").forEach(function (tape) {
      var track = $(".tape__track", tape); if (!track) return;
      var base = track.innerHTML, half = 0, lastW = 0, x = 0;
      function fill() {
        if (tape.offsetWidth === lastW) return; lastW = tape.offsetWidth;
        track.innerHTML = base; var guard = 0;
        while (track.scrollWidth < tape.offsetWidth * 1.2 && guard++ < 24) track.insertAdjacentHTML("beforeend", base);
        track.insertAdjacentHTML("beforeend", track.innerHTML);
        half = track.scrollWidth / 2; x = half ? x % half : 0;
      }
      fill();
      if (reduced) return;
      var dir = parseFloat(tape.getAttribute("data-marquee")) || 1, speed = 0.55, rt;
      window.addEventListener("resize", function () { clearTimeout(rt); rt = setTimeout(fill, 150); }, { passive: true });
      var visible = true;
      if ("IntersectionObserver" in window) new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }).observe(tape);
      (function loop() {
        if (visible) {
          var v = lenis ? Math.min(Math.abs(lenis.velocity), 60) : 0;
          x -= dir * (speed + v * 0.12);
          if (x <= -half) x += half; if (x > 0) x -= half;
          track.style.transform = "translate3d(" + x.toFixed(2) + "px,0,0)";
        }
        requestAnimationFrame(loop);
      })();
    });
  }

  /* =======================================================================
     9. PROTECTION MAP
     ======================================================================= */
  function initProtectionMap() {
    var root = $("[data-pmap]"); if (!root) return;
    var btns = $$(".zone-btn", root), groups = $$(".worker [data-zone]", root), svg = $(".worker", root), card = $("#zone-card");
    var order = btns.map(function (b) { return b.getAttribute("data-zone"); });
    var current = null, timer = null, userTouched = false, inView = false;

    function fill(zone) {
      var c = catById(zone); if (!c) return;
      var idx = order.indexOf(zone) + 1;
      var media = $(".zone-card__media", card), bodyEl = $(".zone-card__body", card);
      $("img.photo", media).src = asset(c.image);
      $("img.photo", media).setAttribute("style", photoStyle(c));
      var zb = btns[idx - 1], zl = zb ? $(".t", zb).textContent : (c.zone || c.name);
      $(".tag", media).textContent = "Zone " + pad(idx) + " · " + zl;
      var art = $(".art", media); if (c.art) { art.src = asset(c.art); art.hidden = false; } else art.hidden = true;
      $("h3", bodyEl).textContent = c.name;
      $("p", bodyEl).textContent = c.protects;
      var shown = c.items.slice(0, 6), more = c.items.length - shown.length;
      $(".zone-card__items", bodyEl).innerHTML = shown.map(function (it) {
        var key = c.id + ":" + it.id;
        return '<button class="chip" type="button" data-add="' + key + '" aria-pressed="false">' + icon("plus") + esc(it.name) + "</button>";
      }).join("") + (more > 0 ? '<a class="chip chip--more" href="' + BASE + "products.html#cat-" + c.id + '">+' + more + " more</a>" : "");
      $(".zone-card__foot a", bodyEl).setAttribute("href", BASE + "products.html#cat-" + c.id);
      updateCounts();
    }

    function set(zone, instant) {
      if (zone === current) return; current = zone;
      btns.forEach(function (b) { var on = b.getAttribute("data-zone") === zone; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", on ? "true" : "false"); });
      groups.forEach(function (g) { g.classList.toggle("is-active", g.getAttribute("data-zone") === zone); });
      svg.classList.add("has-active");
      if (instant || reduced) { fill(zone); return; }
      card.classList.add("swap");
      setTimeout(function () { fill(zone); requestAnimationFrame(function () { card.classList.remove("swap"); }); }, 260);
    }

    function stopAuto() { userTouched = true; clearInterval(timer); }
    btns.forEach(function (b) {
      b.addEventListener("click", function () { stopAuto(); set(b.getAttribute("data-zone")); });
      if (finePointer) b.addEventListener("pointerenter", function () { if (userTouched) set(b.getAttribute("data-zone")); });
    });
    $$(".hotspot", root).forEach(function (h) { h.addEventListener("click", function () { stopAuto(); set(h.getAttribute("data-zone")); }); });
    card.addEventListener("pointerenter", function () { clearInterval(timer); });

    set("head", true);
    if (!reduced && "IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        inView = en[0].isIntersecting; clearInterval(timer);
        if (inView && !userTouched) timer = setInterval(function () { var i = (order.indexOf(current) + 1) % order.length; set(order[i]); }, 4200);
      }, { threshold: 0.35 }).observe(root);
    }
  }

  /* =======================================================================
     10. RANGE RAIL (home)
     ======================================================================= */
  function railCard(c) {
    var media = c.artFirst || !c.image
      ? '<span class="art-bg"></span><img class="art-big" src="' + asset(c.art || "assets/img/illustrations/ppe-respirator.svg") + '" alt="" loading="lazy">'
      : '<img class="photo" src="' + asset(c.image) + '" alt="" loading="lazy" style="' + photoStyle(c) + '">' + (c.art ? '<img class="rcard__art" src="' + asset(c.art) + '" alt="" loading="lazy">' : "");
    return '<a class="rcard" href="' + BASE + 'products.html#cat-' + c.id + '" data-cursor="View"><div class="rcard__media">' + media + '<span class="rcard__no">' + c.no + "</span></div>" +
      '<div class="rcard__body"><h3>' + esc(c.name) + "</h3><p>" + esc(c.protects) + '</p><div class="rcard__meta"><span>' + c.items.length + " item types</span>" + icon("arrow-ur") + "</div></div></a>";
  }
  function initRail() {
    var track = $("[data-rail-track]"); if (!track) return;
    track.innerHTML = CAT.map(railCard).join("") +
      '<a class="rcard rcard--end" href="' + BASE + 'contact.html#quote" data-cursor="Quote"><span class="label">Need something else?</span><h3>Tell us what your team needs.</h3><span class="link-arrow" style="color:var(--amber)">Request a quote ' + icon("arrow") + "</span></a>";
    var viewport = $("[data-rail]"), section = $("[data-rail-section]"), bar = $(".rail__progress b"), count = $("[data-rail-count]"), total = CAT.length;
    function progress(p) {
      if (bar) bar.parentNode.style.setProperty("--p", p.toFixed(3));
      if (count) count.textContent = pad(Math.min(total, Math.max(1, Math.round(p * (total - 1)) + 1))) + " / " + pad(total);
    }
    if (hasGsap && !reduced) {
      ST.matchMedia({
        "(min-width: 981px)": function () {
          viewport.classList.add("is-pinned");
          var dist = function () { return Math.max(0, track.scrollWidth - window.innerWidth); };
          var tw = gsap.to(track, { x: function () { return -dist(); }, ease: "none",
            scrollTrigger: { trigger: section, start: "top top", end: function () { return "+=" + dist(); }, pin: true, scrub: 0.8, invalidateOnRefresh: true, onUpdate: function (s) { progress(s.progress); } } });
          return function () { viewport.classList.remove("is-pinned"); tw.scrollTrigger && tw.scrollTrigger.kill(); tw.kill(); gsap.set(track, { x: 0 }); };
        }
      });
    }
    viewport.addEventListener("scroll", function () { var m = viewport.scrollWidth - viewport.clientWidth; progress(m > 0 ? viewport.scrollLeft / m : 0); }, { passive: true });
  }

  /* =======================================================================
     11. PROCESS STEPS + OBJECTIVES
     ======================================================================= */
  function initSteps() {
    var wrap = $("[data-steps]");
    if (wrap) {
      var steps = $$(".step", wrap), cur = $("[data-step-cur]"), line = $(".steps__line", wrap);
      var activate = function (i) { steps.forEach(function (s, j) { s.classList.toggle("is-on", j <= i); }); if (cur) cur.textContent = pad(i + 1); };
      if (hasGsap && !reduced) {
        steps.forEach(function (s, i) { ST.create({ trigger: s, start: "top 62%", end: "bottom 62%", onEnter: function () { activate(i); }, onEnterBack: function () { activate(i); } }); });
        ST.create({ trigger: wrap, start: "top 62%", end: "bottom 62%", scrub: true, onUpdate: function (s) { line.style.setProperty("--p", s.progress.toFixed(3)); } });
      } else { activate(steps.length - 1); line.style.setProperty("--p", 1); }
    }
    var objWrap = $("[data-objectives]");
    if (objWrap) {
      var objs = $$(".obj", objWrap), cnt = $("[data-obj-count]"), meter = $(".obj-meter i");
      var on = function (i) { objs.forEach(function (o, j) { o.classList.toggle("is-on", j === i); }); if (cnt) cnt.textContent = pad(i + 1) + " / " + pad(objs.length); if (meter) meter.style.setProperty("--p", ((i + 1) / objs.length).toFixed(3)); };
      if (hasGsap && !reduced) objs.forEach(function (o, i) { ST.create({ trigger: o, start: "top 60%", end: "bottom 60%", onEnter: function () { on(i); }, onEnterBack: function () { on(i); } }); });
      else objs.forEach(function (o) { o.classList.add("is-on"); });
    }
  }

  /* =======================================================================
     12. PRODUCTS PAGE
     ======================================================================= */
  function initCatalog() {
    var host = $("[data-catalog]"); if (!host) return;
    host.innerHTML = CAT.map(function (c) {
      var media = c.artFirst || !c.image
        ? '<span class="art-bg"></span><img class="art-big" src="' + asset(c.art) + '" alt="' + esc(c.name) + ' illustration" loading="lazy">'
        : '<img class="photo" src="' + asset(c.image) + '" alt="' + esc(c.name) + '" loading="lazy" style="' + photoStyle(c, 0.45) + '">' + (c.art ? '<img class="cat-media__art" src="' + asset(c.art) + '" alt="" loading="lazy">' : "");
      var items = c.items.map(function (it, i) {
        var key = c.id + ":" + it.id;
        return '<li class="item" data-item data-text="' + esc((it.name + " " + it.desc + " " + c.name).toLowerCase()) + '"><span class="item__k">' + c.no + "." + (i + 1) +
          '</span><div><h3 data-hl-target>' + esc(it.name) + '</h3><p>' + esc(it.desc) + '</p></div><button class="add-btn" type="button" data-add="' + key + '" aria-pressed="false">' + icon("plus") + '<span data-add-label>Add to quote</span></button></li>';
      }).join("");
      return '<section class="cat-section" id="cat-' + c.id + '" data-cat="' + c.id + '" aria-labelledby="h-' + c.id + '">' +
        '<div class="cat-media" data-reveal="clip"><div class="cat-media__frame">' + media + '<span class="corners"></span><span class="cat-media__no">' + c.no + "</span></div></div>" +
        '<div><div class="cat-head"><span class="label">Category ' + c.no + (c.zone ? " · " + esc(c.zone) : "") + '</span><h2 id="h-' + c.id + '">' + esc(c.name) + "</h2><p>" + esc(c.protects) + "</p></div>" +
        '<ul class="items">' + items + '</ul><p class="cat-note">' + icon("info") + "Specifications, sizes and brands are available on request.</p></div></section>";
    }).join("");

    var tabs = $("[data-cat-tabs]");
    tabs.innerHTML = CAT.map(function (c) { return '<button class="cat-tab" type="button" data-jump="' + c.id + '"><small>' + c.no + "</small>" + esc(c.name.replace(" Protection", "").replace(" & Hygiene PPE", "")) + "</button>"; }).join("");
    tabs.addEventListener("click", function (e) { var b = e.target.closest("[data-jump]"); if (!b) return; var t = $("#cat-" + b.getAttribute("data-jump")); if (t) scrollToEl(t); });

    // scroll spy
    var sections = $$(".cat-section", host);
    function spy(id) {
      $$(".cat-tab", tabs).forEach(function (b) {
        var on = b.getAttribute("data-jump") === id; if (on) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
        if (on) { var l = b.offsetLeft - 20; tabs.scrollTo ? tabs.scrollTo({ left: l, behavior: "smooth" }) : (tabs.scrollLeft = l); }
      });
    }
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (en) { en.forEach(function (x) { if (x.isIntersecting) spy(x.target.getAttribute("data-cat")); }); }, { rootMargin: "-45% 0px -50% 0px" });
      sections.forEach(function (s) { io.observe(s); });
    }

    // search
    var input = $("[data-search]"), none = $("[data-no-results]");
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase(), any = false;
      sections.forEach(function (s) {
        var hit = 0;
        $$("[data-item]", s).forEach(function (it) {
          var ok = !q || it.getAttribute("data-text").indexOf(q) > -1;
          it.hidden = !ok; if (ok) hit++;
          var h = $("[data-hl-target]", it), txt = h.textContent;
          if (q && ok && txt.toLowerCase().indexOf(q) > -1) { var i = txt.toLowerCase().indexOf(q); h.innerHTML = esc(txt.slice(0, i)) + "<mark>" + esc(txt.slice(i, i + q.length)) + "</mark>" + esc(txt.slice(i + q.length)); }
          else h.textContent = txt;
        });
        s.hidden = !hit; if (hit) any = true;
      });
      none.classList.toggle("is-on", !any);
      if (hasGsap) ST.refresh();
    });

    updateCounts();
  }

  /* =======================================================================
     13. CONTACT PAGE: tabs, quote list in form, submission
     ======================================================================= */
  function renderFormQuote() {
    var list = $("[data-form-qlines]"); if (!list) return;
    var empty = $("[data-form-qempty]"), field = $("[data-form-items]");
    list.innerHTML = Quote.items.map(function (x) {
      var f = findItem(x.id);
      return "<li><div>" + esc(f.item.name) + "<span>" + esc(f.cat.name) + "</span></div>" + qtyControl(x.id, x.qty) + "</li>";
    }).join("");
    empty.hidden = Quote.count() > 0;
    field.value = Quote.items.map(function (x) { var f = findItem(x.id); return x.qty + " × " + f.item.name + " (" + f.cat.name + ")"; }).join("\n");
  }

  function initContact() {
    var tabs = $$("[data-tab]"); if (!tabs.length) return;
    function show(name, focus) {
      tabs.forEach(function (t) {
        var on = t.getAttribute("data-tab") === name;
        t.setAttribute("aria-selected", on ? "true" : "false"); t.tabIndex = on ? 0 : -1;
        $("#" + t.getAttribute("aria-controls")).hidden = !on;
        if (on && focus) t.focus();
      });
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { show(t.getAttribute("data-tab")); });
      t.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); var n = tabs[(i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length]; show(n.getAttribute("data-tab"), true); }
      });
    });
    if (location.hash === "#enquiry") show("enquiry"); else show("quote");
    var onHash = function (h) { if (h === "#enquiry") show("enquiry"); else if (h === "#quote") show("quote"); };
    window.addEventListener("sa:hash", function (e) { onHash(e.detail); });
    window.addEventListener("hashchange", function () { onHash(location.hash); });
    var dt = $("#q-date"); if (dt) { var t0 = new Date(); dt.min = t0.getFullYear() + "-" + pad(t0.getMonth() + 1) + "-" + pad(t0.getDate()); }
    renderFormQuote();

    $$("form[data-form]").forEach(function (form) {
      var status = $("[data-form-status]", form);
      function validate() {
        var ok = true;
        $$("[required]", form).forEach(function (inp) {
          var f = inp.closest(".field"), v = inp.value.trim();
          var bad = !v || (inp.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
          f.classList.toggle("has-error", bad); inp.setAttribute("aria-invalid", bad ? "true" : "false");
          if (bad && ok) { ok = false; inp.focus(); }
        });
        return ok;
      }
      $$("[required]", form).forEach(function (inp) { inp.addEventListener("input", function () { inp.closest(".field").classList.remove("has-error"); }); });
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        status.className = "form-status";
        if (!validate()) return;
        if (form.getAttribute("data-form") === "quote") renderFormQuote();
        var btn = $("button[type=submit]", form), label = btn.innerHTML;
        if (location.protocol === "file:") {
          status.textContent = "Preview mode: the form is working, and it will send for real once the site is live on Netlify.";
          status.classList.add("form-status", "is-on", "ok"); return;
        }
        btn.disabled = true; btn.innerHTML = "Sending…";
        var data = new URLSearchParams(new FormData(form)).toString();
        fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: data })
          .then(function (r) {
            if (!r.ok) throw new Error(r.status);
            if (form.getAttribute("data-form") === "quote") Quote.clear();
            try { sessionStorage.setItem("sa-pt", "1"); } catch (err) {}
            var pt = $(".pt"); if (pt && !reduced) pt.classList.add("is-covering");
            setTimeout(function () { window.location.href = "thank-you.html"; }, reduced ? 0 : 600);
          })
          .catch(function () {
            btn.disabled = false; btn.innerHTML = label;
            var mail = (CFG.contact && CFG.contact.email) || "";
            status.innerHTML = "Sorry, the message could not be sent. Please try again" + (mail ? ', or email <a href="mailto:' + esc(mail) + '">' + esc(mail) + "</a>" : "") + ".";
            status.classList.add("is-on", "bad");
          });
      });
    });
  }

  /* =======================================================================
     14. MISC
     ======================================================================= */
  function scrollToHashOnLoad() {
    var h = location.hash; if (!h || h.length < 2) return;
    var id = h === "#enquiry" ? "quote" : h.slice(1), t = d.getElementById(id); if (!t) return;
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    var go = function () { if (hasGsap) ST.refresh(); scrollToEl(t); };
    var delay = html.classList.contains("pt-enter") ? 750 : 350;
    if (d.readyState === "complete") setTimeout(go, delay); else window.addEventListener("load", function () { setTimeout(go, delay); });
  }

  function initMisc() {
    var mark = $(".footer__mark");
    if (mark && "IntersectionObserver" in window) {
      new IntersectionObserver(function (en) { mark.classList.toggle("is-lit", en[0].isIntersecting); }, { threshold: 0.7 }).observe(mark);
    }
    $$("[data-to-top]").forEach(function (a) { a.addEventListener("click", function (e) { e.preventDefault(); if (lenis) lenis.scrollTo(0, { duration: 1.6 }); else window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" }); }); });
    if (hasGsap) {
      window.addEventListener("load", function () { ST.refresh(); });
      if (d.fonts && d.fonts.ready) d.fonts.ready.then(function () { ST.refresh(); });
    }
  }

  /* ---------- boot ---------- */
  function boot() {
    html.classList.add("booted");
    // render dynamic content first, so reveals and triggers see it
    bindConfig();
    initRail();
    initCatalog();
    initProtectionMap();
    // behaviour
    initScroll();
    initHeader();
    initMenu();
    initQuoteUI();
    initHero();
    heroParallax();
    initLoader();
    initCursor();
    initMagnetic();
    initReveals();
    initMarquees();
    initSteps();
    initContact();
    initMisc();
    scrollToHashOnLoad();
    var started = false;
    var start = function () { if (started) return; started = true; heroIntro(); initSplits(); initScrub(); if (hasGsap) ST.refresh(); };
    if (d.fonts && d.fonts.ready) { d.fonts.ready.then(start); setTimeout(start, 2500); } else start();
  }
  if (d.readyState === "loading") d.addEventListener("DOMContentLoaded", boot); else boot();
})();

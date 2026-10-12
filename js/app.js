(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => [...document.querySelectorAll(s)];

  // ---------- Música ----------
  const music = $("#backgroundMusic");
  const musicControl = $("#musicControl");

  function setMusicState(playing) {
    musicControl.classList.toggle("paused", !playing);
    musicControl.setAttribute("aria-label", playing ? "Pausar música" : "Reproducir música");
    musicControl.setAttribute("aria-pressed", String(playing));
  }

  musicControl.addEventListener("click", () => {
    if (music.paused) {
      music.play().then(() => setMusicState(true)).catch(() => { });
    } else {
      music.pause();
      setMusicState(false);
    }
  });

  // ---------- Entrada ----------
  const intro = $("#intro");
  const site = $("#site");

  $("#enterBtn").addEventListener("click", () => {
    intro.classList.add("leave");
    site.setAttribute("aria-hidden", "false");
    document.body.classList.add("entered");
    setTimeout(() => intro.remove(), 900);

    // El navegador solo permite audio tras un clic del usuario.
    music.volume = 0.35;
    const playPromise = music.play();
    if (playPromise !== undefined) {
      playPromise.then(() => setMusicState(true)).catch(() => setMusicState(false));
    }
  });

  // ---------- Nombre ----------
  $$("[data-name]").forEach(el => el.textContent = contenido.nombre);
  document.title = `Para ${contenido.nombre}`;
  $("#letterSign").textContent = contenido.firma;

  // ---------- Modo prueba (?test=1) ----------
  const testMode = new URLSearchParams(location.search).get("test") === "1";
  const birthdayDate = new Date(contenido.cumple);
  const effectiveBirthday = testMode ? new Date(Date.now() - 1000) : birthdayDate;

  // ---------- Cuenta regresiva ----------
  function updateCountdown() {
    const diff = effectiveBirthday - new Date();
    if (diff <= 0) {
      $("#countdown").hidden = true;
      $("#countdownLabel").hidden = true;
      $("#birthdayMessage").hidden = false;
      $("#pretitle").textContent = "Hoy celebramos a";
      return;
    }
    const sec = Math.floor(diff / 1000);
    $("#days").textContent = String(Math.floor(sec / 86400)).padStart(2, "0");
    $("#hours").textContent = String(Math.floor((sec % 86400) / 3600)).padStart(2, "0");
    $("#minutes").textContent = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    $("#seconds").textContent = String(sec % 60).padStart(2, "0");
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);

  // ---------- Velas ----------
  const candles = $("#candles");
  const tapHint = $("#tapHint");
  let lit = contenido.edad;

  for (let i = 0; i < contenido.edad; i++) {
    const c = document.createElement("button");
    c.className = "candle";
    c.setAttribute("aria-label", `Vela ${i + 1}`);
    c.innerHTML = `<span class="flame"></span>`;
    c.addEventListener("click", () => {
      if (c.classList.contains("out")) return;
      c.classList.add("out");
      lit--;
      confetti(12);
      if (lit === 0) {
        tapHint.textContent = "¡Gooool! Pide un deseo, crack";
        confetti(160);
      }
    });
    candles.appendChild(c);
  }

  // ---------- Imágenes ----------
  function media(src, alt, fallback) {
    if (!src) return `<div class="photo-placeholder"><span>U</span><small>${fallback}</small></div>`;
    return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.outerHTML='<div class=&quot;photo-placeholder&quot;><span>U</span><small>Agrega tu foto aquí</small></div>'">`;
  }

  // ---------- Infancia ----------
  const timeline = $("#timeline");
  contenido.ninez.forEach((item, i) => {
    const card = document.createElement("article");
    card.className = "timeline-item reveal";
    card.innerHTML = `
      <div class="timeline-dot">${String(i + 1).padStart(2, "0")}</div>
      <div class="timeline-card">
        <div class="timeline-photo">${media(item.foto, item.titulo, "Tu foto aquí")}</div>
        <div class="timeline-copy">
          <span class="age">${item.edad}</span>
          <h3>${item.titulo}</h3>
          <p>${item.texto}</p>
        </div>
      </div>`;
    timeline.appendChild(card);
  });

  // ---------- Familia ----------
  const family = $("#familyGrid");
  contenido.familia.forEach(item => {
    const card = document.createElement("article");
    card.className = "family-card reveal";
    card.innerHTML = `
      <div class="family-photo">${media(item.foto, item.nombre, "Foto")}</div>
      <div class="family-copy">
        <span>${item.relacion}</span>
        <h3>${item.nombre}</h3>
        <p>“${item.mensaje}”</p>
      </div>`;
    family.appendChild(card);
  });

  // ---------- Nosotros ----------
  const moments = $("#moments");
  const brokenPhoto = `onerror="this.parentElement.innerHTML='<div class=&quot;moment-empty&quot;><span>U</span><p>No se pudo cargar esta foto</p></div>'"`;

  if (moments && contenido.nosotros) {
    contenido.nosotros.forEach((item, i) => {
      const card = document.createElement("article");
      card.className = `moment reveal ${i % 2 ? "reverse" : ""}`;

      // Fotos: "fotos: [...]" (varias) o "foto: ..." (una sola)
      const listaFotos = Array.isArray(item.fotos)
        ? item.fotos.filter(f => f && f.trim() !== "")
        : (item.foto && item.foto.trim() !== "" ? [item.foto] : []);

      let visual = "";

      listaFotos.forEach((foto, n) => {
        visual += `
          <div class="moment-media-item">
            <img src="${foto}" alt="${item.titulo} - Foto ${n + 1}" loading="lazy" ${brokenPhoto}>
          </div>`;
      });

      const tieneVideo = item.video && item.video.trim() !== "";

      if (tieneVideo) {
        visual += `
          <div class="moment-media-item moment-video-container">
            <video class="moment-video" controls playsinline preload="metadata">
              <source src="${item.video}" type="video/mp4">
              Tu navegador no puede reproducir este video.
            </video>
          </div>`;
      }

      if (visual === "") {
        visual = `
          <div class="moment-empty">
            <span>U</span>
            <p>Aquí irá uno de nuestros recuerdos</p>
          </div>`;
      }

      card.innerHTML = `
        <div class="moment-photo">${visual}</div>
        <div class="moment-copy">
          <span class="moment-index">${String(i + 1).padStart(2, "0")}</span>
          <span class="moment-date">${item.fecha}</span>
          <h3>${item.titulo}</h3>
          <p>${item.texto}</p>
        </div>`;
      moments.appendChild(card);
    });
  }


  // ---------- Días juntos ----------
  function updateTogether() {
    // Fecha de inicio de la relación: 15 de diciembre de 2024
    const start = new Date(2024, 11, 15, 0, 0, 0);
    const now = new Date();

    // Calcular los días completos transcurridos
    const days = Math.max(
      0,
      Math.floor((now - start) / 86400000)
    );

    // Mostrar el contador con tres dígitos
    $("#daysTogether").textContent = String(days).padStart(3, "0");
  }

  updateTogether();
  setInterval(updateTogether, 60000);

  // ---------- La U ----------
  const laUFoto = $("#laUFoto");
  if (contenido.laU && contenido.laU.foto) {
    laUFoto.hidden = false;
    laUFoto.innerHTML = `<img src="${contenido.laU.foto}" alt="Mauro y la U" loading="lazy" onerror="this.parentElement.hidden=true">`;
  }

  const laUGrid = $("#laUGrid");
  if (contenido.laU && contenido.laU.tarjetas) {
    contenido.laU.tarjetas.forEach(t => {
      const card = document.createElement("article");
      card.className = "pasion-card reveal";
      card.innerHTML = `<strong>${t.grande}</strong><h3>${t.titulo}</h3><p>${t.texto}</p>`;
      laUGrid.appendChild(card);
    });
  }

  // ---------- Algo que me recuerda a ti ----------
  // Acepta "fotos: [...]" (una o varias) o "foto: ..." (una sola).
  const rec = contenido.recuerdo;
  if (rec) {
    const fotosRec = Array.isArray(rec.fotos) && rec.fotos.length
      ? rec.fotos
      : [rec.foto || ""];

    $("#recuerdoImagen").innerHTML = fotosRec.map((src, n) => `
      <figure class="recuerdo-foto">
        ${media(src, "Algo que me recuerda a ti - Foto " + (n + 1), "Aquí va la foto")}
      </figure>`).join("");

    $("#recuerdoPuntos").innerHTML = (rec.puntos || []).map(p => `
      <article class="recuerdo-punto reveal">
        <strong>${p.titulo}</strong>
        <p>${p.texto}</p>
      </article>`).join("");
  }

  // ---------- Carta ----------
  $("#envelope").addEventListener("click", () => {
    $("#envelope").classList.add("open");
    setTimeout(() => {
      const letter = $("#letter");
      letter.hidden = false;
      $("#letterText").innerHTML = contenido.carta.map(p => `<p>${p}</p>`).join("");
      // Pequeña pausa para que la transición de opacidad se vea.
      requestAnimationFrame(() => {
        letter.classList.add("show");
        letter.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }, 700);
  });

  // ---------- Sorpresa ----------
  $("#surpriseBtn").addEventListener("click", () => {
    $("#surpriseReveal").hidden = false;
    $("#surpriseText").textContent = contenido.sorpresa;
    confetti(180);
  });

  // ---------- Aparecer al hacer scroll ----------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  $$(".reveal").forEach(el => observer.observe(el));

  // ---------- Confeti sin librerías (colores de la U) ----------
  const canvas = $("#confetti");
  const ctx = canvas.getContext("2d");
  const colors = ["#f1e4c3", "#a3162f", "#c9a24b", "#7a1022", "#ffffff"];
  let particles = [];
  let animating = false;

  function resizeCanvas() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  }
  addEventListener("resize", resizeCanvas);
  resizeCanvas();

  function confetti(amount = 80) {
    for (let i = 0; i < amount; i++) {
      particles.push({
        x: innerWidth / 2 + (Math.random() - .5) * 140,
        y: innerHeight * .35,
        vx: (Math.random() - .5) * 12,
        vy: -Math.random() * 10 - 4,
        gravity: .28 + Math.random() * .18,
        size: 4 + Math.random() * 7,
        rotation: Math.random() * 6,
        spin: (Math.random() - .5) * .2,
        life: 90 + Math.random() * 90,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    if (!animating) animateConfetti();
  }

  function animateConfetti() {
    animating = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles = particles.filter(p => p.life > 0 && p.y < canvas.height + 30);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.rotation += p.spin;
      p.life--;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.min(1, p.life / 30);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * .55);
      ctx.restore();
    });
    if (particles.length) requestAnimationFrame(animateConfetti);
    else {
      animating = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }
})();
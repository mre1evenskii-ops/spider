/* ============================================================
   โฟลเดอร์รูป (ไฟล์ .jpg .png .webp ใช้ได้หมด)
   images/tobey/actor.jpg            <- รูปนักแสดงสำหรับหน้าเลือก (ไม่บังคับ)
   images/tobey/m1/poster.jpg  love.jpg  villain.jpg   (m1, m2, m3 = ภาค 1-3)
   ถ้าภาคไหนมีตัวร้ายหลายตัว ใช้ villain.jpg, villain2.jpg, villain3.jpg ตามลำดับ
   images/andrew/m1, m2      images/tom/m1, m2, m3
   images/miles/m1, m2
   ============================================================ */

const DATA = [
  { id: "tobey", name: "Tobey Maguire", era: "ไตรภาค Sam Raimi (2002-2007)",
    tag: "ไอ้แมงมุมเพื่อนบ้านแสนดี ผู้เรียนรู้ว่าพลังยิ่งใหญ่มาพร้อมความรับผิดชอบ",
    movies: [
      { t: "Spider-Man", y: 2002, dir: "Sam Raimi",
        story: "Peter Parker นักเรียนเนิร์ดถูกแมงมุมกลายพันธุ์กัด ได้พลังใหม่ และต้องเรียนรู้ความหมายของความรับผิดชอบหลังสูญเสียลุงเบน",
        love: ["Mary Jane Watson", "Kirsten Dunst", "เพื่อนบ้านที่ Peter แอบรักมาตั้งแต่เด็ก"],
        villain: ["Green Goblin", "Willem Dafoe", "Norman Osborn นักธุรกิจที่เสียสติจากสูตรเพิ่มพลัง"] },
      { t: "Spider-Man 2", y: 2004, dir: "Sam Raimi",
        story: "Peter ต้องเลือกระหว่างชีวิตปกติกับการเป็นฮีโร่ ขณะที่ Doc Ock ตัวร้ายแขนกลสี่แขนคุกคามเมือง",
        love: ["Mary Jane Watson", "Kirsten Dunst", "ความสัมพันธ์ที่ถูกทดสอบด้วยความลับของ Peter"],
        villain: ["Doc Ock", "Alfred Molina", "Dr. Otto Octavius นักวิทยาศาสตร์ที่ถูกแขนกลควบคุมจิตใจ"] },
      { t: "Spider-Man 3", y: 2007, dir: "Sam Raimi",
        story: "ชุดดำจากต่างดาวปลุกด้านมืดของ Peter ขณะที่ Sandman, New Goblin และ Venom ถาโถมเข้ามา",
        love: ["Mary Jane Watson / Gwen Stacy", "Kirsten Dunst / Bryce Dallas Howard", "รักสามเส้าท่ามกลางศึกใหญ่"],
        villain: ["Venom & Sandman", "Topher Grace / Thomas Haden Church", "Eddie Brock และ Flint Marko สองตัวร้ายหลัก"] }] },
  { id: "andrew", name: "Andrew Garfield", era: "The Amazing Spider-Man (2012-2014)",
    tag: "ไอ้แมงมุมขี้เล่นที่ตามหาความลับของพ่อแม่ และรักที่เจ็บปวดที่สุด",
    movies: [
      { t: "The Amazing Spider-Man", y: 2012, dir: "Marc Webb",
        story: "ย้อนไปค้นความลับเรื่องพ่อแม่ของ Peter พร้อมเผชิญหน้ากับ Dr. Curt Connors ที่กลายเป็น Lizard",
        love: ["Gwen Stacy", "Emma Stone", "แฟนสาวผู้ฉลาดและเป็นลูกสาวของกัปตันตำรวจ"],
        villain: ["The Lizard", "Rhys Ifans", "Dr. Curt Connors ที่ทดลองสูตรงอกแขนจนกลายเป็นสัตว์เลื้อยคลาน"] },
      { t: "The Amazing Spider-Man 2", y: 2014, dir: "Marc Webb",
        story: "Peter สืบเรื่องบริษัท Oscorp ขณะที่ Electro และ Harry Osborn ผู้กลายเป็น Green Goblin ก่อเหตุ",
        love: ["Gwen Stacy", "Emma Stone", "รักที่ต้องเลือกระหว่างความปลอดภัยกับหัวใจ"],
        villain: [
          ["Electro", "Jamie Foxx", "Max Dillon วิศวกรที่ได้พลังไฟฟ้าหลังอุบัติเหตุ"],
          ["Green Goblin (Harry Osborn)", "Dane DeHaan", "เพื่อนเก่าของ Peter ที่ผันตัวเป็นตัวร้ายหลังรับสูตรจาก Oscorp"],
          ["Rhino", "Paul Giamatti", "Aleksei Sytsevich อาชญากรที่สวมชุดเกราะยักษ์ถล่มเมือง"]] }] },
  { id: "tom", name: "Tom Holland", era: "Marvel Cinematic Universe (2017-2021)",
    tag: "ไอ้แมงมุมรุ่นใหม่ในจักรวาลมาร์เวล ที่ต้องพิสูจน์ตัวเองในโลกของเหล่าฮีโร่",
    movies: [
      { t: "Spider-Man: Homecoming", y: 2017, dir: "Jon Watts",
        story: "Peter วัยมัธยมพยายามพิสูจน์ตัวเองกับ Tony Stark ขณะต่อกรกับ Vulture ที่ขายอาวุธเทคโนโลยีเอเลี่ยน",
        love: ["Liz Allan", "Laura Harrier", "เพื่อนร่วมโรงเรียนที่ Peter แอบชอบ"],
        villain: ["Vulture", "Michael Keaton", "Adrian Toomes ผู้นำทีมเก็บกวาดซากสงคราม"] },
      { t: "Spider-Man: Far From Home", y: 2019, dir: "Jon Watts",
        story: "ทริปยุโรปของ Peter ถูกขัดจังหวะโดย Mysterio ที่อ้างว่ามาจากโลกคู่ขนาน",
        love: ["MJ", "Zendaya", "เพื่อนร่วมชั้นสุดเก๋ที่ใกล้ชิดกับ Peter มากขึ้น"],
        villain: ["Mysterio", "Jake Gyllenhaal", "Quentin Beck ผู้เชี่ยวชาญภาพลวงตา"] },
      { t: "Spider-Man: No Way Home", y: 2021, dir: "Jon Watts",
        story: "ตัวตนของ Peter ถูกเปิดเผย เขาขอให้ Doctor Strange ช่วย จนเปิดมัลติเวิร์สและตัวร้ายจากอดีตก็ทะลักเข้ามา",
        love: ["MJ", "Zendaya", "คนรักที่ต้องเผชิญผลของการร่ายคาถา"],
        villain: [
          ["Green Goblin", "Willem Dafoe", "Norman Osborn จากจักรวาลอื่นที่ถูกดึงข้ามมิติเข้ามา"],
          ["Doc Ock", "Alfred Molina", "Otto Octavius จากอีกจักรวาลที่กลับมาพร้อมแขนกล"]] }] },
  { id: "miles", name: "Miles Morales", era: "Spider-Verse (2018-2023) · พากย์โดย Shameik Moore",
    tag: "ไอ้แมงมุมหนุ่มจากบรูคลิน ที่ไม่เหมือนใคร และสร้างเส้นทางของตัวเอง",
    movies: [
      { t: "Spider-Man: Into the Spider-Verse", y: 2018, dir: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
        story: "Miles วัยรุ่นจากบรูคลินถูกแมงมุมกัดและได้พลัง จนได้พบ Spider-People จากหลายมิติ และต้องร่วมกันหยุดเครื่องจักรของ Kingpin",
        love: ["Gwen Stacy (Spider-Gwen)", "Hailee Steinfeld", "เพื่อน Spider จากอีกมิติที่เข้าใจ Miles ที่สุด"],
        villain: ["Kingpin", "Liev Schreiber", "Wilson Fisk ผู้สร้างเครื่องเร่งอนุภาคเพื่อเปิดมิติตามหาครอบครัวที่สูญเสีย"] },
      { t: "Spider-Man: Across the Spider-Verse", y: 2023, dir: "Joaquim Dos Santos, Kemp Powers, Justin K. Thompson",
        story: "Miles กลับมาพบ Gwen ท่องมัลติเวิร์ส และขัดแย้งกับ Spider-Society ที่นำโดย Miguel O'Hara เรื่องชะตากรรมที่ต้องเกิดขึ้น",
        love: ["Gwen Stacy (Spider-Gwen)", "Hailee Steinfeld", "คนสำคัญที่ Miles ตามหาข้ามมิติ"],
        villain: ["The Spot", "Jason Schwartzman", "Jonathan Ohnn ตัวร้ายที่เจาะรูข้ามมิติได้ และแข็งแกร่งขึ้นเรื่อยๆ"] }] }
];

const $ = (s) => document.querySelector(s);
const REG = []; // ข้อมูลสำหรับหน้าต่างรายละเอียด

/* ---------- รูป: ลองหลายนามสกุล แล้วใช้ภาพสำรอง ---------- */
function placeholder(label) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="500"><rect width="100%" height="100%" fill="#1d2142"/><text x="50%" y="46%" fill="#ffd23f" font-size="26" text-anchor="middle" font-family="sans-serif">${label}</text><text x="50%" y="56%" fill="#a9adc7" font-size="16" text-anchor="middle" font-family="sans-serif">ยังไม่มีรูป</text></svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}
function loadImg(img, base, label) {
  const exts = ["jpg", "png", "webp", "jpeg"];
  let i = 0;
  img.onerror = () => {
    i++;
    if (i < exts.length) img.src = `${base}.${exts[i]}`;
    else { img.onerror = null; img.src = placeholder(label); }
  };
  img.src = `${base}.${exts[0]}`;
}
function hydrate() {
  document.querySelectorAll("img[data-base]").forEach((img) => loadImg(img, img.dataset.base, img.dataset.label));
}

/* ---------- เมนู ---------- */
const page = document.body.dataset.actor;
$("#links").innerHTML = `<a href="index.html" ${page === "home" ? 'aria-current="page"' : ""}>เลือกนักแสดง</a>` +
  DATA.map((d) => `<a href="${d.id}.html" ${d.id === page ? 'aria-current="page"' : ""}>${d.name.split(" ")[0]}</a>`).join("");

/* ---------- หน้าเลือกนักแสดง ---------- */
if (page === "home") {
  $("#actors").innerHTML = DATA.map((a) => `
    <a class="actor-card t-${a.id}" href="${a.id}.html">
      <img alt="${a.name}" data-base="images/${a.id}/actor" data-label="${a.name}">
      <div class="ac-text"><h2>${a.name}</h2><p>${a.era}</p><span>${a.movies.length} ภาค: ${a.movies.map((m) => m.y).join(", ")}</span></div>
    </a>`).join("");
  hydrate();
}

/* ---------- หน้านักแสดง ---------- */
function slot(a, n, kind, label, sub, cls, info) {
  const i = REG.push(info) - 1;
  const base = `images/${a.id}/m${n}/${kind}`;
  return `<figure class="slot ${cls}" data-kind="${kind.replace(/\d/g, "")}" data-i="${i}" tabindex="0" role="button" aria-label="${label}">
    <img alt="${label}" data-base="${base}" data-label="${label}"><figcaption>${label}<small>${sub}</small></figcaption></figure>`;
}
/* ข้อความในกล่องกิมมิกข้างการ์ด (แก้ได้) */
const DECO = {
  tobey: ["THWIP!", "คลิกที่ไหนก็ได้เพื่อยิงใย"],
  andrew: ["HIGH VOLTAGE", "ระวังไฟช็อต"],
  tom: ["SCANNING", "SPIDER-SENSE ONLINE"],
  miles: ["SPIDER-VERSE", "หลายมิติ หลายไอ้แมงมุม"]
};
const actor = DATA.find((d) => d.id === page);
if (actor) {
  document.title = `${actor.name} | Spider-Man`;
  $("#heroEra").textContent = actor.era;
  $("#heroName").innerHTML = actor.name.replace(" ", "<br>");
  $("#heroTag").textContent = actor.tag;
  $("#chapters").innerHTML = actor.movies.map((m, k) => {
    const n = k + 1;
    return `<section class="chapter"><div class="year">${m.y}</div>
      ${slot(actor, n, "poster", `โปสเตอร์ ${m.t}`, `${actor.name} · ${m.y}`, "poster", [`${m.t} (${m.y})`, `${actor.name} · กำกับโดย ${m.dir}`, m.story])}
      <div class="info"><h3>${m.t}</h3><p class="meta">ปี ${m.y} · กำกับโดย ${m.dir}</p><p class="story">${m.story}</p>
      <div class="cast">
        ${slot(actor, n, "love", m.love[0], m.love[1], "mini", [m.love[0], `แสดงโดย ${m.love[1]}`, m.love[2]])}
        ${(Array.isArray(m.villain[0]) ? m.villain : [m.villain]).map((v, i) =>
          slot(actor, n, i ? `villain${i + 1}` : "villain", v[0], v[1], "mini", [v[0], `แสดงโดย ${v[1]}`, v[2]])).join("")}
        <div class="deco" aria-hidden="true"><b>${DECO[actor.id][0]}</b><small>${DECO[actor.id][1]}</small></div>
      </div></div></section>`;
  }).join("");
  hydrate();

  const modal = $("#modal");
  const closeModal = () => (modal.hidden = true);
  document.addEventListener("click", (e) => {
    const s = e.target.closest(".slot");
    if (!s) return;
    const [t, sub, text] = REG[+s.dataset.i];
    $("#modalBody").innerHTML = `<div class="modal-body"><img alt="${t}"><div class="modal-text"><h4>${t}</h4><p class="actor">${sub}</p><p>${text}</p></div></div>`;
    const base = s.querySelector("img").dataset.base;
    loadImg($("#modalBody img"), base, t);
    modal.hidden = false;
    $("#close").focus();
  });
  $("#close").onclick = closeModal;
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
    if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("slot")) { e.preventDefault(); e.target.click(); }
  });
  $("#sense").onclick = () => {
    document.body.classList.remove("sense"); void document.body.offsetWidth;
    document.body.classList.add("sense");
    setTimeout(() => document.body.classList.remove("sense"), 900);
  };
}

/* ---------- ใยแมงมุมกระจายตรงจุดคลิก + คำเสียงการ์ตูน ---------- */
const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
const WORDS = ["THWIP!", "POW!", "ZAP!", "WHAM!", "BAM!"];
const mouse = { x: -999, y: -999 };
addEventListener("pointermove", (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });

function pop(x, y, text, color) {
  const d = document.createElement("div");
  d.className = "pop"; d.textContent = text;
  d.style.cssText = `left:${x}px;top:${y}px;color:${color || "#ffd23f"}`;
  document.body.appendChild(d);
  setTimeout(() => d.remove(), 900);
}
function webBurst(cx, cy) {
  const spokes = 9, R = 70 + Math.random() * 40, rot = Math.random() * 6.28;
  const pt = (k, r) => [cx + Math.cos(rot + (k / spokes) * 6.283) * r, cy + Math.sin(rot + (k / spokes) * 6.283) * r];
  let d = "";
  for (let k = 0; k < spokes; k++) { const [x, y] = pt(k, R * (.85 + Math.random() * .3)); d += `M${cx} ${cy}L${x} ${y}`; }
  for (let ring = 1; ring <= 3; ring++) {
    const r = (R * ring) / 3.2;
    for (let k = 0; k < spokes; k++) {
      const [x1, y1] = pt(k, r), [x2, y2] = pt(k + 1, r), [mx, my] = pt(k + .5, r * .82);
      d += `M${x1} ${y1}Q${mx} ${my} ${x2} ${y2}`;
    }
  }
  const p = document.createElementNS("http://www.w3.org/2000/svg", "path");
  p.setAttribute("d", d); p.setAttribute("pathLength", "1"); p.setAttribute("class", "web");
  $("#webs").appendChild(p);
  setTimeout(() => p.remove(), 1600);
}
addEventListener("click", (e) => {
  if (calm || e.target.closest(".bug, .close")) return;
  webBurst(e.clientX, e.clientY);
  pop(e.clientX, e.clientY, WORDS[Math.floor(Math.random() * WORDS.length)]);
});

/* ---------- แมงมุมเดินบนพื้นหลัง ---------- */
const BUG_COUNT = 8;
if (!calm) {
  const bugs = [];
  for (let i = 0; i < BUG_COUNT; i++) {
    const el = document.createElement("span");
    el.className = "bug"; el.innerHTML = "<i>🕷️</i>";
    $("#bugs").appendChild(el);
    const b = { el, x: Math.random() * innerWidth, y: Math.random() * innerHeight, a: Math.random() * 6.28, v: .6 + Math.random() * .8, boost: 0 };
    el.addEventListener("click", (e) => { b.boost = 70; pop(e.clientX, e.clientY, "เฮ้ย!", "#ff6b6b"); });
    bugs.push(b);
  }
  (function walk() {
    for (const b of bugs) {
      const dx = b.x - mouse.x, dy = b.y - mouse.y;
      if (Math.hypot(dx, dy) < 130) { b.a = Math.atan2(dy, dx); b.boost = Math.max(b.boost, 15); }
      else b.a += (Math.random() - .5) * .18;
      if (b.x < 20 || b.x > innerWidth - 20 || b.y < 20 || b.y > innerHeight - 20)
        b.a = Math.atan2(innerHeight / 2 - b.y, innerWidth / 2 - b.x);
      const sp = b.v * (b.boost > 0 ? 4 : 1);
      if (b.boost > 0) b.boost--;
      b.x += Math.cos(b.a) * sp; b.y += Math.sin(b.a) * sp;
      b.el.style.transform = `translate(${b.x}px,${b.y}px) rotate(${b.a + Math.PI / 2}rad)`;
    }
    requestAnimationFrame(walk);
  })();
}
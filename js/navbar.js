// Mengatur buka/tutup modal popup icon dropdown navigasi di tampilan mobile
const btnToggle = document.getElementById("btn-toggle-menu");
const menuAtas = document.getElementById("menu-atas") || document.querySelector(".menu-atas");
const menuBackdrop = document.getElementById("menu-backdrop");

function setMenuState(buka) {
  if (!menuAtas || !btnToggle) return;
  menuAtas.classList.toggle("aktif", buka);
  btnToggle.classList.toggle("aktif", buka);
  if (menuBackdrop) {
    menuBackdrop.classList.toggle("aktif", buka);
  }
  btnToggle.setAttribute("aria-expanded", buka);
  btnToggle.setAttribute("aria-label", buka ? "Tutup menu navigasi" : "Buka menu navigasi");
  const icon = btnToggle.querySelector("i");
  if (icon) {
    icon.className = buka ? "bi bi-x-lg" : "bi bi-list";
  }
}

if (btnToggle && menuAtas) {
  btnToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const sedangBuka = menuAtas.classList.contains("aktif");
    setMenuState(!sedangBuka);
  });

  // Otomatis menutup popup saat salah satu icon navigasi diklik
  menuAtas.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      setMenuState(false);
    });
  });

  // Menutup popup jika backdrop diklik
  if (menuBackdrop) {
    menuBackdrop.addEventListener("click", () => {
      setMenuState(false);
    });
  }

  // Menutup popup jika pengguna mengklik area luar header/menu
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".atas") && menuAtas.classList.contains("aktif")) {
      setMenuState(false);
    }
  });

  // Menutup dengan tombol Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && menuAtas.classList.contains("aktif")) {
      setMenuState(false);
    }
  });
}

// Fitur Navigasi Smooth Scroll untuk semua tautan anchor (#)
document.addEventListener("click", (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const hash = link.getAttribute("href");
  if (!hash || hash === "#") return;
  const target = document.querySelector(hash);
  if (target) {
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    if (history.pushState) {
      history.pushState(null, null, hash);
    }
  }
});

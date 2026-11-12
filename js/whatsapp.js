// Menghubungkan semua tombol dan tautan WhatsApp langsung ke nomor tanpa pesan otomatis
document.querySelectorAll(".btn-wa, .link-wa, [data-wa], #dlg-wa").forEach(a => {
  a.href = waLink();
  a.target = "_blank";
  a.rel = "noopener";
});


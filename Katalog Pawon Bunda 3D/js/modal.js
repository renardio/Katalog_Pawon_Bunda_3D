// Mengatur pembuka dan penutup pop-up (Modal)
const dlg = document.getElementById("dlg");
const dlgFoto = document.getElementById("dlg-foto");

// Fungsi pengunci scroll background saat modal aktif
function kunciScroll(kunci) {
  if (kunci) {
    document.body.classList.add("modal-terbuka");
  } else {
    document.body.classList.remove("modal-terbuka");
  }
}

// Pastikan scroll background selalu pulih saat dialog ditutup (ESC, API, atau klik)
if (dlg) {
  dlg.addEventListener("close", () => kunciScroll(false));
  dlg.addEventListener("cancel", () => kunciScroll(false));
}
if (dlgFoto) {
  dlgFoto.addEventListener("close", () => kunciScroll(false));
  dlgFoto.addEventListener("cancel", () => kunciScroll(false));
}

function fotoInfo(m) {
  if (m.foto) return '<img class="foto-info" src="' + esc(m.foto) + '" alt="Foto ' + esc(m.nama) + '" width="600" height="600" loading="lazy" data-foto-popup="' + esc(m.foto) + '" data-caption="' + esc(m.nama) + '" role="button" tabindex="0" title="Klik untuk memperbesar foto ' + esc(m.nama) + '">';
  return '<div class="foto foto-info" role="img" aria-label="Tempat foto ' + esc(m.nama) + '">[Foto ' + esc(m.nama) + ']</div>';
}

function bukaInfo(id) {
  const m = MENU.find(x => x.id === id);
  if (!m) return;
  const hias = m.tipe === "hias";
  document.getElementById("dlg-judul").textContent = m.nama;
  const lencana = '<span class="kuning">Mulai dari ' + esc(m.mulai) + '</span>' +
    (m.min ? '<span>Minimum pembelian ' + esc(m.min) + '</span>' : '') +
    (m.po ? '<span>' + esc(m.po) + '</span>' : '') +
    (m.ukuran ? '<span>Ukuran ' + esc(m.ukuran) + '</span>' : '') +
    (m.custom ? '<span>Bisa custom</span>' : '');
  const teksTambahan = m.deskripsiTambahan || m.deskripsi_tambahan;
  const tambahanHtml = teksTambahan
    ? '<p class="dlg-deskripsi-tambahan">' + esc(teksTambahan).replace(/\n/g, '<br>') + '</p>'
    : '';

  document.getElementById("dlg-isi").innerHTML = fotoInfo(m) +
    '<p class="dlg-deskripsi">' + esc(m.deskripsi) + '</p>' +
    tambahanHtml +
    '<div class="lencana" style="margin:10px 0">' + lencana + '</div>' +
    (m.paket ? tabel(m.paket) : '') + (m.pilihan ? '<p class="pilihan">' + esc(m.pilihan) + '</p>' : '');
  document.getElementById("dlg-wa").href = waLink();
  dlg.showModal();
  kunciScroll(true);
}

// Fungsi membuka pop-up pratinjau gambar karya yang lebih besar (hanya foto)
function bukaFoto(src, alt) {
  if (!dlgFoto) return;
  const imgEl = document.getElementById("dlg-foto-img");
  if (imgEl) {
    imgEl.src = src;
    imgEl.alt = alt || "Foto karya Pawon Bunda 3D";
  }
  dlgFoto.showModal();
  kunciScroll(true);
}

// Menangani klik tombol "Informasi Produk", foto karya, dan penutup pop-up
document.addEventListener("click", e => {
  const b = e.target.closest("[data-info]");
  const fotoBtn = e.target.closest("[data-foto-popup]");
  if (b) {
    bukaInfo(b.dataset.info);
  } else if (fotoBtn) {
    bukaFoto(fotoBtn.dataset.fotoPopup, fotoBtn.dataset.caption);
  } else if (e.target === dlg) {
    dlg.close();
  } else if (dlgFoto && e.target === dlgFoto) {
    dlgFoto.close();
  }
});

const btnTutupDlg = document.getElementById("dlg-tutup");
if (btnTutupDlg) {
  btnTutupDlg.addEventListener("click", () => dlg.close());
}

const btnTutupDlgFoto = document.getElementById("dlg-foto-tutup");
if (btnTutupDlgFoto && dlgFoto) {
  btnTutupDlgFoto.addEventListener("click", () => dlgFoto.close());
}

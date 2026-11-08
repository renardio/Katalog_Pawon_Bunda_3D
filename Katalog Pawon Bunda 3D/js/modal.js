// Mengatur pembuka dan penutup pop-up (Modal)
const dlg = document.getElementById("dlg");

function fotoInfo(m) {
  if (m.foto) return '<img class="foto-info" src="' + esc(m.foto) + '" alt="Foto ' + esc(m.nama) + '">';
  return '<div class="foto foto-info" role="img" aria-label="Tempat foto ' + esc(m.nama) + '">[Foto ' + esc(m.nama) + ']</div>';
}

function bukaInfo(id) {
  const m = MENU.find(x => x.id === id);
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
}

// Menangani klik tombol "Informasi Produk" dan penutup pop-up
document.addEventListener("click", e => {
  const b = e.target.closest("[data-info]");
  if (b) bukaInfo(b.dataset.info);
  else if (e.target === dlg) dlg.close();
});

document.getElementById("dlg-tutup").addEventListener("click", () => dlg.close());


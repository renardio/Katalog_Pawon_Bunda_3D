// Fungsi pembuat elemen HTML untuk setiap kartu menu
function kartu(m) {
  const hias = m.tipe === "hias";
  const lencana = '<span class="kuning">Mulai dari ' + esc(m.mulai) + '</span>' +
    (m.min ? '<span>Minimum pembelian ' + esc(m.min) + '</span>' : '') +
    (m.po ? '<span>' + esc(m.po) + '</span>' : '') +
    (m.ukuran ? '<span>Ukuran ' + esc(m.ukuran) + '</span>' : '') +
    (m.custom ? '<span>Bisa custom</span>' : '');
  return '<article class="kartu ' + (hias ? "hias-kartu" : "makanan") + '" id="' + m.id + '">' +
    '<div class="foto" role="img" aria-label="Tempat foto ' + esc(m.nama) + '">[Foto ' + esc(m.nama) + ']</div>' +
    '<div><h3>' + esc(m.nama) + '</h3><p>' + esc(m.deskripsi) + '</p></div>' +
    '<div class="lencana">' + lencana + '</div>' +
    '<div class="aksi"><button type="button" class="btn btn-garis" data-info="' + m.id + '">Informasi produk</button><a class="btn btn-wa" href="' + waLink() + '" target="_blank" rel="noopener">' + (hias ? "Tanya via WhatsApp" : "Tanya via WhatsApp") + '</a></div>' +
    '</article>';
}

// Menampilkan seluruh kartu menu ke dalam satu grid gabungan
const elGrid = document.getElementById("grid-menu") || document.getElementById("grid-makanan");
if (elGrid) {
  elGrid.innerHTML =
    MENU.map(kartu).join("") +
    '<div class="kartu kartu-khusus"><h3>Ingin menu yang lain?</h3><p>Coba tanyakan kepada kami.</p>' +
    '<a class="btn btn-wa" href="' + waLink() + '" target="_blank" rel="noopener">Chat WhatsApp</a></div>';
}



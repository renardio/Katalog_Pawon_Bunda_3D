/* [NOTE] FUNGSI SISTEM (Secara umum tidak perlu diubah):
   Fungsi di bawah ini membuat link WhatsApp langsung ke nomor bisnis tanpa pesan otomatis,
   menyusun tampilan kartu produk, dan mengontrol pop-up dialog.
*/
const waLink = () => "https://wa.me/" + NOMOR_WA;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// Fungsi pembuat tabel paket di dalam pop-up
function tabel(paket) {
  return '<div class="paket">' + paket.map((p, i) =>
    (i ? '<div class="baris-pemisah"></div>' : '') +
    '<b>' + esc(p[0]) + '</b><span class="isi-paket">' + esc(p[1]) + '</span><b>' + esc(p[2]) + '</b>'
  ).join("") + '</div>';
}


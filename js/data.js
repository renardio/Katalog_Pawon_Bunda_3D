/* [NOTE] PENGATURAN NOMOR WA: Masukkan nomor WhatsApp bisnis Anda di sini (Gunakan format 62..., tanpa + atau spasi) */
const NOMOR_WA = "6287758311825";

/* [NOTE] DATA KETENTUAN MENU:
   - tipe: "makanan" atau "hias".
   - deskripsi: deskripsi singkat produk.
   - deskripsiTambahan: teks catatan/informasi tambahan di pop-up info.
   - foto: isi dengan nama file gambar jika ada, misal foto:"img/nasi-kotak.jpg".
   - Anda bisa menambahkan atau menghapus baris di bawah ini untuk memperbarui menu.
*/
const MENU = [
  {
    id: "nasi-kotak", nama: "Nasi Kotak", tipe: "makanan", deskripsi: "Nasi dengan aneka lauk dengan porsi lebih kenyang.", mulai: "15K/Box", min: "10", po: "PO H-4",
    foto: "img/nasi-kotak.webp",
    deskripsiTambahan:
      "Nasi kotak dengan pilihan lauk yang dapat diubah sesuai selera\nMulai dari Ayam Ungkep, Ayam Goreng, Acar Kuning, Mie Goreng, Sayur Oseng, Telur Rebus, Sambel Goreng dll."
  },

  {
    id: "rice-bowl", nama: "Rice Bowl", tipe: "makanan", deskripsi: "Nasi dengan lauk didalam mangkok dengan porsi pas.", mulai: "12K/Bowl", min: "10", po: "PO H-4",
    foto: "img/rice-bowl.webp",
    deskripsiTambahan: "Menggunakan mangkok kertas dengan ukuran mulai dari 500ml diisi dengan lauk sesuai selera mulai dari Ayam Geprek, Karage, Katsu, Black Pepper, Sosis dll."
  },

  {
    id: "snack", nama: "Snack", tipe: "makanan", deskripsi: "Jajanan satuan.", mulai: "2.5K/Pcs", min: "10", po: "PO H-4",
    foto: "img/snack.webp",
    deskripsiTambahan: "Snack atau jajanan pasar seperti Lupis, Klepon, Nagasari, Risol, Lemper, Gandos dll"
  },

  {
    id: "snack-box", nama: "Snack Box", tipe: "makanan", deskripsi: "Aneka snack dalam satu kotak.", mulai: "10K/Box", min: "10", po: "PO H-4",
    foto: "img/snack-box.webp",
    deskripsiTambahan: "Paket snack dengan banyak pilihan yang dapat diseuaikan"
  },

  {
    id: "tumpeng", nama: "Tumpeng", tipe: "makanan", deskripsi: "Nasi tumpeng lengkap dengan lauk yang sudah dihias sesuai keinginan", mulai: "150K", min: "1", po: "PO H-7",
    foto: "img/tumpeng.webp",
    deskripsiTambahan: "Tumpeng yang dapat desesuaikan dan dihias sesuai keinginan dengan banyak pilihan seperti Nasi Kuning, Ayam Goreng, Telur Balado, Perkedel, Kering Tempe dll"
  },

  {
    id: "tumpeng-snack", nama: "Tumpeng Snack", tipe: "makanan", deskripsi: "Aneka snack yang ditata diatas nampan dan dihias.", mulai: "100K", min: "1", po: "PO H-7",
    foto: "img/tumpeng-snack.webp",
    deskripsiTambahan: ""
  },

  {
    id: "puding-hias", nama: "Puding Hias", tipe: "hias", deskripsi: "Puding yang dihias sesuai keinginan.", mulai: "50K", min: "1", po: "PO H-7",
    foto: "img/puding-hias.webp",
    deskripsiTambahan: ""
  },

  {
    id: "brownies-hias", nama: "Brownies Hias", tipe: "hias", deskripsi: "Brownies yang dihias sesuai keinginan.", mulai: "110K", min: "1", po: "PO H-7",
    foto: "img/brownies-hias.webp",
    deskripsiTambahan: ""
  }
];


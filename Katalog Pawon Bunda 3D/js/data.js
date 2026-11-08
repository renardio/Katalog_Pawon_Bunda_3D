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
    id: "nasi-kotak", nama: "Nasi Kotak", tipe: "makanan", deskripsi: "Paket lengkap untuk acara.", mulai: "15K/Box", min: "10", po: "PO H-4",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "rice-bowl", nama: "Rice Bowl", tipe: "makanan", deskripsi: "Praktis dengan porsi pas.", mulai: "12K/Bowl", min: "10", po: "PO H-4",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "snack", nama: "Snack", tipe: "makanan", deskripsi: "Jajanan satuan untuk berbagai acara.", mulai: "2.5K/Pcs", min: "10", po: "PO H-4",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "snack-box", nama: "Snack Box", tipe: "makanan", deskripsi: "Aneka kue dalam satu kotak.", mulai: "10K/Box", min: "10", po: "PO H-4",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "tumpeng", nama: "Tumpeng", tipe: "makanan", deskripsi: "Tumpeng nasi lengkap dengan lauk pendamping.", mulai: "150K", min: "1", po: "PO H-7",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "tumpeng-snack", nama: "Tumpeng Snack", tipe: "makanan", deskripsi: "Aneka snack ditata di nampan dan dihias berbentuk tumpeng.", mulai: "100K", min: "1", po: "PO H-7",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "puding-hias", nama: "Puding Hias", tipe: "hias", deskripsi: "Puding dengan hiasan sesuai tema acara.", mulai: "50K", min: "1", po: "PO H-7",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  },

  {
    id: "brownies-hias", nama: "Brownies Hias", tipe: "hias", deskripsi: "Brownies dengan dekorasi sesuai tema.", mulai: "110K", min: "1", po: "PO H-7",
    deskripsiTambahan: "Ubah deskripsi tambahan"
  }
];


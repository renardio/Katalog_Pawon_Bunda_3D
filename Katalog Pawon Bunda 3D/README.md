# Panduan & Catatan Perubahan - Katalog Pawon Bunda 3D

Dokumen ini berisi rangkuman perubahan pemisahan kode (*code separation*) serta panduan lengkap jika Anda ingin mengubah menu, nomor WhatsApp, tampilan/warna, maupun teks website secara manual.

---

## 1. Rangkuman Perubahan

Sebelumnya, seluruh struktur website (HTML), tampilan visual (CSS), dan logika interaksi (JavaScript) berada dalam satu file tunggal: `Pawon Bunda 3D - Katalog Menu.html`.

Sekarang kode telah dipisahkan menjadi file-file modular:
- **HTML**: Menampung struktur dokumen dan teks statis.
- **CSS**: Menampung semua desain, warna, tata letak, dan responsivitas layar HP/komputer.
- **JavaScript (JS)**: Dipisahkan berdasarkan fungsinya ke dalam folder `js/` agar mudah dikelola dan diperbarui.

### Struktur File Saat Ini

```
Katalog Pawon Bunda 3D/
│
├── index.html                          # File HTML utama katalog (bisa dibuka langsung di browser / hosting)
├── README.md                           # Panduan ini
│
├── css/
│   └── style.css                       # Semua styling, variabel warna tema, & responsif
│
└── js/
    ├── data.js                         # Pengaturan nomor WA & daftar menu makanan/kue
    ├── utils.js                        # Fungsi pembantu: link WhatsApp, filter teks aman, tabel
    ├── menu.js                         # Fungsi pembuat kartu menu & pengisi grid menu (makanan & kue hias)
    ├── modal.js                        # Logika jendela pop-up detail produk (buka/tutup)
    └── whatsapp.js                     # Inisialisasi otomatis semua tombol chat WhatsApp
```

---

## 2. Panduan Mengubah Website Secara Manual

### A. Mengubah Nomor WhatsApp Bisnis
Buka file: **`js/data.js`**
Cari baris paling atas:
```javascript
const NOMOR_WA = "6289669076797";
```
Ganti nomor di dalam tanda kutip dengan nomor WhatsApp Anda.
> **Format Penting**: Awali dengan kode negara (misal `62` untuk Indonesia) **tanpa tanda plus (`+`), spasi, atau tanda strip (`-`)**. Contoh yang benar: `"628123456789"`.

---

### B. Menambah, Mengedit, atau Menghapus Menu
Buka file: **`js/data.js`**
Cari variabel `MENU = [ ... ]`. Setiap menu memiliki format objek JavaScript seperti contoh berikut:

```javascript
{
  id: "nasi-kotak",                  // ID unik (huruf kecil & tanda strip)
  nama: "Nasi Kotak",                // Nama menu yang tampil di kartu
  tipe: "makanan",                   // "makanan" atau "hias" (menentukan template chat WhatsApp)
  deskripsi: "Paket lengkap untuk acara.",
  deskripsiTambahan: "Catatan atau rincian tambahan di pop-up.", // Tampil di bawah deskripsi normal di pop-up info
  mulai: "Rp25.000",                 // Harga awal
  min: "20 box",                     // Jumlah minimal pemesanan
  custom: true,                      // true = muncul lencana "Bisa custom", false = tidak
  po: "PO H-2",                      // (Opsional) Keterangan Pre-Order
  ukuran: "20 cm",                   // (Opsional, khusus kue hias) Ukuran kue
  foto: "img/nasi-kotak.jpg",        // (Opsional) Path/lokasi foto produk jika ada
  paket: [                           // Daftar varian paket untuk tabel pop-up
    ["Paket Hemat", "Nasi + Ayam + Teh", "Rp20.000"],
    ["Paket Komplit", "Nasi + Ayam + Sayur + Sambal", "Rp25.000"]
  ],
  pilihan: "Pilihan lauk: Ayam Goreng, Ayam Bakar, Rendang" // Keterangan opsi tambahan
}
```

- **Untuk mengubah harga / nama:** Langsung ganti teks di dalam tanda kutip `""`.
- **Untuk menambah menu baru:** Salin salah satu blok kurung kurawal `{ ... }`, tambahkan tanda koma `,` di antara menu, lalu sesuaikan isinya.
- **Untuk menghapus menu:** Hapus satu blok `{ ... }` beserta tanda komanya.

---

### C. Mengubah Warna Tema & Font Tampilan
Buka file: **`css/style.css`**
Cari bagian `:root` di baris atas:
```css
:root {
  --hijau: #1F4D3A;        /* Warna hijau utama (header, footer, border kartu) */
  --kunyit: #E8A317;       /* Warna kuning aksen (lencana / nomor urut) */
  --krem: #FBF4E6;         /* Warna latar belakang halaman */
  --pasir: #EFE3C8;        /* Warna placeholder & garis batas */
  --tinta: #2B2118;        /* Warna teks utama */
  --tinta-lembut: #5E4F3F; /* Warna teks sekunder (deskripsi) */
  --wa: #1A7F37;           /* Warna hijau tombol WhatsApp */
}
```
Ubah kode hex warna (`#...`) sesuai dengan tema yang diinginkan. Perubahan warna di bagian `:root` ini otomatis mengubah seluruh elemen terkait di website.

---

### D. Mengubah Teks Slogan, Alamat, & Jam Buka
Buka file: **`index.html`**
Teks statis dapat diedit langsung pada bagian berikut:
- **Judul Tab & SEO (Baris 9 - 12):** `<title>` dan `<meta name="description">`.
- **Slogan & Hero Banner (Bagian `<section class="hero">`):**
  - Ganti `[Tagline: masakan rumahan, rasa bunda]`
  - Ganti `[Satu kalimat tentang pawon: bahan, cara memasak, dan area antar.]`
- **Area Antar & Minimal PO (Bagian `<div class="lencana">`):**
  - Ganti teks `Pre-order H-4` atau `Area antar: Ungaran`.
- **Footer Alamat & Kontak (Bagian `<footer class="kaki">`):**
  - Ganti `[Alamat pawon]`, `[Hari dan jam]`, `[No. WhatsApp]`, dan `[Instagram]`.

---

### E. Menambahkan Foto Produk Asli
1. Siapkan file gambar produk (misal: JPG/PNG/WebP). Disarankan membuat folder baru `img/` di dalam folder ini.
2. Letakkan file gambar di dalamnya, misalnya: `img/nasi-kotak.jpg`.
3. Buka **`js/data.js`**, tambahkan properti `foto` pada menu yang sesuai:
   ```javascript
   {
     id: "nasi-kotak",
     nama: "Nasi Kotak",
     foto: "img/nasi-kotak.jpg",
     ...
   }
   ```
4. Foto otomatis tampil di pop-up informasi produk.

---

## 3. Catatan Penting Saat Mengedit
- **Urutan Script:** Jika Anda menambah file JS baru di HTML, pastikan urutannya tetap benar:
  1. `data.js` (harus pertama, karena menyimpan data `NOMOR_WA` dan `MENU`)
  2. `utils.js` (menyediakan fungsi bantuan untuk file lain)
  3. `menu.js` (merender kartu menu ke halaman)
  4. `modal.js` (mengatur interaksi modal produk)
  5. `whatsapp.js` (menghubungkan tombol WA setelah elemen selesai dibuat)
- **Karakter Kutip:** Saat mengedit teks di dalam JavaScript, pastikan tidak menghapus tanda kutip `""` atau koma `,` pemisah antar-item agar tidak terjadi syntax error.


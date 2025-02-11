# **Hitung Umur Website**

Website sederhana yang memungkinkan pengguna untuk menghitung umur mereka berdasarkan tahun lahir yang dimasukkan. Proyek ini dibangun menggunakan **HTML**, **TailwindCSS**, dan **JavaScript**.

---

## **Fitur**
- Input tahun lahir untuk menghitung umur.
- Notifikasi jika tahun lahir tidak valid.
- Dark mode otomatis mengikuti pengaturan sistem pengguna.
- Desain responsif menggunakan TailwindCSS.

---

## **Struktur Direktori**
```
project-root/
├── index.html         # File utama HTML
└── assets/             # Folder aset
    ├── css/            # Folder untuk file CSS
    │   └── style.css   # File CSS
    ├── js/             # Folder untuk file JavaScript
    │   ├── script.js   # Logika penghitungan umur
    │   └── tailwind-config.js  # Konfigurasi Tailwind
    └── img/            # Tempat penyimpanan gambar (jika ada)
```

---

## **Teknologi yang Digunakan**
- **HTML5:** Struktur halaman web.
- **TailwindCSS:** Framework CSS untuk desain responsif dan modern.
- **JavaScript:** Logika penghitungan umur dan manipulasi DOM.

---

## **Cara Menjalankan Proyek**
1. Clone repository ini atau unduh file zip:
   ```bash
   git clone https://github.com/dani-techno/age-calculator.git
   ```
2. Buka file `index.html` di browser.

---

## **Penggunaan TailwindCSS**
Proyek ini menggunakan TailwindCSS melalui CDN:
```html
<script src="https://cdn.tailwindcss.com"></script>
<script src="./assets/js/tailwind-config.js"></script>
```

Jika ingin menggunakan konfigurasi lokal atau menambahkan custom configuration, edit file `tailwind-config.js`.

---

## **Cara Menghitung Umur**
1. Masukkan tahun lahir pada kolom input.
2. Klik tombol "Hitung Umur".
3. Website akan menampilkan umur Anda berdasarkan tahun saat ini.

---

## **Kontribusi**
Jika ingin berkontribusi pada proyek ini:
1. Fork repository ini.
2. Buat branch fitur baru:
   ```bash
   git checkout -b fitur-baru
   ```
3. Commit perubahan:
   ```bash
   git commit -m "Tambah fitur baru"
   ```
4. Push ke branch:
   ```bash
   git push origin fitur-baru
   ```
5. Buat pull request.

---

## **Lisensi**
Proyek ini menggunakan lisensi [MIT](LICENSE.txt). Silakan gunakan dan modifikasi sesuai kebutuhan.

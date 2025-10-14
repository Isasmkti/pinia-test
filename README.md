🍍 Pinia Vue 3 Dashboard — Student & Counter App

Aplikasi Vue 3 + Vite + Pinia + Composition API yang interaktif untuk mengelola daftar siswa, nilai, serta percobaan state management (counter, tema, dan asynchronous watcher).

🚀 Fitur Utama
🧩 1. Manajemen Siswa

Tambah siswa baru dengan tiga nilai.

Hitung rata-rata nilai otomatis.

Reset semua siswa.

Tambah siswa dummy.

Fetch data siswa dari API online (jsonplaceholder.typicode.com).

🔢 2. Counter Reactive

Counter yang dapat:

Increment / Decrement

Add 10 / Reduce 10

Reset ke 0

Pesan otomatis muncul:

⏳ Menunggu sepuluh... → saat counter < 10

🎉 Lebih dari sepuluh! → saat counter ≥ 10

🌗 3. Tema Gelap & Terang

Toggle Dark/Light Mode dengan transisi halus.

Warna latar & teks berubah dinamis berdasarkan state Pinia.

💡 4. Reactive Watcher (Async/Await)

Menggunakan async/await + watch() dari Vue untuk menunggu kondisi tertentu (counter >= 10).

Demonstrasi konsep asynchronous state listening di Vue.

🧱 Teknologi yang Digunakan
Kategori	Teknologi
Framework	Vue 3

Build Tool	Vite

State Management	Pinia

Styling	Scoped CSS + Gradien responsif
API	Fetch JSONPlaceholder
Bahasa	TypeScript Ready (bisa TS/JS)
🪄 Tangkapan Layar (Preview)

Tampilan Utama (Light Mode)

🎓 Daftar siswa, rata-rata nilai, dan counter dengan tombol interaktif.

Tampilan Gelap (Dark Mode)

🌙 Tema gelap elegan dengan animasi halus dan efek kaca (glassmorphism).

⚙️ Instalasi & Menjalankan Proyek
1️⃣ Clone repository
git clone https://github.com/username/pinia-vue-3-dashboard.git
cd pinia-vue-3-dashboard

2️⃣ Instal dependencies
npm install


⚠️ Jika ada konflik dependency, gunakan:

npm install --legacy-peer-deps

3️⃣ Jalankan server lokal
npm run dev


Buka browser di:

http://localhost:5173

🧠 Struktur Proyek
src/
├── components/
│   └── StudentList.vue
├── stores/
│   ├── counterStore.js
│   ├── studentStore.js
│   └── themeStore.js
├── App.vue
├── main.js
└── assets/
    └── pinia-logo.png

📘 Konsep yang Dipelajari

ref, computed, watch, async/await pada Vue 3

Reactive store menggunakan Pinia

Watcher asynchronous untuk menunggu kondisi tertentu

Desain responsif & transisi tema

Pemisahan logic (store) dan UI (component)

✨ To-Do (Pengembangan Lanjutan)

 Tambah validasi form input siswa

 Gunakan localStorage untuk menyimpan state

 Tambah grafik rata-rata nilai (misal pakai Chart.js atau Recharts)

 Tambah animasi pesan (fade-in atau bounce)

👨‍💻 Dibuat Oleh

Ubaidu Robi Isa
💬 “Belajar Pinia, Vue, dan asynchronous reactivity dengan cara yang fun!”
<script setup>
import { useStudentStore } from './stores/studentStore'
import { useThemeStore } from './stores/themeStore'
import { useCounterStore } from './stores/counterStore'
import { ref, watch } from 'vue'

const CounterStore = useCounterStore()
const themeStore = useThemeStore()
const studentStore = useStudentStore()

const name = ref('')
const score1 = ref('')
const score2 = ref('')
const score3 = ref('')
const message = ref('')

const addStudent = () => {
  if (!name.value) return
  studentStore.addStudent({
    name: name.value,
    scores: [Number(score1.value), Number(score2.value), Number(score3.value)]
  })
  name.value = score1.value = score2.value = score3.value = ''
}

// async: tunggu counter sampai >= 10
async function waitUntilCountIsTen() {
   message.value = '⏳ Menunggu sepuluh...'
  await new Promise(resolve => {
    const stop = watch(
      () => CounterStore.counter,
      (newVal) => {
        if (newVal >= 10) {
          resolve()
          stop()
        }
      }
    )
  })
  message.value = '🎉 Lebih dari sepuluh!'
}

waitUntilCountIsTen()
</script>

<template>
  <div :class="['container', themeStore.isDark ? 'dark' : 'light']">
    <div class="card">
      <div class="header">
        <img
          src="https://pinia.vuejs.org/logo.svg"
          alt="Pinia logo"
          class="logo"
        />
        <h1>Pinia Testing</h1>
      </div>

      <h2>🎓 Daftar Siswa</h2>

      <ul>
        <li v-for="s in studentStore.students" :key="s.name">
          👤 <strong>{{ s.name }}</strong> — 📊 {{ s.scores.join(', ') }}
        </li>
      </ul>

      <div class="input-group">
        <input v-model="name" placeholder="Nama siswa" />
        <input v-model="score1" placeholder="Nilai 1" type="number" />
        <input v-model="score2" placeholder="Nilai 2" type="number" />
        <input v-model="score3" placeholder="Nilai 3" type="number" />
      </div>

      <div class="button-group">
        <button @click="addStudent">➕ Tambah</button>
        <button @click="studentStore.resetStudents()">♻️ Reset</button>
        <button @click="studentStore.addStudent({ name: 'Tono', scores: [90, 92, 88] })">🎯 Dummy</button>
        <button @click="studentStore.fetchStudents()">🌐 Fetch Online</button>
      </div>

      <p class="average">
        📈 <strong>Rata-rata:</strong> {{ studentStore.getAverage }}
      </p>

      <button class="theme-btn" @click="themeStore.toggleTheme()">
        {{ themeStore.isDark ? '🌙 Dark Mode' : '☀️ Light Mode' }}
      </button>

      <div class="counter-section">
        <p>🔢 Counter: <strong>{{ CounterStore.counter }}</strong></p>
        <p>✨ Double: <strong>{{ CounterStore.doubleCounter }}</strong></p>
        <p>👌 Message: {{ message }}</p>

        <p>
          💭 {{
            CounterStore.doubleCounter > 100
              ? '🚀 Terlalu Banyak!'
              : '🧩 Masih Sedikit'
          }}
        </p>

        <div class="button-group">
          <button @click="CounterStore.addCounter()">🔼 +1</button>
          <button @click="CounterStore.reduceCounter()">🔽 -1</button>
          <button @click="CounterStore.addTen()">🔟 +10</button>
          <button @click="CounterStore.reduceTen()">➖ -10</button>
          <button @click="CounterStore.resetCounter()">🔁 Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Fredoka', sans-serif;
}
/* 🌈 Tema dasar */
.container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.8s ease, color 0.5s ease;
  padding: 20px;
}

.light {
  background: linear-gradient(135deg, #f9d8ff, #c7eaff, #e6ffe7);
  color: #222;
}

.dark {
  background: linear-gradient(135deg, #0f0f0f, #232323, #3a3a3a);
  color: #f5f5f5;
}

/* 📦 Kartu utama */
.card {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 30px 20px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  animation: fadeIn 1s ease;
}

/* 🪶 Header logo */
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.logo {
  width: 45px;
  height: 45px;
}

/* 🎓 Daftar siswa */
ul {
  list-style: none;
  padding: 0;
  margin-bottom: 15px;
  text-align: left;
}

li {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  padding: 8px 12px;
  margin-bottom: 8px;
  font-size: 0.95rem;
  transition: transform 0.2s ease, background 0.3s ease;
}

li:hover {
  transform: translateY(-3px);
  background: rgba(255, 255, 255, 0.5);
}

/* 📥 Input group */
.input-group {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  margin: 10px 0 20px;
}

input {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 0.9rem;
}

/* 🔘 Tombol */
.button-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
  margin: 10px 0;
}

button {
  background: linear-gradient(90deg, #6a5acd, #00bcd4);
  border: none;
  color: white;
  font-weight: bold;
  padding: 8px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  transform: translateY(-2px);
  background: linear-gradient(90deg, #7a6cf1, #1dd9f5);
}

/* 🌗 Tombol tema */
.theme-btn {
  margin: 15px 0;
  background: linear-gradient(90deg, #ff9800, #ff5722);
}

.theme-btn:hover {
  background: linear-gradient(90deg, #ffc107, #ff7043);
}

/* 📱 Responsif */
@media (max-width: 480px) {
  .card {
    padding: 20px 15px;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  li {
    font-size: 0.85rem;
  }

  button {
    padding: 6px 10px;
    font-size: 0.85rem;
  }

  .input-group {
    grid-template-columns: 1fr 1fr;
  }
}

/* ✨ Animasi */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(15px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>

import { defineStore } from 'pinia';

export const useStudentStore = defineStore('student', {
    state: () => ({
        students: [
            { name: 'Budi', scores: [80, 90, 85] },
            { name: 'Siti', scores: [75, 95, 88] },
            { name: 'Saya', scores: [100, 100, 100] }
        ]
    }),
    persist: true,
    getters: {
        // Hitung rata-rata nilai semua siswa
        getAverage: (state) => {
            const allScores = state.students.flatMap(s => s.scores)
            const total = allScores.reduce((sum, n) => sum + n, 0)
            const avg = total / allScores.length
            return avg.toFixed(2)
        },
        countHighScores: (state) => {
            // gabungkan semua nilai siswa jadi satu array
            const allScores = state.students.flatMap(s => s.scores)
            // filter nilai yang >= 90
            const highScores = allScores.filter(n => n >= 90)
            // hitung berapa banyak
            return highScores.length
        }
        ,
    },
    actions: {

        removeStudent(studentName) {
            this.students = this.students.filter(s => s.name !== studentName);
        },
        async fetchStudents() {
            const data = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await data.json()
            this.students = users.slice(0, 3).map(u => ({
                name: u.name,
                scores: [80, 85, 90]
            }))
        },
        addStudent(newStudent) {
            this.students.push(newStudent)
        },

        resetStudents() {
            this.students = []
        }

    },
});

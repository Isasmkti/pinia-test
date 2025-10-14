import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        counter: 0
    }),
    getters: {
        doubleCounter: (state) => state.counter * 2
    },
    actions: {
        addCounter() {
            this.counter++
        },
        reduceCounter() {
            this.counter--
        },
        resetCounter() {
            this.counter = 0
        },
        addTen(){
            this.counter += 10
        },
        reduceTen(){
            this.counter -= 10
        },
       
    },
});

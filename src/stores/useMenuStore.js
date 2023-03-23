import { defineStore } from "pinia"

export const useMenuStore = defineStore('menu', {
    state: () => ({ isSwipable: false }),
    getters: {
        doubleCount: (state) => state.count * 2,
    },
    actions: {
        setSwipable() {
            this.isSwipable = true
        }
    },

})
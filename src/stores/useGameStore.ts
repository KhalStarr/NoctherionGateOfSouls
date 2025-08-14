import { defineStore } from "pinia";
import { ref } from "vue";

const useGameStore = defineStore(
    "game",
    () => {
        const buffs = ref(0);
        const domain = ref("Shadow Realm");
        const rank = ref("Apprentice");
        const reputation = ref(0);
        const souls = ref(0);
        const soulsPerClick = ref(1);
        const soulsPerSecond = ref(0);

        function addSoulsByClick() {
            souls.value += soulsPerClick.value;
        }

        return {
            addSoulsByClick,
            buffs,
            domain,
            rank,
            reputation,
            souls,
            soulsPerClick,
            soulsPerSecond,
        };
    },
    {
        persist: true,
    },
);

export default useGameStore;

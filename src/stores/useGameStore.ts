import { defineStore } from "pinia";
import { ref } from "vue";
import boxDefinitions from "@/data/boxDefinitions.ts";
import domainDefinitions from "@/data/domainDefinitions.ts";
import errandDefinitions from "@/data/errandDefinitions.ts";
import hirelingRitualDefinitions from "@/data/hirelingRitualDefinitions.ts";
import keyDefinitions from "@/data/keyDefinitions.ts";
import personalRitualDefinitions from "@/data/personalRitualDefinitions.ts";
import relicDefinitions from "@/data/relicDefinitions.ts";
import soulDefinitions from "@/data/soulDefinitions.ts";

const useGameStore = defineStore(
    "game",
    () => {
        const definitions = ref({
            boxes: boxDefinitions,
            domains: domainDefinitions,
            errands: errandDefinitions,
            hirelingRituals: hirelingRitualDefinitions,
            keys: keyDefinitions,
            personalRituals: personalRitualDefinitions,
            relics: relicDefinitions,
            souls: soulDefinitions,
        });

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
            definitions,
            domain,
            rank,
            reputation,
            souls,
            soulsPerClick,
            soulsPerSecond,
        };
    },
    {
        persist: {
            omit: ["definitions"],
        },
    },
);

export default useGameStore;

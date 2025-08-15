import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import boxDefinitions from "@/data/boxDefinitions.ts";
import domainDefinitions from "@/data/domainDefinitions.ts";
import errandDefinitions from "@/data/errandDefinitions.ts";
import hirelingRitualDefinitions from "@/data/hirelingRitualDefinitions.ts";
import keyDefinitions from "@/data/keyDefinitions.ts";
import personalRitualDefinitions from "@/data/personalRitualDefinitions.ts";
import relicDefinitions from "@/data/relicDefinitions.ts";
import soulDefinitions from "@/data/soulDefinitions.ts";
import SoulIdentifier from "@/parsers/identifiers/SoulIdentifier.ts";
import DomainIdentifier from "@/parsers/identifiers/DomainIdentifier.ts";

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

        const reputation = ref(25);
        const souls = reactive({
            [SoulIdentifier.enum.unbound]: 0,
            [SoulIdentifier.enum.bound]: 0,
            [SoulIdentifier.enum.spiteful]: 0,
            [SoulIdentifier.enum.hollow]: 0,
            [SoulIdentifier.enum.forged]: 0,
            [SoulIdentifier.enum.husked]: 0,
        });

        const domainIdentifier = ref(DomainIdentifier.enum.cerberus);
        const domain = computed(() => {
            const definition = domainDefinitions.find(
                (definition) =>
                    definition.identifier === domainIdentifier.value,
            );

            if (!definition) {
                throw new Error("Domain definition not found");
            }

            return definition;
        });

        const sortedRanks = computed(() =>
            domain.value.ranks.sort((rankA, rankB) => {
                return rankA.targetReputation - rankB.targetReputation;
            }),
        );
        const currentRankIndex = computed(() => {
            console.log(sortedRanks.value);
            return sortedRanks.value.findIndex(
                (rank) => rank.targetReputation > reputation.value,
            );
        });
        const currentRank = computed(() => {
            return sortedRanks.value[currentRankIndex.value];
        });
        const nextRank = computed(() => {
            return sortedRanks.value[currentRankIndex.value + 1];
        });
        const previousRank = computed(() => {
            return sortedRanks.value[currentRankIndex.value - 1];
        });
        const rankCount = computed(() => sortedRanks.value.length);
        const rankProgress = computed(() => {
            const previousTarget = previousRank.value?.targetReputation ?? 0;
            const rankAmount =
                currentRank.value.targetReputation - previousTarget;

            return (reputation.value - previousTarget) / rankAmount;
        });

        const buffs = ref(0);
        const tunedSoulType = ref(SoulIdentifier.enum.unbound);
        const soulsPerClick = ref(1);
        const soulsPerSecond = ref(0);

        function addSoulsByClick() {
            souls[SoulIdentifier.enum.unbound] += soulsPerClick.value;
        }

        return {
            addSoulsByClick,
            buffs,
            currentRank,
            currentRankIndex,
            definitions,
            domain,
            nextRank,
            previousRank,
            rankCount,
            rankProgress,
            reputation,
            souls,
            soulsPerClick,
            soulsPerSecond,
            tunedSoulType,
        };
    },
    {
        persist: {
            omit: ["definitions"],
        },
    },
);

export default useGameStore;

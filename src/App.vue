<script setup lang="ts">
import useGameStore from "@/stores/useGameStore.ts";
import { useColorMode } from "@vueuse/core";
import { computed } from "vue";
import type SoulIdentifier from "@/parsers/identifiers/SoulIdentifier.ts";

const gameStore = useGameStore();

const colorMode = computed(() => gameStore.tunedSoulType);

useColorMode<SoulIdentifier>({
    attribute: "data-tune",
    initialValue: colorMode,
    modes: {
        unbound: "unbound",
        bound: "bound",
        spiteful: "spiteful",
        hollow: "hollow",
        forged: "forged",
        husked: "husked",
    },
    storageKey: null,
});
// run your game loop here
</script>

<template>
    <RouterView />
</template>

<script setup lang="ts">
import Gate from "@/components/Gate.vue";
import useGameStore from "@/stores/useGameStore.ts";

const gameStore = useGameStore();
</script>

<template>
    <main class="flex flex-col flex-1 items-center">
        <div class="flex flex-col flex-3 items-center justify-center">
            <Gate />
        </div>

        <div class="flex flex-col flex-2 items-center justify-center">
            <!-- Call to Action -->
            <p
                :class="[
                    'gate-call',
                    gameStore.tunedSoulType,
                    'font-display',
                    'small-caps',
                    'text-xl',
                    'md:text-2xl',
                    'text-center',
                    'mt-24',
                    'tracking-wide',
                    'animate-pulse-slow',
                ]"
                style="font-variant: small-caps"
            >
                {{ gameStore.domain.gateCall }}
            </p>
        </div>
    </main>
</template>

<style scoped>
.gate-call {
    &.unbound {
        color: var(--color-unbound-600);
    }
    &.bound {
        color: var(--color-bound-600);
    }
    &.spiteful {
        color: var(--color-spiteful-600);
    }
    &.hollow {
        color: var(--color-hollow-600);
    }
    &.forged {
        color: var(--color-forged-600);
    }
    &.husked {
        color: var(--color-husked-600);
    }
}
</style>

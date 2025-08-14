<script setup lang="ts">
import useGameStore from "@/stores/useGameStore.ts";

const gameStore = useGameStore();

function onClickGate() {
    gameStore.addSoulsByClick();
}
</script>

<template>
    <div
        @click="onClickGate"
        class="gate relative aspect-square h-60 rounded-full border-2 border-red-600/25 cursor-pointer transform duration-300 hover:scale-105 active:scale-95"
    >
        <div
            class="absolute inset-3 animate-spin rounded-full border border-dashed border-zinc-100/10"
        />
        <div
            class="absolute inset-9 animate-spin rounded-full border border-zinc-100/10"
        />
        <div class="absolute inset-0 rounded-full animate-spin-slow">
            <div
                class="absolute -top-2 -left-1 w-2 h-2 bg-purple-600/25 rounded-full animate-ping"
                style="animation-delay: 0.66s"
            ></div>
            <div
                class="absolute -top-2 -right-1 w-1 h-1 bg-red-600/25 rounded-full animate-ping"
                style="animation-delay: 2.125s"
            ></div>
            <div
                class="absolute -bottom-1 -left-2 w-2 h-2 bg-red-600/50 rounded-full animate-ping"
                style="animation-delay: 1.33s"
            ></div>
            <div
                class="absolute -bottom-1 -right-2 w-1 h-1 bg-purple-600/50 rounded-full animate-ping"
                style="animation-delay: 0.25s"
            ></div>
        </div>
        <div class="absolute inset-0 rounded-full animate-spin-slow-reverse">
            <div
                class="absolute -top-2 -left-1 w-2 h-2 bg-purple-600/25 rounded-full animate-ping"
            ></div>
            <div
                class="absolute -top-2 -right-1 w-1 h-1 bg-red-600/25 rounded-full animate-ping"
                style="animation-delay: 0.75s"
            ></div>
            <div
                class="absolute -bottom-1 -left-2 w-2 h-2 bg-red-600/50 rounded-full animate-ping"
                style="animation-delay: 1.66s"
            ></div>
            <div
                class="absolute -bottom-1 -right-2 w-1 h-1 bg-purple-600/50 rounded-full animate-ping"
                style="animation-delay: 0.45s"
            ></div>
        </div>
    </div>
</template>

<style scoped>
.gate {
    background:
        radial-gradient(
            40% 40% at 50% 50%,
            color-mix(in oklch, var(--color-red-600), transparent 75%) 0%,
            color-mix(in oklch, var(--color-purple-600), transparent 95%) 55%,
            transparent 60%
        ),
        conic-gradient(
            from 0deg,
            color-mix(in oklch, var(--color-purple-950), transparent 90%) 0deg,
            color-mix(in oklch, var(--color-red-950), transparent 90%) 15% 35%,
            color-mix(in oklch, var(--color-purple-950), transparent 90%) 50%,
            color-mix(in oklch, var(--color-red-950), transparent 90%) 65% 85%,
            color-mix(in oklch, var(--color-purple-950), transparent 90%) 100%
        );
    box-shadow:
        inset 0 0 60px
            color-mix(in oklch, var(--color-red-950), transparent 75%),
        inset 0 0 120px
            color-mix(in oklch, var(--color-purple-950), transparent 75%),
        0 0 20px color-mix(in oklch, var(--color-red-950), transparent 65%),
        0 0 60px color-mix(in oklch, var(--color-purple-950), transparent 75%);
}
</style>

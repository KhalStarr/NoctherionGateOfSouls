<script setup lang="ts">
import useGameStore from "@/stores/useGameStore.ts";

const gameStore = useGameStore();
</script>

<template>
    <div
        class="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4"
    >
        <div class="flex flex-col items-center">
            <span class="font-display leading-none">
                {{ gameStore.domain.name }}
            </span>
            <span class="text-xs text-zinc-400">
                Rank {{ gameStore.currentRankIndex + 1 }}/{{
                    gameStore.rankCount
                }}
            </span>
        </div>
        <div class="flex flex-col gap-1">
            <div class="bg-zinc-950 h-2 rounded-full overflow-clip">
                <div
                    :class="[
                        gameStore.tunedSoulType,
                        'progress',
                        'h-full',
                        'rounded-full',
                    ]"
                    :style="`width: ${gameStore.rankProgress * 100}%`"
                ></div>
            </div>
            <div class="flex items-center justify-between px-2">
                <span class="font-display text-sm">
                    {{ gameStore.currentRank.name }}
                </span>
                <span class="font-display text-zinc-400">
                    {{ gameStore.reputation }} /
                    {{ gameStore.currentRank.targetReputation }} Rep
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.progress {
    background-color: var(--color-tune-600);
    background-image: linear-gradient(
        to right,
        var(--color-tune-600) 0%,
        var(--color-tune-600) 75%,
        var(--color-next-600) 100%
    );
}
</style>

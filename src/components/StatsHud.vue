<script setup lang="ts">
import useGameStore from "@/stores/useGameStore.ts";

const gameStore = useGameStore();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
            class="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4"
        >
            <span class="font-bold text-xl">
                {{ gameStore.souls.toLocaleString() }}
            </span>
            <div class="flex items-center gap-4">
                <div class="flex items-center gap-2">
                    <div
                        class="flex items-center justify-center aspect-square h-6 text-purple-400 text-xs rounded-md border border-zinc-700 bg-zinc-800"
                    >
                        <i
                            class="fa-duotone fa-light fa-computer-mouse-button-left"
                        ></i>
                        <span class="sr-only">Souls per Click</span>
                    </div>
                    <span class="text-sm">
                        {{ gameStore.soulsPerClick.toLocaleString() }}
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <div
                        class="flex items-center justify-center aspect-square h-6 text-red-400 text-xs rounded-md border border-zinc-700 bg-zinc-800"
                    >
                        <i class="fa-duotone fa-light fa-hourglass-half"></i>
                        <span class="sr-only">Souls per Second</span>
                    </div>
                    <span class="text-sm">
                        {{ gameStore.soulsPerSecond.toLocaleString() }}
                    </span>
                </div>
            </div>
        </div>
        <div
            class="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4"
        >
            <div class="flex flex-col items-start gap-1">
                <span class="font-bold leading-none text-lg">
                    {{ gameStore.domain }}
                </span>
                <span class="font-medium leading-none text-sm text-zinc-400">
                    {{ gameStore.rank }}
                </span>
            </div>
            <div class="flex flex-1 items-center">
                <div class="h-2 w-full rounded-full bg-zinc-950">
                    <div class="bg-red-900 h-full w-1/5 rounded-full" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>

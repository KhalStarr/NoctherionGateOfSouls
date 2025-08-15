<script setup lang="ts">
import useGameStore from "@/stores/useGameStore.ts";
import SoulStats from "@/components/stats/SoulStats.vue";
import DomainStats from "@/components/stats/DomainStats.vue";

const gameStore = useGameStore();
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <SoulStats />
        <DomainStats />
        <!--        <div-->
        <!--            class="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4"-->
        <!--        >-->
        <!--            <div class="flex flex-col items-start gap-1">-->
        <!--                <span class="font-bold leading-none text-lg">-->
        <!--                    {{ gameStore.domain }}-->
        <!--                </span>-->
        <!--                <span class="font-medium leading-none text-sm text-zinc-400">-->
        <!--                    {{ gameStore.rank }}-->
        <!--                </span>-->
        <!--            </div>-->
        <!--            <div class="flex flex-1 items-center">-->
        <!--                <div class="h-2 w-full rounded-full bg-zinc-950">-->
        <!--                    <div class="bg-red-900 h-full w-1/5 rounded-full" />-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<style scoped></style>

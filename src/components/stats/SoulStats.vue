<script setup lang="ts">
import soulDefinitions from "@/data/soulDefinitions.ts";
import useGameStore from "@/stores/useGameStore.ts";
import { computed } from "vue";

const gameStore = useGameStore();

const tunedSoulDefinition = computed(() =>
    soulDefinitions.find(
        (definition) => definition.identifier === gameStore.tunedSoulType,
    ),
);
</script>

<template>
    <div
        class="flex flex-col gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-4"
    >
        <div v-if="tunedSoulDefinition" class="flex flex-col items-center">
            <span class="font-display leading-none">
                Tuned for
                <em class="not-italic font-bold text-tune-600">
                    {{ tunedSoulDefinition.name }}
                </em>
                souls
            </span>
            <div class="flex items-center gap-2">
                <span class="text-xs text-zinc-400">
                    +{{ gameStore.soulsPerClick.toLocaleString() }} per click
                </span>
                <span class="text-xs text-zinc-400">
                    +{{ gameStore.soulsPerSecond.toLocaleString() }} per second
                </span>
            </div>
        </div>
        <div
            class="flex-1 grid grid-cols-6 place-items-center border-t border-zinc-800"
        >
            <div
                :class="[
                    soulDefinition.identifier,
                    'flex',
                    'gap-2',
                    'items-center',
                ]"
                v-for="soulDefinition in soulDefinitions"
                :key="soulDefinition.identifier"
            >
                <div>
                    <i
                        :class="[
                            'fa-fw',
                            'fa-duotone',
                            'fa-light',
                            soulDefinition.icon,
                        ]"
                    ></i>
                    <span class="sr-only"> {{ soulDefinition.name }} </span>
                </div>
                <span class="text-sm">
                    {{
                        gameStore.souls[
                            soulDefinition.identifier
                        ]?.toLocaleString()
                    }}
                </span>
            </div>
        </div>
        <!--        <span class="font-bold text-xl">-->
        <!--            {{ gameStore.souls.toLocaleString() }}-->
        <!--        </span>-->
        <!--        <div class="flex items-center gap-4">-->
        <!--            <div class="flex items-center gap-2">-->
        <!--                <div-->
        <!--                    class="flex items-center justify-center aspect-square h-6 text-purple-400 text-xs rounded-md border border-zinc-700 bg-zinc-800"-->
        <!--                >-->
        <!--                    <i-->
        <!--                        class="fa-duotone fa-light fa-computer-mouse-button-left"-->
        <!--                    ></i>-->
        <!--                    <span class="sr-only">Souls per Click</span>-->
        <!--                </div>-->
        <!--                <span class="text-sm">-->
        <!--                    {{ gameStore.soulsPerClick.toLocaleString() }}-->
        <!--                </span>-->
        <!--            </div>-->
        <!--            <div class="flex items-center gap-2">-->
        <!--                <div-->
        <!--                    class="flex items-center justify-center aspect-square h-6 text-red-400 text-xs rounded-md border border-zinc-700 bg-zinc-800"-->
        <!--                >-->
        <!--                    <i class="fa-duotone fa-light fa-hourglass-half"></i>-->
        <!--                    <span class="sr-only">Souls per Second</span>-->
        <!--                </div>-->
        <!--                <span class="text-sm">-->
        <!--                    {{ gameStore.soulsPerSecond.toLocaleString() }}-->
        <!--                </span>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<style scoped>
.unbound {
    & > span > em {
        color: var(--color-unbound-600);
    }
    & > div:has(i) {
        color: var(--color-unbound-600);
    }
}
.bound {
    & > span > em {
        color: var(--color-bound-600);
    }
    & > div:has(i) {
        color: var(--color-bound-600);
    }
}
.spiteful {
    & > span > em {
        color: var(--color-spiteful-600);
    }
    & > div:has(i) {
        color: var(--color-spiteful-600);
    }
}
.hollow {
    & > span > em {
        color: var(--color-hollow-600);
    }
    & > div:has(i) {
        color: var(--color-hollow-600);
    }
}
.forged {
    & > span > em {
        color: var(--color-forged-600);
    }
    & > div:has(i) {
        color: var(--color-forged-600);
    }
}
.husked {
    & > span > em {
        color: var(--color-husked-600);
    }
    & > div:has(i) {
        color: var(--color-husked-600);
    }
}
</style>

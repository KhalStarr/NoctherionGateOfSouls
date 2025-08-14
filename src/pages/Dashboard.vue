<script setup lang="ts">
import { ref } from "vue";

// Mock data for display (no functionality as requested)
const gameStats = ref({
    souls: 1247,
    spc: 15,
    sps: 83,
    buffs: 3,
    domain: "Shadow Realm",
    rank: "Apprentice",
    reputation: 892,
});
</script>

<template>
    <div class="min-h-screen text-white flex flex-col">
        <!-- Main Content -->
        <div class="flex-1 flex flex-col items-center justify-center p-8">
            <div
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
                <div
                    class="absolute inset-0 rounded-full animate-spin-slow-reverse"
                >
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

            <!-- Call to Action -->
            <p
                class="font-display small-caps text-xl md:text-2xl text-purple-300 text-center mt-24 tracking-wide animate-pulse-slow"
                style="font-variant: small-caps"
            >
                Tap the gate. Cerberus is Listening.
            </p>
        </div>

        <!-- Stats Panel -->
        <div class="bg-zinc-950 border-t border-zinc-900 p-6">
            <div class="max-w-6xl mx-auto">
                <div
                    class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
                >
                    <!-- Souls -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-2xl font-bold text-red-400 mb-1">
                            {{ gameStats.souls.toLocaleString() }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            Souls
                        </div>
                    </div>

                    <!-- SPC -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-2xl font-bold text-red-400 mb-1">
                            {{ gameStats.spc }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            SPC
                        </div>
                    </div>

                    <!-- SPS -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-2xl font-bold text-red-400 mb-1">
                            {{ gameStats.sps }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            SPS
                        </div>
                    </div>

                    <!-- Buffs -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-2xl font-bold text-red-400 mb-1">
                            {{ gameStats.buffs }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            Buffs
                        </div>
                    </div>

                    <!-- Domain -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div
                            class="text-lg font-bold text-red-400 mb-1 truncate"
                        >
                            {{ gameStats.domain }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            Domain
                        </div>
                    </div>

                    <!-- Rank -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-lg font-bold text-red-400 mb-1">
                            {{ gameStats.rank }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            Rank
                        </div>
                    </div>

                    <!-- Reputation -->
                    <div
                        class="bg-zinc-900/60 border border-zinc-600/50 rounded-lg p-4 text-center hover:border-red-500/50 transition-colors"
                    >
                        <div class="text-2xl font-bold text-red-400 mb-1">
                            {{ gameStats.reputation.toLocaleString() }}
                        </div>
                        <div
                            class="text-sm text-zinc-400 uppercase tracking-wide"
                        >
                            Reputation
                        </div>
                    </div>
                </div>
            </div>
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

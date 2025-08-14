<script setup lang="ts">
import Gate from "@/components/Gate.vue";
import StatsHud from "@/components/StatsHud.vue";
</script>

<template>
    <div class="min-h-screen bg-black text-white flex flex-col">
        <!-- Header with Mini HUD -->
        <header
            class="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60"
        >
            <div class="max-w-6xl mx-auto px-4 py-3">
                <!-- Optional: place your header content/title here -->

                <!-- Mini HUD -->
                <StatsHud />
            </div>
        </header>

        <!-- Main Content -->
        <main class="flex flex-col flex-1 items-center">
            <div class="flex flex-col flex-3 items-center justify-center">
                <Gate />
            </div>

            <div class="flex flex-col flex-2 items-center justify-center">
                <!-- Call to Action -->
                <p
                    class="font-display small-caps text-xl md:text-2xl text-purple-300 text-center mt-24 tracking-wide animate-pulse-slow"
                    style="font-variant: small-caps"
                >
                    Tap the gate. Cerberus is Listening.
                </p>
            </div>
        </main>
    </div>
</template>

<style scoped></style>

<script setup lang="ts">
import Gate from "@/components/Gate.vue";
</script>

<template>
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
</template>

<style scoped></style>

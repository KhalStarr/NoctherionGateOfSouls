<script setup lang="ts">
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

        <RouterView />

        <nav
            class="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60"
        >
            <div class="flex gap-2 items-center justify-center p-4">
                <RouterLink
                    class="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 hover:bg-red-800 hover:border-red-700 [&.router-link-exact-active]:bg-red-900 [&.router-link-exact-active]:border-red-800 [&.router-link-exact-active]:hover:bg-red-800 [&.router-link-exact-active]:hover:border-red-700"
                    :to="{ name: 'threshold-gate' }"
                >
                    <i class="fa-duotone fa-light fa-circle-dot"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Threshold Gate
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 hover:bg-red-800 hover:border-red-700 [&.router-link-exact-active]:bg-red-900 [&.router-link-exact-active]:border-red-800 [&.router-link-exact-active]:hover:bg-red-800 [&.router-link-exact-active]:hover:border-red-700"
                    :to="{ name: 'forge' }"
                >
                    <i class="fa-duotone fa-light fa-fire-flame"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Forge
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 hover:bg-red-800 hover:border-red-700 [&.router-link-exact-active]:bg-red-900 [&.router-link-exact-active]:border-red-800 [&.router-link-exact-active]:hover:bg-red-800 [&.router-link-exact-active]:hover:border-red-700"
                    :to="{ name: 'black-market' }"
                >
                    <i class="fa-duotone fa-light fa-briefcase"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Black Market
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 hover:bg-red-800 hover:border-red-700 [&.router-link-exact-active]:bg-red-900 [&.router-link-exact-active]:border-red-800 [&.router-link-exact-active]:hover:bg-red-800 [&.router-link-exact-active]:hover:border-red-700"
                    :to="{ name: 'rituals' }"
                >
                    <i class="fa-duotone fa-light fa-droplet"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Rituals
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 hover:bg-red-800 hover:border-red-700 [&.router-link-exact-active]:bg-red-900 [&.router-link-exact-active]:border-red-800 [&.router-link-exact-active]:hover:bg-red-800 [&.router-link-exact-active]:hover:border-red-700"
                    :to="{ name: 'ascension' }"
                >
                    <i class="fa-duotone fa-light fa-moon"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Ascension
                    </span>
                </RouterLink>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
import StatsHud from "@/components/StatsHud.vue";
</script>

<template>
    <div class="min-h-screen bg-black text-white flex flex-col">
        <!-- Header with Mini HUD -->
        <header
            class="border-b border-zinc-900 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 sticky top-0 z-40"
        >
            <div class="container mx-auto px-4 py-3">
                <!-- Optional: place your header content/title here -->

                <!-- Mini HUD -->
                <StatsHud />
            </div>
        </header>

        <RouterView />

        <nav
            class="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60 sticky bottom-0 z-40"
        >
            <div
                class="container mx-auto grid grid-cols-5 gap-2 items-center justify-center p-4"
            >
                <RouterLink
                    class="flex flex-col items-center gap-1 font-display rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 transform duration-150 hover:inset-shadow-sm hover:inset-shadow-tune-600/50 hover:border-tune-700 active:inset-shadow-tune-600/75 [&.router-link-exact-active]:border-tune-600/25 [&.router-link-exact-active]:shadow-sm [&.router-link-exact-active]:shadow-next-600/50"
                    :to="{ name: 'threshold-gate' }"
                >
                    <i class="text-2xl fa-duotone fa-light fa-dungeon"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Gate
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex flex-col items-center gap-1 font-display rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 transform duration-150 hover:inset-shadow-sm hover:inset-shadow-tune-600/50 hover:border-tune-700 active:inset-shadow-tune-600/75 [&.router-link-exact-active]:border-tune-600/25 [&.router-link-exact-active]:shadow-sm [&.router-link-exact-active]:shadow-next-600/50"
                    :to="{ name: 'forge' }"
                >
                    <i class="text-2xl fa-duotone fa-light fa-fire-flame"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Forge
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex flex-col items-center gap-1 font-display rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 transform duration-150 hover:inset-shadow-sm hover:inset-shadow-tune-600/50 hover:border-tune-700 active:inset-shadow-tune-600/75 [&.router-link-exact-active]:border-tune-600/25 [&.router-link-exact-active]:shadow-sm [&.router-link-exact-active]:shadow-next-600/50"
                    :to="{ name: 'rituals' }"
                >
                    <i class="text-2xl fa-duotone fa-light fa-raindrops"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Rituals
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex flex-col items-center gap-1 font-display rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 transform duration-150 hover:inset-shadow-sm hover:inset-shadow-tune-600/50 hover:border-tune-700 active:inset-shadow-tune-600/75 [&.router-link-exact-active]:border-tune-600/25 [&.router-link-exact-active]:shadow-sm [&.router-link-exact-active]:shadow-next-600/50"
                    :to="{ name: 'hirelings' }"
                >
                    <i class="text-2xl fa-duotone fa-light fa-people-group"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Hirelings
                    </span>
                </RouterLink>
                <RouterLink
                    class="flex flex-col items-center gap-1 font-display rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-3 md:py-1.5 transform duration-150 hover:inset-shadow-sm hover:inset-shadow-tune-600/50 hover:border-tune-700 active:inset-shadow-tune-600/75 [&.router-link-exact-active]:border-tune-600/25 [&.router-link-exact-active]:shadow-sm [&.router-link-exact-active]:shadow-next-600/50"
                    :to="{ name: 'black-market' }"
                >
                    <i class="text-2xl fa-duotone fa-light fa-key-skeleton"></i>
                    <span
                        class="font-semibold text-xs uppercase sr-only md:not-sr-only"
                    >
                        Black Market
                    </span>
                </RouterLink>
            </div>
        </nav>
    </div>
</template>

<template>
    <h1 class="my-6 font-bold text-3xl">
        <RouterLink to="/"
                    class="pb-2 px-8 border-b-2 border-gray-800 dark:border-gray-50"
        >
            App
        </RouterLink>
    </h1>
    <RouterLink :to="{ name: 'store.index' }">
        store
    </RouterLink>
    <button class="px-4 py-2 bg-gray-700 dark:bg-gray:50 rounded text-white" @click="toggleDarkMode">
        toggle theme
    </button>
    <hr class="my-6">
    <RouterView />
</template>

<script lang="ts">
import useTailwindDarkMode from './helpers/dark-mode';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'App',

    setup() {
        const toggleDarkMode = useTailwindDarkMode();
        return {
            toggleDarkMode
        };
    }
});
</script>

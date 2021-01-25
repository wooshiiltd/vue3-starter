<template>
    <h1 class="my-6 text-center font-bold text-3xl">
        <RouterLink to="/"
                    class="pb-2 px-8 border-b-2 border-gray-800 dark:border-gray-50"
        >
            App
        </RouterLink>
    </h1>
    <RouterLink to="store">
        store
    </RouterLink>
    <button @click="toggleDarkMode" class="px-4 py-2 bg-gray-700 dark:bg-gray:50 rounded text-white">
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
        return {
            ...useTailwindDarkMode()
        };
    }
});
</script>

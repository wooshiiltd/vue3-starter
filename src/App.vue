<template>
    <NavBar />
    <button class="px-4 py-2 bg-gray-700 dark:bg-gray:50 rounded text-white" @click="toggleDarkMode">
        toggle theme
    </button>
    <hr class="my-6">
    <RouterView />
</template>

<script lang="ts">
import useTailwindDarkMode from './helpers/dark-mode';
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
    name: 'App',
    components: { NavBar },
    setup() {
        const toggleDarkMode = useTailwindDarkMode();

        return {
            toggleDarkMode
        };
    }
});
</script>

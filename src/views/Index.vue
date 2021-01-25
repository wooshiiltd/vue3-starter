<template>
    <button class="test-class" @click="switchLocale">
        change language ({{ $i18n.locale }})
    </button>
    <p>
        {{ $t("greetings.hello") }}
    </p>
    <label>
        message from global store: {{ $store.getters.message() }}
        <br>
        <input type="text"
               placeholder="change store value"
               class="border p-2 border-gray-400 focus:border-blue-900 transition shadow-md"
               @input="$store.setters.message($event.target.value)"
        >
    </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { availableLocales, setLocale } from '../i18n';

export default defineComponent({
    name: 'Index',

    methods: {
        async switchLocale() {
            await setLocale(availableLocales.filter(locale => locale !== this.$i18n.locale)[0]);
        }
    }
});
</script>

<style scoped lang="scss">
.test-class {
    @apply rounded px-2 py-2 text-gray-200 bg-gray-700 transition;
    &:hover {
        @apply bg-gray-200 text-gray-700;
    }
}
</style>

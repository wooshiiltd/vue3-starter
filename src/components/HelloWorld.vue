<template>
    {{ msg }}
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: 'hello world'
        }
    }
});
</script>

import { reactive } from 'vue';
import { Store } from '@/store';

const state = reactive({
    message: 'Hello!'
});

export default {
    getters: {
        message: (): string => state.message
    },

    setters: {
        message: (value: string): void => {
            state.message = value;
        }
    }
} as Store;

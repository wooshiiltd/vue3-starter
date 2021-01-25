import { reactive } from 'vue';

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
};

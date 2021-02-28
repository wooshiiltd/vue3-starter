import { onBeforeMount } from 'vue';

const useTailwindDarkMode: () => (() => void) = () => {
    const htmlPage = document.querySelector('html');
    if (!(htmlPage instanceof HTMLHtmlElement)) {
        throw new Error('No root html element found');
    }

    onBeforeMount(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === 'dark' ||
            !('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches
        ) {
            htmlPage.classList.add('dark');
        } else {
            htmlPage.classList.remove('dark');
        }
    });

    // add remove to respect os setting
    return () => {
        // Whenever the user explicitly chooses light mode
        if (htmlPage.classList.contains('dark')) {
            htmlPage.classList.remove('dark');
            localStorage.theme = 'light';
        } else {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark';
            htmlPage.classList.add('dark');
        }
    };
};

export default useTailwindDarkMode;

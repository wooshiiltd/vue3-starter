import { mount } from '@vue/test-utils';
import HelloWorld from '../../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('should render correctly', () => {
        const wrapper = mount(HelloWorld);

        expect(wrapper).toMatchSnapshot();
    });

    it('should show the given msg prop', () => {
        const wrapper = mount(HelloWorld, {
            props: { msg: 'new message' }
        });

        expect(wrapper.text()).toBe('new message');
    });
});

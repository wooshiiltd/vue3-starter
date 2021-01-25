import { shallowMount } from '@vue/test-utils';
import HelloWorld from '../../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
    it('should render props.msg when passed', () => {
        const msg = 'new message';
        const wrapper = shallowMount(HelloWorld, {
            props: { msg }
        });
        expect(wrapper.text()).toMatch(msg);
    });
});

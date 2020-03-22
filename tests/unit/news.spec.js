jest.mock('axios');
import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import News from '@/components/News.vue';

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', async () => {
        const wrapper = shallowMount(News);
        expect(wrapper.findAll('li').length).toBe(0);
        await Vue.nextTick();
        expect(wrapper.findAll('li').length).toBe(2);
    });
});

jest.mock('axios');
import Vue from "vue";
import { shallowMount } from '@vue/test-utils';
import News from '@/components/News.vue';

describe('News.vue', () => {
    it('should search element and render a list of news', async () => {
        const wrapper = shallowMount(News);
        expect(wrapper.findAll('li').length).toBe(0);
        wrapper.find("[data-query]").setValue("hello");
        wrapper.find("form").trigger("submit.prevent");
        await Vue.nextTick();
        expect(wrapper.findAll('li').length).toBe(2);
    });

    it('should not render a list of news if there is no text or it doesnt found nothing', async () => {
        const wrapper = shallowMount(News);
        expect(wrapper.findAll('li').length).toBe(0);
        // wrapper.find("[data-query]").setValue("hello");
        wrapper.find("form").trigger("submit.prevent");
        await Vue.nextTick();
        expect(wrapper.findAll('li').length).toBe(0);

        wrapper.find("[data-query]").setValue("  ");
        wrapper.find("form").trigger("submit.prevent");
        await Vue.nextTick();
        expect(wrapper.findAll('li').length).toBe(0);

        wrapper.find("[data-query]").setValue("asdf");
        wrapper.find("form").trigger("submit.prevent");
        await Vue.nextTick();
        expect(wrapper.findAll('li').length).toBe(0);
    });
});

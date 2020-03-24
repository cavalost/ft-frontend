jest.mock('axios');
import Vue from "vue";
import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import Header from '@/components/Header.vue';
import Message from '@/components/Message.vue';
import List from '@/components/List.vue';
import Loading from '@/components/Loading.vue';
import Pagination from '@/components/Pagination.vue';

describe('News.vue', () => {
    it('should search element and render a list of news with pagination', async () => {
        const wrapper = mount(App);
        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('info');
        expect(wrapper.find(Message).props().data.text).toBe('To begin type something');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);

        wrapper.find(Header).find("[data-query]").setValue("hello");
        wrapper.find(Header).find("form.o-header__search-form").trigger("submit.prevent");
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(true);
        expect(wrapper.find(List).findAll('table.o-table tbody tr').length).toBe(2);
        expect(wrapper.find(Message).exists()).toBe(false);
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(true);
        expect(wrapper.find(Pagination).vm.currentPage).toBe(1);
        expect(wrapper.find(Pagination).vm.pages).toBe(2);

        wrapper.find(Pagination).findAll('button').at(1).trigger('click');
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(true);
        expect(wrapper.find(List).findAll('table.o-table tbody tr').length).toBe(2);
        expect(wrapper.find(Message).exists()).toBe(false);
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(true);
        expect(wrapper.find(Pagination).vm.currentPage).toBe(2);
        expect(wrapper.find(Pagination).vm.pages).toBe(2);
    });

    it('should not render a list of news if there is no text or it doesnt found nothing or there is an error', async () => {
        const wrapper = mount(App);
        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('info');
        expect(wrapper.find(Message).props().data.text).toBe('To begin type something');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);

        wrapper.find(Header).find("form.o-header__search-form").trigger("submit.prevent");
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('error');
        expect(wrapper.find(Message).props().data.text).toBe('You have to provide a text to search!');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);

        wrapper.find(Header).find("[data-query]").setValue("  ");
        wrapper.find(Header).find("form.o-header__search-form").trigger("submit.prevent");
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('error');
        expect(wrapper.find(Message).props().data.text).toBe('You have to provide a text to search!');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);

        wrapper.find(Header).find("[data-query]").setValue("asdf");
        wrapper.find(Header).find("form.o-header__search-form").trigger("submit.prevent");
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('info');
        expect(wrapper.find(Message).props().data.text).toBe('No news found');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);

        wrapper.find(Header).find("[data-query]").setValue("error");
        wrapper.find(Header).find("form.o-header__search-form").trigger("submit.prevent");
        await Vue.nextTick();

        expect(wrapper.find(List).exists()).toBe(false);
        expect(wrapper.find(Message).exists()).toBe(true);
        expect(wrapper.find(Message).props().data.type).toBe('error');
        expect(wrapper.find(Message).props().data.text).toBe('Service unavailable. Please try again later');
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Pagination).exists()).toBe(false);
    });
});

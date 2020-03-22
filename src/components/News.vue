<template>
    <div>
        <form @submit.prevent="search">
            <input v-model="query" data-query placeholder="Type to search news">
            <input type="submit">
        </form>
        <ul>
            <li
                v-for="(news, index) in list"
                :key="index"
            >
                {{ news.title.title }}
            </li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "News",
    data() {
        return {
            list: [],
            query: ''
        };
    },
    methods: {
        async search() {
            try {
                const { data: { news: list } } = await axios.get(`${process.env.VUE_APP_API_SERVER}/news?search=${this.query}`);
                this.list = list;
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style scoped>

</style>

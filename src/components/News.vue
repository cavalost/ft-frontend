<template>
    <ul>
        <li
            v-for="(news, index) in list"
            :key="index"
        >
            {{ news.title.title }}
        </li>
    </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: "News",
    data() {
        return {
            list: []
        };
    },
    async mounted () {
        const { data: { news: list } } = await axios.get(`${process.env.VUE_APP_API_SERVER}/news?search=hello`);
        this.list = list;
    }
}
</script>

<style scoped>

</style>

<template>
    <div class="o-buttons-pagination">
        <button
            v-for="(page, index) in pages"
            :key="index"
            class="o-buttons o-buttons--secondary"
            :aria-selected="isCurrentPage(index + 1)"
            @click="searchPage(index + 1, currentPage)"
        >
            {{ index + 1 }}
        </button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: {
        indexCount: {
            type: Number,
            default: 0
        },
        maxResults: {
            type: Number,
            default: 100
        },
        offset: {
            type: Number,
            default: 0
        },
        searchPage: {
            type: Function,
            required: true
        }
    },
    computed: {
        currentPage() {
            return Math.ceil(this.offset / this.maxResults) + 1;
        },
        pages() {
            return Math.ceil(this.indexCount / this.maxResults);
        }
    },
    methods: {
        isCurrentPage(page) {
            return page === this.currentPage;
        }
    }
}
</script>

<style scoped>
    .o-buttons-pagination {
        margin: 10px;
        text-align: center;
    }
    button {
        margin: 2px;
    }
</style>

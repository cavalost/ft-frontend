<template>
    <div class="o-table-container">
        <div class="o-table-scroll-wrapper">
            <table class="o-table o-table--horizontal-lines" data-o-component="o-table">
                <thead>
                <tr>
                    <th scope="col" role="columnheader">Title</th>
                    <th scope="col" role="columnheader" data-o-table-data-type="date">Author</th>
                </tr>
                </thead>
                <tbody>
                <tr
                    v-for="(news, index) in items"
                    :key="index"
                >
                    <td>
                        <a
                            class="o-typography-link"
                            :href="news.location.uri"
                            :title="news.editorial.subheading"
                        >
                            {{ news.title.title }}
                        </a>
                    </td>
                    <td>{{ news.editorial.byline }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>

</style>

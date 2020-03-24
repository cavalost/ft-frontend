<template>
    <header class="o-header" data-o-component="o-header" data-o-header--no-js>
        <div class="o-header__row o-header__top">
            <div class="o-header__container">
                <div class="o-header__top-wrapper">
                    <div class="o-header__top-column o-header__top-column--center">
                        <a class="o-header__top-logo" href="/" title="Go to Financial Times homepage">
                            <span class="o-header__visually-hidden">Financial Times</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div id="o-header-search" class="o-header__row o-header__search" role="search">
            <div class="o-header__container">
                <form class="o-header__search-form" @submit.prevent="search(query)" role="search" aria-label="Site search">
                    <label class="o-header__visually-hidden" for="o-header-search-term">Search the <abbr title="Financial Times">FT</abbr></label>
                    <input v-model="query" data-query class="o-header__search-term" id="o-header-search-term" type="text" placeholder="Search the FT">
                    <button class="o-header__search-submit" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header",
    props: {
        search: Function
    },
    data() {
        return {
            query: ''
        };
    }
}
</script>

<style scoped>

</style>

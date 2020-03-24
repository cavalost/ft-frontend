<template>
    <div :class="messageClass" data-o-component="o-message">
        <div class="o-message__container">
            <div class="o-message__content">
                <p class="o-message__content-main">
                    {{ data.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        messageClass() {
            return this.data.type === 'info' ? 'o-message o-message--notice  o-message--inform' : 'o-message o-message--alert  o-message--error';
        }
    }
}
</script>

<style scoped>

</style>

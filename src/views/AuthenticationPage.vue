<template>
    <div class="">
        <div class="">
            <SignInWindow></SignInWindow>
        </div>
    </div>
</template>

<script>
    import SignInWindow from '../components/SignInWindow.vue';

    export default {
        components: {
            SignInWindow
        },
        data() {
            return {
                message: "message demo homepage."
            }
        },
        methods: {

        },
        computed: {


        },
        created() {

        }
    }
</script>
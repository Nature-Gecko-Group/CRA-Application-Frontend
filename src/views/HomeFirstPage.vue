<template>
    <div class="homepage-window-full min-h-screen">
        <div class="py-5 px-7">
            <h1 class="py-2 font-mono text-2xl text-center text-yellow-50 border-b-2 ">Welcome to the Galactic
                Civilaization roleplay!</h1>
        </div>
        <div>
            <AuthenticationWindow></AuthenticationWindow>
        </div>

    </div>
</template>

<script>
    import AuthenticationWindow from '@/components/navigation/AuthenticationWindow.vue';

    export default {
        components: {
            AuthenticationWindow
        },
        data() {
            return {
                message: "message demo homepage."
            }
        },
        methods: {

        },
        created() {

        }
    }
</script>
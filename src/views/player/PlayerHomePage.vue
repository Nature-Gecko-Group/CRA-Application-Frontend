<template>
    <div class="bg-gray-900 min-h-screen">
        <div></div>
        <NativationBar></NativationBar>

        <div id="my-country-list" class="flex flex-col items-center">
            <div class="my-2 justify-center items-center content-center myprofile-my-country-btn-ncountry">
                <p>You don't have any country on your list.</p>
                <p>Click here to create one.</p>
            </div>
            <div class="my-2 justify-center items-center content-center myprofile-my-country-btn-ncountry">
                <p class="opacity-80">Add more country</p>
                <p class="opacity-70 text-3xl font-extrabold">+</p>
            </div>
        </div>

        <GalaxyMap></GalaxyMap>


    </div>
</template>

<script>
    import NativationBar from '@/components/navigation/NavigationBar.vue'
    import GalaxyMap from '@/components/board/GalaxyMap.vue'
    export default ({
        components: {
            NativationBar,
            GalaxyMap
        },
        Data() {
            return {
                playerCountry: [{
                    name:''
                }]
            }
        }
    })
</script>
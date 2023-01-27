<template>
    <div>
        <h1 class="text-white">GALAXY MAP</h1>
        <div class=".galaxy-map-box-large">
            <div>
                <div class="bg-white w-1 dot" v-for="star in stars" :style="{left: star.x + 'px', top: star.y + 'px'}"
                    :key="star.name">{{star.y}}</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .galaxy-map-box-large{
        height: 3000;
        width: 3000;
    }
    .dot {
        position: relative;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: red;
    }

    .dot:hover {
        background-color: blue;
        @apply duration-200
    }
</style>

<script>
    export default ({
        date() {
            return {
                stars: []
            }
        },
        mounted() {

        },
        methods: {

        },
        created() {
            let stars = []
            var obj1 = {}
            obj1.x = 50
            obj1.y = 50
            stars.push(obj1)

            var obj2 = {}
            obj2.x = 100
            obj2.y = 100
            stars.push(obj2)

            var obj3 = {}
            obj3.x = 2500
            obj3.y = 100
            stars.push(obj3)

            
            var obj4 = {}
            obj4.x = 2500
            obj4.y = 2500
            stars.push(obj4)

            this.stars = stars
        }
    })
</script>
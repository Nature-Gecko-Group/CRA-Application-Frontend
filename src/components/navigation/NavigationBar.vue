<template>
    <div>
        {{ isAuthenticated }}
        {{ user }}
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default ({
   computed:{
    ...mapGetters({
        isAuthenticated: 'authentication/authenticated',
        user:'authentication/userAccount'
    })
   }
})
</script>

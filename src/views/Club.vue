<template>
    <div class="">
        <h1>Club: {{getClub.shortName}}</h1>
        <img :src="getClub.crestUrl" :alt="getClub.name">
    </div>    
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
export default {
    props:['idd'],
    created(){
        this.pruebaActions(this.idd);
    },
    methods: {
        ...mapActions(['pruebaActions'])
    },
    computed: {
        ...mapGetters(['getClub'])
    }
}
</script>
<style lang="scss" scoped>

</style>
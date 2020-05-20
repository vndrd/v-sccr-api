<template>
    <div class="grid-container">
        <div class="grid-item-team">
            <h1>Club: {{getClub.shortName}}</h1>
            <div class="contenedor-img">
                <img :src="getClub.crestUrl" :alt="getClub.name" width="50%">
            </div>
        </div>
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
.grid-container {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-template-rows: repeat(3,1fr);
    grid-gap: 10px 10px;
    height: 90vh;
}
.grid-item-team {
    // background: yellow;
    grid-column: 1 / 3 ;
    grid-row: 1/3;
    align-items: center;
}
.contenedor-img{
    /*align */
        display : flex;
        align-items : center;
        justify-content: center;
    /*align */
    margin-left: calc(25%);
    overflow: hidden;
    width: 200px;
    height: 200px;
    background: #eee;
    border-radius: 200px;
    border-left: red 10px solid;
    border-top: red 10px solid;
    border-bottom: green 10px solid;
    border-right: green 10px solid;
    transform: rotate(135deg);
}
img{
    transform: rotate(-135deg);
    // background: red;
}
</style>
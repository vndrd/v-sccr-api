<template>
    <div class="grid-container" >
        <div class="grid-item-team" :class="colorprimario">
            <h1>{{getClub.shortName}}</h1>
            <div class="contenedor-img">
                <img :src="getClub.crestUrl" :alt="getClub.name" width="50%">
            </div>
            XXX {{colorprimario}}
        </div>
        <div class="grid-item-squad">
            <PlayerItem  :squad="getClub.squad" v-if="getClub"/>
        </div>
        <div class="grid-item-matches">
            <ClubMatches  :matches="matches" v-if="getClubMatches"/>
        </div>
    </div>    
</template>
<script>
import { mapActions,mapGetters } from 'vuex'
import PlayerItem from '@/components/PlayerItem'
import ClubMatches from '@/components/ClubMatches'

export default {
    props:['idd'],
    components: {PlayerItem, ClubMatches},
    created(){
        this.resTeam(this.idd);
        this.resTeamMatches(this.idd);
        console.log({text: "getClubColor",color:this.getClub.colors})
    },
    methods: {
        ...mapActions([
            'resTeam',
            'resTeamMatches'
            ]),
    },
    computed: {
        ...mapGetters([
            'getClub',
            'getClubMatches'
        ]),
        matches: function(){
            if(this.getClubMatches)
                return this.getClubMatches
            return []
        },
        colorprimario: function(){
            if(this.getClub.clubColors === undefined) return 'nada'
            if(this.getClub.clubColors){
                let firstcolor  = this.getClub.clubColors.split('/')[1].trim()
                if( firstcolor == "White") firstcolor  = this.getClub.clubColors.split('/')[0].trim()
                if ( firstcolor == "Gold" ) return 'bg-gold'
                if ( firstcolor == "Red" ) return 'bg-red'
                if ( firstcolor == "Royal Blue" ) return 'bg-blue'
                if ( firstcolor == "Blue" ) return 'bg-blue'
                if ( firstcolor == "Claret" ) return 'bg-claret'
                return 'nada: '+this.getClub.clubColors
            }
            return 'nada'
        }
    },

}
</script>
<style lang="scss" scoped>
.bg-gold { background: rgba($color: #ff0, $alpha: .8) !important; }
.bg-red { background: rgba($color: #f00, $alpha: .8) !important; }
.bg-blue { background: rgba($color: #55f, $alpha: .8) !important; }
.bg-claret { background: rgba($color: #f46, $alpha: .8) !important; }
.grid-container {
    display: grid;
    grid-template-columns: repeat(6,1fr);
    grid-auto-rows: minmax(200px,auto);
    grid-gap: 10px 10px;
}
.grid-item-team {
    // background: yellow;
    grid-column: 1 / 3 ;
    grid-row: 1/3;
    align-items: center;
    background: #ddd;
    
}
.grid-item-squad{
    overflow: hidden;
    grid-column: 3 /5;
    grid-row: 1/4;
}   
.grid-item-matches{
    grid-column: 5 / 7;
    grid-row: 1/5   ;
}
//grid 
.grid-item-team h1{
    margin:0;
    background: #fafafa;
    margin-bottom: 20px;
padding:20px;
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
    border-left: #666 10px solid;
    border-top: #666 10px solid;
    border-bottom: #333 10px solid;
    border-right: #333 10px solid;
    transform: rotate(135deg);
}
img{
    transform: rotate(-135deg);
    // background: red;
}
</style>
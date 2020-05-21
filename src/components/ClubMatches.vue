<template>
    <div class="container">
        <table>
            <tbody>
                <tr v-for="match in matches" :key="match.id">
                    <td :class="verificar(match.homeTeam.id)? 'current-club':''"> 
                        {{match.homeTeam.name}} 
                    </td>
                    <td :class="scoreColor(match)">
                        {{match.score.fullTime.homeTeam}} -
                        {{match.score.fullTime.awayTeam}}
                    </td>
                    <td :class="verificar(match.awayTeam.id)? 'current-club':''"> 
                         {{match.awayTeam.name}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ClubMatches',
    props: ['matches'],
    computed: {
        ...mapGetters(['getClub'])
    },
    methods :{
        verificar: function(id){
            return this.getClub.id === id
        },
        scoreColor: function({homeTeam,score}){
            let devolverClase = function(actual,adversario){
                if(actual > adversario)  return 'color-victoria'
                if(actual < adversario)  return 'color-derrota'
                if(actual === adversario)  return 'color-empate'
            }
            let { fullTime } = score
            if( fullTime.homeTeam === null ) return ''
            if( this.getClub.id === homeTeam.id ){
                return devolverClase(fullTime.homeTeam,fullTime.awayTeam)
            }else{
                return devolverClase(fullTime.awayTeam,fullTime.homeTeam)
            }
        }
    }

}
</script>
<style lang="scss" scoped>
.container {
    background: #ddd;
}
.current-club{
    font-weight: 800;
    background: #fff;
}
.color-empate{background: rgba($color: #ff6, $alpha: 1.0);}
.color-victoria{background:rgba($color: #6f6, $alpha: 1.0);}
.color-derrota{background: rgba($color: #f66, $alpha: 1.0);}
table {
    border-collapse: separate;
    border-spacing: 0 10px;
}
table tr{

    background: #ddd;
    height: 30px;
}
tr td:nth-child(2) {
    font-weight: 500;
    width: 50px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}
tr td:nth-child(1){

}
</style>
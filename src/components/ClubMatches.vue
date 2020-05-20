<template>
    <div>
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
.current-club{
    font-weight: 800;
}
table {
    border-collapse: separate;
    border-spacing: 0 10px;
}
.color-empate{background: yellow;}
.color-victoria{background: green;}
.color-derrota{background: red;}
tr td:nth-child(2) {
    width: 50px;
}
</style>
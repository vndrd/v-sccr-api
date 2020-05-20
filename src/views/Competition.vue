<template>
  <div>
      <div v-if="loaded" >
        <h1>{{league.name}}</h1>    
        <h3>{{league.area.name}}</h3>    
        <h3 v-if="league.winner">Campeón: {{league.winner.name}}</h3>
        <p v-if="league.winner">
            img: {{league.winner.crestUrl}}
        </p>
        <p>Temporada: {{temporada}}</p>
        <div class="container-club">
            <ClubItem v-for="team in league.teams" :key="team.id" :team="team"/>
            <div class="grid-item-table">
                <Tabla :table="table" />
            </div>
            <div class="grid-item-matches">
                <Matches :matches="matches" :totalMatchDays="totalMatchDays" />
            </div>
            <div class="grid-item-scorers">
                <Scorers :scorers="scorers" />    
            </div>
        </div>
      </div>
  </div>
</template>
<script>
//<button @click="getSingleLeague">qwe</button>
import ClubItem from '@/components/ClubItem'
import Tabla from '@/components/Tabla'
import Matches from '@/components/Matches'
import Scorers from '@/components/Scorers'
import {mapActions,mapGetters} from 'vuex'

export default {
    props: ['id','idd'],
    components: {ClubItem,Tabla,Matches,Scorers},
    data(){
        return {
            loaded: false
        }
    },
    async created() {
        await this.cargarData();
        console.log("from crated testing scorers")
        console.log(this.getScorers)
        await (this.loaded = true)
    },
    methods: {
        cargarData(){
            this.fetchSingleLeague(this.idd)
            this.resStandings(this.idd)
            this.resMatches(this.idd)
            this.resScorers(this.idd)
        },
        ...mapActions([
            'vaciarLeague','vaciarStandings','vaciarMatches','vaciarScorers',
            'fetchSingleLeague',
            'resStandings',
            'resMatches',
            'resScorers',
        ]),
    },
    computed: {
        ...mapGetters(['getSingleLeague','getStandings','getMatches','getScorers']),
        league: function(){
            if(Object.prototype.hasOwnProperty.call(this.getSingleLeague, 'competition')){
               return {
                   ...this.getSingleLeague.competition,
                   season: this.getSingleLeague.season,
                   winner : this.getSingleLeague.season.winner,
                   teams: this.getSingleLeague.teams
               }
            }
            return {area: {}, season: {}, teams: [], winner: {}}
        },
        temporada: function(){
            let convertir = ({startDate,endDate}) => {
                let startYear = new Date(startDate).getFullYear(),
                    endYear = new Date(endDate).getFullYear() 
                return startYear === endYear ? startYear: `${startYear}/${endYear}`
            }
            return convertir(this.league.season)
        },
        table: function(){
            if(Object.prototype.hasOwnProperty.call(this.getStandings, 'standings'))
                return this.getStandings.standings[0].table
            return []
        },
        matches: function(){
            if(Object.prototype.hasOwnProperty.call(this.getMatches, 'matches')){
                return this.getMatches.matches
            }
            return []
        },
        scorers: function(){
            if(Object.prototype.hasOwnProperty.call(this.getScorers, 'scorers')){
                return this.getScorers.scorers
            }
            return []
        },
        totalMatchDays: function(){
            if(Object.prototype.hasOwnProperty.call(this.getMatches, 'matches')){
                let getUniqueListBy = function(arr, key) {
                    return [...new Map(arr.map(item => [item[key], item])).values()]
                }
                return getUniqueListBy(this.getMatches.matches, 'matchday').map((match) => match.matchday)
            }
            return []
        }
    },
    beforeDestroy(){
        this.vaciarLeague()
        this.vaciarStandings()
        this.vaciarMatches()
        this.vaciarScorers()
    }
}
</script>
<style lang="scss" scoped>
.container-club {
    display: grid;
    grid-template-columns: repeat(10,1fr);
    row-gap: 5px;
    column-gap: 5px;    
}
.grid-item-table {
    grid-column: 1/4;
}
.grid-item-matches {
    grid-column: 4/8;
}
.grid-item-scorers {
    grid-column: 8/-1;
}
</style>
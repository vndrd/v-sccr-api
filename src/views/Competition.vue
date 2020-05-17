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
        </div>
      </div>
  </div>
</template>
<script>
//<button @click="getSingleLeague">qwe</button>
import ClubItem from '@/components/ClubItem'
import {mapActions,mapGetters} from 'vuex'
export default {
    props: ['id','urr','idd'],
    components: {ClubItem},
    data(){
        return {
            loaded: false
        }
    },
    async created() {
        await this.fetchSingleLeague(this.idd)
        this.loaded = true
    },
    methods: {
        ...mapActions(['fetchSingleLeague','vaciarLeague']),
    },
    //https://www.football-data.org/documentation/quickstart/
    //https://www.football-data.org/docs/v2/index.html#_competition
    computed: {
        ...mapGetters(['getSingleLeague']),
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
            if(Object.prototype.hasOwnProperty.call(this.getSingleLeague, 'season')){
                let convertir = ({startDate,endDate}) => {
                    let startYear = new Date(startDate).getFullYear(),
                        endYear = new Date(endDate).getFullYear() 
                    return startYear === endYear ? startYear: `${startYear}/${endYear}`
                }
                return convertir(this.league.season)
            }
            return ''
        }
    },
    beforeDestroy(){
        this.vaciarLeague()
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
.grid-item {
    
}
</style>
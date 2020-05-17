<template>
  <div>
      <div v-if="loaded">
        <h1>{{league.name}}</h1>    
        <h3>{{league.area.name}}</h3>    
        <h3 v-if="league.winner">Campeón: {{league.winner.name}}</h3>    
        <p v-if="league.winner">img: {{league.winner.crestUrl}}</p>
        <ul>
            <li v-for="team in league.teams" :key="team.id">
                {{team.name}}
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
//<button @click="getSingleLeague">qwe</button>
import {mapActions,mapGetters} from 'vuex'
export default {
    props: ['id','urr','idd'],
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
            if(
                Object.prototype.hasOwnProperty.call(this.getSingleLeague, 'competition')
            ){
                
                console.log("sheldon")
                console.log(this.getSingleLeague.season)
               return {
                   ...this.getSingleLeague.competition,
                   winner : this.getSingleLeague.season.winner,
                   teams: this.getSingleLeague.teams
               }
            }
            return {
                area: {},
                season: {},
                teams: [],
                winner: {}
                }
        }
    },
    beforeDestroy(){
        this.vaciarLeague()
    }
}
</script>
<style lang="scss" scoped>
ul {
    margin: 0;
    padding: 0;
    text-align: center;
    a {
       text-decoration: none;
       color: #666;
        padding:10px 1px;
        display: block;
        margin: 5px auto;
        width: 200px;
        background: #ccc;
    }
}
</style>
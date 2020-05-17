<template>
  <div>
    <h1>{{league.name}}</h1>    
    <h3>{{league.area.name}}</h3>    
    <ul>
        <li v-for="team in league.teams" :key="team.id">
            {{team.name}}
        </li>
    </ul>
  </div>
</template>
<script>
//<button @click="getSingleLeague">qwe</button>
import {mapActions,mapGetters} from 'vuex'
export default {
    props: ['id','urr','idd'],
    data(){
        return {
            
        }
    },
    mounted: function() {
        this.fetchSingleLeague(this.idd)
        
    },
    methods: {
        ...mapActions(['fetchSingleLeague']),
    },
    //https://www.football-data.org/documentation/quickstart/
    //https://www.football-data.org/docs/v2/index.html#_competition
    computed: {
        ...mapGetters(['getSingleLeague']),
        league: function(){
            if(
                Object.prototype.hasOwnProperty.call(this.getSingleLeague, 'competition')

            ){
               return {
                   ...this.getSingleLeague.competition,
                   ...this.getSingleLeague.seasons,
                   teams: this.getSingleLeague.teams
               }
            }
            return {area: {},teams: []}
        }
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
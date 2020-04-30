<template>
  <div>
    <h1>{{league.name}}</h1>
    <p>Temporadas</p>
    <li v-for="season in league.seasons" :key="season.id">
        {{season.startDate}}
    </li>
    <button @click="getSingleLeague">qwe</button>
  </div>
</template>
<script>
export default {
    props: ['id'],
    data(){
        return {
            league: {}
        }
    },
    mounted: function() {
        console.log("comp comp comp comp comp comp comp")
        this.getSingleLeague()
    },
    methods: {
        //https://www.football-data.org/documentation/quickstart/
        getSingleLeague: function(){
            let url = `http://api.football-data.org/v2/competitions/${this.id}`
            console.log("getSingleLEague", this.id)
            this.axios({
                url: url,
                type: 'GET'
                }).then( response => {
                    this.league = response.data
                    console.log(response.data)
            }).catch( error => {console.log(error)})
        }
    }
}
</script>

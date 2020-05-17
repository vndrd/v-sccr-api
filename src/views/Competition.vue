<template>
  <div>
    <h1>{{league.name}}</h1>
    <p>Temporadas</p>
    <ul>
        <a v-for="season in league.seasons" :key="season.id" href="#" @click="chooseSeason(season.id)">
            {{season.startDate}}
        </a>
    </ul>
    
  </div>
</template>
<script>
//<button @click="getSingleLeague">qwe</button>
export default {
    props: ['id','urr'],
    data(){
        return {
            league: {}
        }
    },
    mounted: function() {
        console.log("before birch")
        console.log("go: ",this.urr)
        console.log("comp comp comp comp comp comp comp")
        //this.getSingleLeague()
        this.htttpMethod();
        this.chooseSeason(1)
    },
    methods: {
        chooseSeason: function(id){
            console.log("its the id: ",id)
            let url = `http://api.football-data.org/v2/competitions/1/teams`
            //    url = "http://api.football-data.org/v2/competitions/"+id+"/teams"
            console.log("Testing vue-resourcesssss")
            this.$http.get(url)
            .then(response => {
                console.log("yeah")
                console.log(response.data)
                }, response => {
                    console.log("fucking error")
                    console.log(response)
                });  
        },
        //https://www.football-data.org/documentation/quickstart/
        htttpMethod: function(){
            let url = `https://api.football-data.org/v2/competitions/2000`
            console.log("Testing vue-resourcesssss")
            this.$http.get(url)
          .then(response => {
              this.league = response.data
            }, response => {
                console.log("fucking error")
                console.log(response)
            });
        },
        getSingleLeague: function(){
            let url = this.urr
            setTimeout(() => {
                
            }, 3000);
            console.log('the url',url)
            console.log("getSingleLEague", this.id)
            this.axios({
                url: url,
                type: 'GET'
                }).then( response => {
                    this.league = response.data
                    console.log(response.data)
            }).catch( error => {console.log(error)})
            url = `https://api.football-data.org/v2/competitions/2059`
            this.axios({
                url: url,
                type: 'GET'
                }).then( response => {
            //        this.league = response.data
                    console.log(response.data)
            }).catch( error => {console.log(error)})
            //provinf
            url = `https://api.football-data.org/v2/matches`
            console.log("getSingleLEague", this.id)
            this.axios({
                url: url,
                type: 'GET'
                }).then( response => {
                    console.log(response.data)
            }).catch( error => {console.log(error)})
            console.log("calling another method");   
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
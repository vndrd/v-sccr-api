<template>
  <div>
    <CompetitionList :list="list"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CompetitionList from '@/components/CompetitionList.vue'

export default {
  name: 'Home',
  data() {
    return {
      list: [],
      currentCompetition: {}
    }
  },
  mounted: function(){
    this.getAllLeagues();
  },
  methods: {
    getAllLeagues: function(){
      this.axios({ 
        url: 'http://api.football-data.org/v2/competitions',
        headers: {'X-Auth-Token': '6bd688cffee243f2a973d25dcc6d6d1b'}, 
        }).then( response => {
          console.log(response.data.competitions)
          this.list = response.data.competitions
      })
      console.log("getSingleLEague tttttttttttttttttttttesteng")
      let url = `http://api.football-data.org/v2/competitions/2000`
      this.axios({
          url: url,
          headers: {'X-Auth-Token': '6bd688cffee243f2a973d25dcc6d6d1b'}, 
          type: 'GET'
          }).then( response => {
              this.league = response.data
          console.log(response.data)
      }).catch( error => {console.log(error)})
    },
  },
  components: {
    CompetitionList
  }
}
</script>

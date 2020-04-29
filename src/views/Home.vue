<template>
  <div class="home">
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
      list: []
    }
  },
  mounted: function(){
    console.log("fucking heeloow worororo")
    this.axios({ 
      url: 'http://api.football-data.org/v2/competitions',
      headers: {'X-Auth-Token': '6bd688cffee243f2a973d25dcc6d6d1b'}, 
      }).then( response => {
        console.log(response.data.competitions)
        this.list = response.data.competitions
      })
  },
  components: {
    CompetitionList
  }
}
</script>

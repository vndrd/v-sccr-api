<template>
  <div>
    <CompetitionList :list="filtrados"/>
  </div>
</template>
<script>
// @ is an alias to /src
import CompetitionList from '@/components/CompetitionList.vue'
import { mapGetters, mapActions} from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      list: [],
      currentCompetition: {},
      disponibles : [
        2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
      ]
    }
  },
  mounted(){
    this.fetchLeagues()
  },
  computed: {
    ...mapGetters(['getLeagues']),    
    filtrados: function(){ 
      return this.getLeagues.filter(
        (league)=> this.disponibles.includes(league.id)
      )
    }
  },
  methods: {
    ...mapActions(['fetchLeagues','fetchSingleLeague']),
  },
  components: {
    CompetitionList
  }
}
</script>

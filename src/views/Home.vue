<template>
  <div>
    <CompetitionList :list="getLeagues"/>
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
      currentCompetition: {}
    }
  },
  mounted(){
    console.log("mounted")
    this.fetchLeagues()
    this.fetchSingleLeague();
    console.log("vamos ")
  },
  computed: {
    ...mapGetters(['getLeagues'])
  },
  methods: {
    ...mapActions(['fetchLeagues','fetchSingleLeague']),
  },
  components: {
    CompetitionList
  }
}
</script>

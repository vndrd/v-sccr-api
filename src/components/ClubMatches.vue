<template>
    <div>
        <table>
            <tbody>
                <tr v-for="match in matches" :key="match.id">
                    <td>{{match.matchday}}</td> 
                    <!-- <td v-if="getClub.id===match.homeTeam.id"> Q Q {{match.homeTeam.name}} </td> -->
                    <!-- <td v-else> {{match.homeTeam.name}} </td> -->
                    <td> {{match.homeTeam.name}} </td>
                    <td>{{match.score.fullTime.homeTeam}}</td>
                    <td>{{match.score.fullTime.awayTeam}}</td>
                    <td> {{match.awayTeam.name}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ClubMatches',
    props: ['matches'],
    computed: {
        ...mapGetters(['getClub'])
    }
}
</script>
<style lang="scss" scoped>

</style>
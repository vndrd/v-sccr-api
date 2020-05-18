<template>
    <div>
        <h1>Matches</h1>        
        <table>
            <tbody>
                <tr v-for="match in ordenados" :key="match.id">
                    <td> {{match.utcDate}}</td>    
                    <td> q: {{match.matchday}}</td>    
                    <td> {{match.homeTeam.name}}</td>    
                    <td>{{match.score.fullTime.homeTeam}}</td>
                    <td>{{match.score.fullTime.awayTeam}}</td>
                    <td>{{match.awayTeam.name}}</td>
                    
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
export default {
    name:'Matches'    ,
    props: ['matches'],
    computed: {
        ordenados: function(){
            return this.matches
        }
    }
}
</script>
<style lang="scss" scoped>

</style>

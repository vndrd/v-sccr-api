<template>
    <div>
        <h1>Matches</h1>        
        <select v-model="matchday">
            <option v-for="day in totalMatchDays" :key="day" :value="day">{{day}}</option>
        </select>
        <table>
            <tbody>
                <tr v-for="match in ordenados" :key="match.id">
                    <td> {{extraerFecha(match.utcDate)}}</td>    
                    <td> {{match.homeTeam.name}}</td>    
                    <td>{{match.score.fullTime.homeTeam}}</td>
                    <td>-</td>
                    <td>{{match.score.fullTime.awayTeam}}</td>
                    <td>{{match.awayTeam.name}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
export default {
    name:'Matches',
    props: ['matches','totalMatchDays'],
    data(){
        return {
            matchday: 1
        }
    },
    created(){
        
    },
    computed: {
        ordenados: function(){
            return this.matches.filter( match => match.matchday===this.matchday)
        }
    },
    methods: {
        extraerFecha(date){
            let agregarCero = (numero) => numero < 10? `0${numero}` : numero
            let fecha = new Date(date),
                mes = agregarCero ( fecha.getMonth() + 1 ),
                dia = agregarCero( fecha.getDate() ),
                anio = fecha.getFullYear();
            return `${dia}-${mes}-${anio}`
        }
    }    
}
</script>
<style lang="scss" scoped>

</style>

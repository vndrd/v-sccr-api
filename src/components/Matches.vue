<template>
    <div>
        <h1>
            Matches
            <select v-model="matchday">
                <option v-for="day in totalMatchDays" :key="day" :value="day">{{day}}</option>
            </select>
        </h1>        
        <table>
            <tbody>
                <tr v-for="match in ordenados" :key="match.id">
                    <td> {{extraerFecha(match.utcDate)}}</td>    
                    <td> {{match.homeTeam.name}}</td>    
                    <td>{{match.score.fullTime.homeTeam}}</td>
                    <td>x</td>
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
                anio = fecha.getFullYear().toString().substring(2,4);
            return `${dia}/${mes}/${anio}`
        }
    }    
}
</script>
<style lang="scss" scoped>
table{
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 1px;
    display: table;
}
table tr {
    height: 40px;
    background: #f1f1f1;
    margin-top: 10px;
    border-bottom: 1px solid black;
}
table tr td {
    padding: 5px;
    display: table-cell;
    vertical-align: middle;
    height: 30px;
}
table tr td:nth-child(1){
    color:#777;
    width: 40px;
    
}
table tr td:nth-child(3),td:nth-child(5){
    font-weight: 800;
    width:30px;
    color:#fff;
    background: #445;
}
table tr td:nth-child(2){
    float: right;
    font-weight: 500;
    color:#114;
    width: 171px;
     display: table-cell;
   vertical-align: middle;
}
table tr td:nth-child(6){
    float: left;
    font-weight: 500;
    color:#114;
    width: 171px;
}
</style>

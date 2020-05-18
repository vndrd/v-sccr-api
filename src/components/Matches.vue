<template>
    <div>
        <h1>Matches</h1>        
        <table>
            <tbody>
                <tr v-for="match in ordenados" :key="match.id">
                    <td> {{extraerFecha(match.utcDate)}}</td>    
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
    name:'Matches',
    props: ['matches'],
    created(){
        console.log("just created matches vue")
        this.matches.map(match => console.log(new Date(match.utcDate)))
    },
    computed: {
        ordenados: function(){
            return this.matches
        }
    },
    methods: {
        extraerFecha(date){
            let agregarCero = (numero) => numero < 10? `0${numero}` : numero
            let fecha = new Date(date)
            let mes = agregarCero ( fecha.getMonth() + 1 )
            let dia = agregarCero( fecha.getDate() )
            let anio = fecha.getFullYear();
            return `${dia}-${mes}-${anio}`
        }
    }    
}
</script>
<style lang="scss" scoped>

</style>

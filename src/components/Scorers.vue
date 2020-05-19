<template>
    <div>
        <h1>Scorers</h1>            
        <table>
            <tbody>
                <tr v-for="(scorer,index) in scorers" :key="scorer.player.id">
                    
                    <td>{{index+1}}</td>
                    <td>{{scorer.team.name}}</td>
                    <td>{{scorer.player.name}}</td>
                    <td>{{scorer.numberOfGoals}}</td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>
<script>
export default {
    props: ['scorers'],

    name: 'Scorers'    
}
</script>
<style lang="scss" scoped>

table {
    border-spacing:0 15px; 
    border-collapse:separate; 
    border-spacing: 0 3px;
}
table tr {
    margin-bottom: 10px;
    border-radius: 20px;
    height: 50px;
}
table tr td {
    padding-top: 5px;
    padding-bottom: 5px;
    background: #eee;
    margin-bottom: 10px;
}
td:first-child { border-top-left-radius: 0px; padding-left: 10px;}
td:last-child { border-top-right-radius: 10px; padding-right: 10px;background: #444; color: white; width: 40px;}
td:first-child { border-bottom-left-radius: 0px; }
td:last-child { border-bottom-right-radius: 10px; }


</style>
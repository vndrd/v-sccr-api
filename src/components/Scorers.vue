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

</style>
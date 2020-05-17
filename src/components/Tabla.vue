<template>
    <div class="cont-table">
        <table>
            <thead>
                <tr>
                    <th>Pos</th>
                    <th>Team</th>
                    <th>Points</th>
                    <th>+/-</th>
                </tr>
            </thead>
        </table>
        <tbody>
            <tr v-for="item in table" :key="item.team.id">
                <td>{{item.position}}</td>
                <td>{{item.team.name}}</td>
                <td>{{item.points}}</td>
                <td>{{item.goalDifference}}</td>
            </tr>
        </tbody>
    </div>
</template>
<script>
export default {
    name: 'Tabla',
    props: ['table']
}
</script>
<style lang="scss" scoped>
.cont-table {
    width: 300px;
    overflow: hidden;
    height: auto;
    display: inline;
    margin-left: auto;
    margin-right: auto;
}
</style>
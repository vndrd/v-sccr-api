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
            <tbody>
                <tr v-for="item in table" :key="item.team.id">
                    <td>{{item.position}}</td>
                    <td>{{item.team.name}}</td>
                    <td>{{item.points}}</td>
                    <td>{{item.goalDifference}}</td>
                </tr>
            </tbody>
        </table>
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
    display: inline;
    text-align: center;
}
table{ 
    margin:auto;
    border-collapse: collapse;
}
thead{
    background: #333;
    color:#ddd;
}
thead tr th {
    padding: 20px;
}
tbody tr td{
    padding-top: 5px;
    padding-bottom: 5px;
}
tbody tr:nth-child(2n) {
    background: #cfc;
}
tbody tr:nth-child(2n+1) {
    background: #ccc;
}
</style>
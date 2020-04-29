<template>
    <div>
        <h1>Ligas</h1>
        <li v-for="item in list" :key="item">
            {{item.name}}asd
        </li>            
    </div>    
</template>
<script>
export default {
    name: 'CompetitionList',
    props: ['list'],
    mounted: function() {
        console.log("comepttion list")
        console.log(this.list)
    },
    watch: {
        list: function(){
            return this.list;
        }
    }
}
</script>
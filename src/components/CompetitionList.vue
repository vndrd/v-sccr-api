<template>
    <div>
        <h1>Ligas (api.football-data.org)</h1>
        <li v-for="item in list" :key="item.id  ">
            <router-link :to="'/competition/'+item.id">
                {{item.name}}
            </router-link>
        </li>            
    </div>    
</template>
<script>
export default {
    name: 'CompetitionList',
    props: ['list'],
    mounted: function() {

    },
}
</script>
<style lang="scss" scoped>
    li{
        margin:1px 1px;
        list-style-type: none;
        float:left;
        padding:10px 1px;
        background: #aaa;
        overflow: hidden;
        a {
            padding:10px 10px;
            text-decoration: none;
            color: #fff;
            overflow: hidden;
        }
        a:hover {   
            transition: all .3s ease-in-out; 
            background-color: #aa1 !important;;
        }
    }
</style>
<template>
    <div>
        <div v-for="group in byPosition" :key="group.position"> 
            <h3>{{group.position}}</h3>
            <div v-for="player in group.players" :key="player.id">
                <td>{{player.name}}</td>
                <td>{{acortarPosicion(player.position)}}</td>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['squad'],
    name:'PlayerItem',
    methods: {
        acortarPosicion(position){
            let short = ''
            switch (position) {
                case "Goalkeeper": short = "GK"
                    break;
                case "Defender": short = "DF"
                    break;
                case "Midfielder": short = "MD"
                    break;
                case "Attacker": short = "FW"
                    break;
                default:
                    short = ''
                    break;
            }
            return short
        }
    },
    computed:{
        byPosition: function(){
            let positions = [ 'Goalkeeper','Defender','Midfielder','Attacker']
            if(this.squad){
                let result = positions.reduce( (arr,position) => {
                    let players = this.squad.reduce( (arr2,player) => {
                        if(player.position === position  )
                            arr2.push(player)
                        return arr2
                    },[])
                    arr.push({players,position})
                    return arr
                },[])
                return result
            }
            return []
        } 
    }
}
</script>
<style lang="scss" scoped>
li{
    list-style: none;
}
</style>
<template>
    <div>
        <div v-for="group in byPosition" :key="group.position" class="grupo"> 
            <h3>{{group.position}}</h3>
            <div class="all-players">
                <li v-for="player in group.players" :key="player.id" class="player">
                    {{player.name}}
                </li>
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
h3{
    background: rgba($color: #111, $alpha: .1);
    margin: 0;
    text-transform: uppercase;
}
.all-players{
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: flex-start;
    background:rgba($color: #111, $alpha: .5);
}
.player{
    padding:10px;
    display: block;
    list-style: none;
    text-align: left;
    color:white;
    background:rgba($color: #111, $alpha: .1);
    position: relative;
    padding-left: 20px;
}
.player::after{
    content:'';
    width: 10px;
    height: 20px;
    background: #555;
    
    position:absolute;
    left: 0;
}
</style>
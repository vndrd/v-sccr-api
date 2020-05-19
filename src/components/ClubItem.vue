<template>
    <div class="item">
        <h3>
            {{team.name}}
        </h3>
        <!-- <img :src="team.crestUrl" alt="" height="100px"> -->
        <img v-if="team.crestUrl" :src="team.crestUrl" alt="" height="100px">
        <img v-else src="@/assets/defaults.png" alt="" height="100px" class="img-default">

    </div>    
</template>
<script>
export default {
    props: ['team'],
    name: 'ClubItem'
}
</script>
<style lang="scss" scoped>
.item {
    background: #bbb;
    overflow: hidden;
    padding: 15px;
    height: 100px;
    position:relative;
    cursor: pointer;
}
.img-default{
    margin-left: calc(-25%);
}
img{
    transition: .3s all ease-in-out;
    // background: yellow;
}
.item:hover img {
    -webkit-transform: scale(1.2);
      -ms-transform: scale(1.2);
          transform: scale(1.2);
}
.item:hover h3{
    opacity: 1;
}
h3 {
    font-size: 1.1rem;
    background-color: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 200;
    width: 100%;
    color: #aaa;
    max-height: 50px;
    -moz-transform: translateY(20px);
    opacity: 0;
    transition: .3s all ease-in-out;
    z-index: 99;;
}
</style>
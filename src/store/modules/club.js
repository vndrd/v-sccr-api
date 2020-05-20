import axios from 'axios'
//https://www.football-data.org/documentation/quickstart/
//https://www.football-data.org/docs/v2/index.html#_competition,
const state = {
    club: {}
}
const getters = {
    getClub: (state) => state.club
}
const actions = {
    pruebaActions: async function({commit},id){
        const club = await axios.get(`teams/${id}`)
            .then((result) => result.data)
            .catch(error => console.log(error))
        commit('setClub',club)
    },
}
const mutations = {
    setClub: (state,club) => state.club = club
}
export default {
    state,
    getters,
    actions,
    mutations,
}
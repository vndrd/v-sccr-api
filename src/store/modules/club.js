import axios from 'axios'
//https://www.football-data.org/documentation/quickstart/
//https://www.football-data.org/docs/v2/index.html#_competition,
const state = {
    club: {},
    clubMatches: {}
}
const getters = {
    getClub: (state) => state.club,
    getClubMatches: (state) => state.clubMatches,
}
const actions = {
    resTeam: async function({commit},id){
        const club = await axios.get(`teams/${id}`)
            .then((result) => result.data)
            .catch(error => console.log(error))
        commit('setClub',club)
    },
    resTeamMatches: async function({commit},id){
        let matches = await axios.get(`teams/${id}/matches`)
            .then((response => response.data.matches))
        console.log({commit , matches})
        commit('setTeamMatches',matches)
    },
}
const mutations = {
    setClub: (state,club) => state.club = club,
    setTeamMatches: (state,matches ) => state.clubMatches = matches,
}
export default {
    state,
    getters,
    actions,
    mutations,
}
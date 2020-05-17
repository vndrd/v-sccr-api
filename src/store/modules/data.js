import axios from 'axios'
const state = {
    leagues:[],
    singleLeague: {},
    standings: {}
}
const getters = {
    getLeagues: (state) => state.leagues,
    getSingleLeague: (state) => state.singleLeague,
    getStandings: (state) => state.standings,
}
const actions = {
    fetchLeagues: async function({commit}){
        const leagues = await axios.get('competitions')
            .then((response) => response.data.competitions)
            .catch( error => console.log(error))
        commit('setLeagues',leagues)
    },
    fetchSingleLeague: async function({commit},id){
        const league = await axios.get(`competitions/${id}/teams`)
            .then(response => response.data)
            .catch( error => console.log(error))

        commit('setSingleLeague',league)
    },
    resStandings: async function({commit},id){
        const standings = await axios.get(`competitions/${id}/standings`)
            .then((response) => response.data)
            .catch( error => console.log(error))
        console.log({commit , standings})
        commit('setStandings',standings)
    },
    vaciarLeague: function({commit}){
        commit('setLeagueEmpty')
    }
}
const mutations = {
    setLeagues:     (state,leagues) => state.leagues = leagues,
    setSingleLeague: (state, league) => state.singleLeague = league,
    setStandings:   (state,standings ) => state.standings = standings,
    setLeagueEmpty: (state) => state.singleLeague = {},
}

export default {
    state,
    getters,
    actions,
    mutations
}
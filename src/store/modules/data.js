import axios from 'axios'
const state = {
    leagues:[],
    singleLeague: {}
}
const getters = {
    getLeagues: (state) => state.leagues,
    getSingleLeague: (state) => state.singleLeague
}
const actions = {
    fetchLeagues: async function({commit}){
        const leagues = await axios.get(
        'http://api.football-data.org/v2/competitions'
        ).then((response) => response.data.competitions
        ).catch( error => console.log(error))
        commit('setLeagues',leagues)
    },
    //593fb478d991492ebed3318c7c5e1486
    //2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021
    fetchSingleLeague: async function({commit},id){
        const league = await axios.get(
            `http://api.football-data.org/v2/competitions/${id}/teams`
        ).then(response => response.data)
        .catch( error => console.log(error))
        console.log({commit , league})
        commit('setSingleLeague',league)
    },
    vaciarLeague: function({commit}){
        commit('setLeagueEmpty')
    }
}
const mutations = {
    setLeagues: (state,leagues) => state.leagues = leagues,
    setSingleLeague: (state, league) => {
        console.log("weareasetting htis")
        console.log(league)
        return state.singleLeague = league
    },
    setLeagueEmpty: (state) => state.singleLeague = {}
}

export default {
    state,
    getters,
    actions,
    mutations
}
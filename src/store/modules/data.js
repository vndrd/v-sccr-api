import axios from 'axios'
const state = {
    leagues:[],
    singleLeague: {},
    standings: {},
    matches: [],
    scorers: [],
}
const getters = {
    getLeagues: (state) => state.leagues,
    getSingleLeague: (state) => state.singleLeague,
    getStandings: (state) => state.standings,
    getMatches: (state) => state.matches,
    getScorers: (state) => state.scorers,
}
const actions = {
    fetchLeagues: async function({commit}){
        const leagues = await axios.get('competitions')
            .then((response) => response.data.competitions)
            .catch( error => console.log(error))
        commit('setLeagues',leagues)
    },
    fetchSingleLeague: async function({commit},id){
        const league = await axios.get(`competitions/${id}/teams?season=2018`)
            .then(response => response.data)
            .catch( error => console.log(error))

        commit('setSingleLeague',league)
    },
    resStandings: async function({commit},id){
        const standings = await axios.get(`competitions/${id}/standings`)
            .then((response) => response.data)
            .catch( error => console.log(error))
        commit('setStandings',standings)
    },
    resMatches: async function({commit},id){
        //const matches = await axios.get(`competitions/${id}/matches`,{params: {matchday: 38}})
        const matches = await axios.get(`competitions/${id}/matches`)
            .then((response) => response.data)
            .catch( error => console.log(error))
        console.log({text: 'matches', commit , matches})
        commit('setMatches',matches)
    },
    resScorers: async function({commit},id){
        const matches = await axios.get(`competitions/${id}/scorers`)
            .then((response) => response.data)
            .catch( error => console.log(error))
        console.log({text: 'scorers', commit , matches})
        commit('setScorers',matches)
    },
    vaciarLeague: function({commit}){
        commit('setLeagueEmpty')
    }
}
const mutations = {
    setLeagues:     (state,leagues) => state.leagues = leagues,
    setSingleLeague: (state, league) => state.singleLeague = league,
    setStandings:   (state,standings ) => state.standings = standings,
    setMatches: (state,matches) => state.matches = matches,
    setScorers: (state,scorers) => state.scorers = scorers,
    setLeagueEmpty: (state) => state.singleLeague = {},
}

export default {
    state,
    getters,
    actions,
    mutations
}
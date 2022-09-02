import { moviesActions } from "../Actions/moviesActions";

export const initialStateMovies = {
    query: '',
    queryResults: [],
    populares: [],
    topRated: [],
    series: [],
    notFound: false,
    titleDetail: false,
    id:'',
    lang: ''
}

export const moviesReducer = ( state:any, action:any ) => {
    switch ( action.type ) { 
        case moviesActions.getByQuery:
            return console.log('dispatch funca')
        // case moviesActions.getTopRated:
        //     return {
        //         count: state.count - 1
        //     }
        // case moviesActions.getTrending:
        //     return {
        //         count: 0
        //     }
        // case moviesActions.getSeries:
        //     return {
        //         count: 0
        //     }
        // case moviesActions.getById:
        //     return {
        //         count: 0
        //     }
        // case moviesActions.getLang:
        //     return {
        //         count: 0
        //     }
        
        default:
        return state
    }
}
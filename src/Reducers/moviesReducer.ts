import { moviesActions } from "../Actions/moviesActions";

export const initialStateMovies = {
    query: '',
    queryResults: [],
    queryGenres: [],
    populares: [],
    topRated: [],
    series: [],
    generos: {},
    notFound: false,
    titleDetail: {},
    id:'',
    lang: ''
}

export const moviesReducer = ( state:any, action:any ) => {
    switch ( action.type ) { 
        case moviesActions.getByQuery:
            return {
                ...state,
                queryResults: [...action.payload]
            }
        case moviesActions.resetQuery:
            return {
                ...state,
                queryResults: []
            }
        case moviesActions.getTopRated:
            return {
                ...state,
                topRated: [...action.payload]
            }
        case moviesActions.getTrending:
            return {
                ...state,
                populares: [...action.payload]
            }
        case moviesActions.getSeries:
            return {
                ...state,
                series: [...action.payload]
            }
        case moviesActions.getById:
            return {
                ...state,
                titleDetail: {...action.payload}
            }
        case moviesActions.getByQueryGenres:
            return {
                ...state,
                queryGenres: [...action.payload]
            }
        case moviesActions.getGeneros:
            return {
                ...state,
                generos: {...action.payload}
            }
        case moviesActions.setNotFound:
            return {
                ...state,
                notFound: action.payload
            }            
        case moviesActions.setQuery:
            return {
                ...state,
                query: action.payload
            }            
        
        default:
        return state
    }
}
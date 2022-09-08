import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface MoviesState {
    query: string,
    queryResults: any,
    queryGenres: any,
    populares: any,
    topRated: any,    
    generos: any,
    notFound: boolean,
    titleDetail: any,
    id:string,
    lang: string
}

const initialState: MoviesState = {
    query: '',
    queryResults: [],
    queryGenres: [],
    populares: [],
    topRated: [],    
    generos: {},
    notFound: false,
    titleDetail: {},
    id:'',
    lang: ''
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    getByQueryRtk: (state, action: PayloadAction<[]>) => {             
            state.queryResults = [...action.payload]           
    },
    getByQueryGenresRtk: (state, action: PayloadAction<[]>) => {             
            state.queryGenres = [...action.payload]           
    },
    getTopRatedRtk: (state, action: PayloadAction<[]>) => {             
            state.topRated = [...action.payload]           
    },
    getTrendingdRtk: (state, action: PayloadAction<[]>) => {             
            state.populares = [...action.payload]           
    },
    setQueryRtk: (state, action: PayloadAction<string>) => {             
            state.query = action.payload           
    },
    resetQueryRtk: (state) => {             
            state.queryResults = []           
    },
    resetQueryGenresRtk: (state) => {             
            state.queryGenres = []           
    },
    getGenerosRtk: (state, action: PayloadAction<{}>) => {             
            state.generos = {...action.payload}           
    },
    getByIdRtk: (state, action: PayloadAction<{}>) => {             
            state.titleDetail = {...action.payload}           
    },
    setNotFoundRtk: (state, action: PayloadAction<boolean>) => {    
            state.notFound = action.payload                     
    }
  }
})
// Action creators are generated for each case reducer function
export const { getByQueryRtk, 
               resetQueryRtk, 
               setQueryRtk,
               getByQueryGenresRtk,
               setNotFoundRtk,
               resetQueryGenresRtk,
               getGenerosRtk,
               getTopRatedRtk,
               getTrendingdRtk,
               getByIdRtk } = moviesSlice.actions

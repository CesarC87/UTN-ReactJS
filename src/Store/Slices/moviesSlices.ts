import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
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

const initialState: CounterState = {
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
    getByQueryRtk: (state, action: PayloadAction<any>) => {             
            state.queryResults = [...action.payload]           
    }
  }
})
// Action creators are generated for each case reducer function
export const { getByQueryRtk } = moviesSlice.actions

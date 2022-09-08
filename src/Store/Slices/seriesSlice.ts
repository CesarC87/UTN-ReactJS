import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SeriesState {
    series: any
}

const initialState: SeriesState = {
    series: []
}

export const seriesSlice = createSlice({
  name: 'series',
  initialState,
  reducers: {
    getSeriesRtk: (state, action: PayloadAction<[]>) => {             
            state.series = [...action.payload]           
    }
  }
})
// Action creators are generated for each case reducer function
export const { getSeriesRtk } = seriesSlice.actions
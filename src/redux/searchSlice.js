import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchImages = createAsyncThunk (
    "images/fetchImages",
    async (keyword) => {
      const url = keyword.trim()
        ? `https://api.unsplash.com/search/photos?page=1&query=${keyword}&per_page=20&client_id=${API_KEY}`
        : `${BASE_URL}/photos?client_id=${API_KEY}&per_page=20`;
  
      const response = await fetch(url);
      const data = await response.json();
      return data.results || data;
    }
);

const searchSlice = createSlice({
    name: "images",
    initialState: {
        keyword: "",
        results: [],
        loading: false,
        error: null
    },
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchImages.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            state.results = action.payload;
            state.loading = false;
        })
        .addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { setKeyword } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchImages = createAsyncThunk (
    "images/fetchImages",
    async ({keyword, page}) => {
      const url = keyword.trim()
        ? `${BASE_URL}/search/photos?page=${page}&query=${keyword}&per_page=20&client_id=${API_KEY}`
        : `${BASE_URL}/photos?page=${page}&per_page=20&client_id=${API_KEY}`;
  
      const response = await fetch(url);
      const data = await response.json();

      const images = keyword.trim() ? data.results : data;

      return {
        images,
        page,
      }
    }
);

const searchSlice = createSlice({
    name: "images",
    initialState: {
        keyword: "",
        results: [],
        page: 1,
        loading: false,
        error: null
    },
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        setPage: (state, action) => {
            state.page = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchImages.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchImages.fulfilled, (state, action) => {
            const { images, page } = action.payload;
            state.page = page;
            if (page === 1) {
              state.results = images;
            } else {
              state.results = [...state.results, ...images];
            }
            state.loading = false;
        })
        .addCase(fetchImages.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});

export const { setKeyword, setPage } = searchSlice.actions;
export default searchSlice.reducer;
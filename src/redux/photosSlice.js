import { createSlice } from "@reduxjs/toolkit";

const loadPhotosFromLocalStorage = () => {
    const savedPhotos = localStorage.getItem("savedPhotos");
    return savedPhotos ? JSON.parse(savedPhotos) : [];
};

const now = new Date();
const formattedDate = now.toLocaleDateString('es-ES');

const photosSlice = createSlice({
    name: "savedPhotos",
    initialState: loadPhotosFromLocalStorage(),
    reducers: {
        addPhoto: (state, action) => {
            const exists = state.find(photo => photo.id === action.payload.id)
            if (!exists) {
                const photoWithDate = {
                    ...action.payload,
                    savedAt: formattedDate
                }
                state.push(photoWithDate);
                localStorage.setItem("savedPhotos", JSON.stringify(state));
            }
        },
        removePhoto: (state, action) => {
            const newState = state.filter(photo => photo.id !== action.payload);
            localStorage.setItem("savedPhotos", JSON.stringify(newState));
            return newState;
        },
        removeAllPhotos: (state) => {
            localStorage.removeItem("savedPhotos"); 
            return [];
        }
    }
})

export const { addPhoto, removePhoto, removeAllPhotos } = photosSlice.actions;
export default photosSlice.reducer;
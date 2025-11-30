import { createSlice } from '@reduxjs/toolkit';

export type Theme = 'light' | 'dark';

interface UiState {
    theme : Theme;
    isSidebarCollapsed : boolean;
}

const initialState: UiState = {
  theme: 'light',
  isSidebarCollapsed: false,
};

const uiSlice = createSlice({
    name : 'ui',
    initialState,
    reducers : {
        toggleTheme : (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        },
        toggleSidebar : (state) => {
            state.isSidebarCollapsed = !state.isSidebarCollapsed
        }
    }
})

export const { toggleTheme, toggleSidebar } = uiSlice.actions;
export default uiSlice.reducer;
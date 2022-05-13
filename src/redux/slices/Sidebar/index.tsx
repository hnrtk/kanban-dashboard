import { createSlice } from '@reduxjs/toolkit';

interface SidebarState {
  open: boolean;
}

const initialState = { open: true } as SidebarState;

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    changeSidebarState(state) {
      state.open = !state.open;
    },
  },
});

export const { changeSidebarState } = sidebarSlice.actions;

export default sidebarSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { ModalsSliceProps } from './type';

const initialState: ModalsSliceProps = {
  animationState: 'firstRender',
  animationSecondaryState: 'animationClose',
  isOpenModal: false,
  isOpenDialog: null,
};

const modalsSlice = createSlice({
  name: 'modalsSlice',
  initialState,
  reducers: {
    firstRenderModal(state) {
      state.animationState = 'firstRender';
    },
    closeAnimationModals(state) {
      state.animationState = 'animationClose';
      state.animationSecondaryState = 'animationClose';
    },
    closeAllModals(state) {
      state.isOpenModal = false;
      state.isOpenDialog = null;
    },
    closeSecondaryModals(state) {
      state.animationSecondaryState = 'animationClose';
    },
    setIsOpenModal(state) {
      state.isOpenModal = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseModal(state) {
      state.isOpenModal = false;
      state.animationSecondaryState = 'animationClose';
    },
    toggleDialogForPresetsOpen(state, action) {
      state.isOpenDialog = action.payload;
    },
  },
});

export default modalsSlice.reducer;
export const {
  setIsOpenModal,
  closeAllModals,
  closeAnimationModals,
  closeSecondaryModals,
  setIsCloseModal,
  firstRenderModal,
  toggleDialogForPresetsOpen,
} = modalsSlice.actions;

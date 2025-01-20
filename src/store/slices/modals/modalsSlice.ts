import { createSlice } from '@reduxjs/toolkit';
import { ModalsSliceProps } from './type';

const initialState: ModalsSliceProps = {
  animationState: 'firstRender',
  animationSecondaryState: 'animationClose',
  isOpenModalCreateCategory: false,
  isOpenModalAddBanner: false,
  isOpenModalAddGeneralFont: false,
  isOpenModalAddColorFont: false,
  isOpenModalCreateNotification: false,
  isOpenModalViewNotification: false,
  isOpenModalTutorial: false,
  isOpenModalMediaForCategory: false,
  isOpenModalBWMediaForCategory: false,
  isOpenModalActualMediaForItem: false,
  isOpenModalPreviewMediaForItem: false,
  isOpenModalCreateGIFs: false,
  isOpenModalEditItem: false,
  isOpenModalSubcategoryItem: false,
  isOpenModaTransferPresetTo: false,
  isOpenModalUserStory: false,
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
      state.isOpenModalAddBanner = false;
      state.isOpenModalAddColorFont = false;
      state.isOpenModalAddGeneralFont = false;
      state.isOpenModalCreateNotification = false;
      state.isOpenModalViewNotification = false;
      state.isOpenModalTutorial = false;
      state.isOpenModalCreateCategory = false;
      state.isOpenModalMediaForCategory = false;
      state.isOpenModalBWMediaForCategory = false;
      state.isOpenModalActualMediaForItem = false;
      state.isOpenModalPreviewMediaForItem = false;
      state.isOpenModalEditItem = false;
      state.isOpenModalCreateGIFs = false;
      state.isOpenModalSubcategoryItem = false;
      state.isOpenModaTransferPresetTo = false;
      state.isOpenModalUserStory = false;
      state.isOpenDialog = null;
    },
    closeSecondaryModals(state) {
      state.animationSecondaryState = 'animationClose';
    },
    setIsOpenCreateTutorialModal(state) {
      state.isOpenModalTutorial = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseCreateTutorialModal(state) {
      state.isOpenModalTutorial = false;
      state.animationState = 'animationClose';
    },
    setIsOpenCreateNotificationModal(state) {
      state.isOpenModalCreateNotification = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseCreateNotificationModal(state) {
      state.isOpenModalCreateNotification = false;
      state.animationState = 'animationClose';
    },
    setIsOpenViewNotificationModal(state) {
      state.isOpenModalViewNotification = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseViewNotificationModal(state) {
      state.isOpenModalViewNotification = false;
      state.animationState = 'animationClose';
    },
    setIsOpenAddBannerModal(state) {
      state.isOpenModalAddBanner = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseAddBannerModal(state) {
      state.isOpenModalAddBanner = false;
      state.animationState = 'animationClose';
    },
    setIsOpenAddCategoryModal(state) {
      state.isOpenModalCreateCategory = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseAddCategoryrModal(state) {
      state.isOpenModalCreateCategory = false;
      state.animationState = 'animationClose';
    },
    setIsOpenAddGeneralFontModal(state) {
      state.isOpenModalAddGeneralFont = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseAddGeneralFontModal(state) {
      state.isOpenModalAddGeneralFont = false;
      state.animationState = 'animationClose';
    },
    setIsOpenAddColorFontModal(state) {
      state.isOpenModalAddColorFont = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseAddColorFontModal(state) {
      state.isOpenModalAddColorFont = false;
      state.animationState = 'animationClose';
    },
    setIsOpenModalMediaForCategory(state) {
      state.isOpenModalMediaForCategory = true;
      state.animationSecondaryState = 'animationOpen';
    },
    setIsCloseModalMediaForCategory(state) {
      state.isOpenModalMediaForCategory = false;
      state.isOpenModalBWMediaForCategory = false;
      state.isOpenModalPreviewMediaForItem = false;
      state.isOpenModalActualMediaForItem = false;
      state.animationSecondaryState = 'animationClose';
    },
    setIsOpenModalBWMediaForCategory(state) {
      state.isOpenModalBWMediaForCategory = true;
      state.animationSecondaryState = 'animationOpen';
    },
    setIsOpenModalActualMediaForItem(state) {
      state.isOpenModalActualMediaForItem = true;
      state.animationSecondaryState = 'animationOpen';
    },
    setIsOpenModalPreviewMediaForItem(state) {
      state.isOpenModalPreviewMediaForItem = true;
      state.animationSecondaryState = 'animationOpen';
    },
    setIsOpenModalEditItem(state) {
      state.isOpenModalEditItem = true;
      state.animationState = 'animationOpen';
    },
    setIsOpenModalCreateGIFItem(state) {
      state.isOpenModalCreateGIFs = true;
      state.animationState = 'animationOpen';
    },
    setIsOpenModalSubcategoryItem(state) {
      state.isOpenModalSubcategoryItem = true;
      state.animationState = 'animationOpen';
    },
    setIsOpenModalTransferPresetTo(state) {
      state.isOpenModaTransferPresetTo = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseModalTransferPresetTo(state) {
      state.isOpenModaTransferPresetTo = false;
      state.animationState = 'animationClose';
    },
    setIsOpenModalUserStory(state) {
      state.isOpenModalUserStory = true;
      state.animationState = 'animationOpen';
    },
    setIsCloseModalUserStory(state) {
      state.isOpenModalUserStory = false;
      state.animationState = 'animationClose';
    },
    toggleDialogForPresetsOpen(state, action) {
      state.isOpenDialog = action.payload;
    },
  },
});

export default modalsSlice.reducer;
export const {
  setIsOpenModalBWMediaForCategory,
  setIsOpenModalSubcategoryItem,
  closeAllModals,
  closeAnimationModals,
  closeSecondaryModals,
  setIsCloseAddBannerModal,
  setIsOpenAddBannerModal,
  setIsCloseAddColorFontModal,
  setIsCloseAddGeneralFontModal,
  setIsOpenAddColorFontModal,
  setIsOpenAddGeneralFontModal,
  setIsCloseCreateNotificationModal,
  setIsOpenCreateNotificationModal,
  setIsOpenViewNotificationModal,
  setIsCloseViewNotificationModal,
  setIsCloseCreateTutorialModal,
  setIsOpenCreateTutorialModal,
  setIsOpenModalCreateGIFItem,
  firstRenderModal,
  setIsCloseAddCategoryrModal,
  setIsOpenAddCategoryModal,
  setIsCloseModalMediaForCategory,
  setIsOpenModalMediaForCategory,
  setIsOpenModalActualMediaForItem,
  setIsOpenModalEditItem,
  setIsOpenModalPreviewMediaForItem,
  setIsCloseModalTransferPresetTo,
  setIsOpenModalTransferPresetTo,
  setIsCloseModalUserStory,
  setIsOpenModalUserStory,
  toggleDialogForPresetsOpen,
} = modalsSlice.actions;

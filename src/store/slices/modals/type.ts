import { behaviorPlugin } from '@testing-library/user-event/dist/keyboard/types';

export interface ModalsSliceProps {
  animationState: 'firstRender' | 'animationOpen' | 'animationClose';
  animationSecondaryState: 'firstRender' | 'animationOpen' | 'animationClose';
  isOpenModalCreateCategory: boolean;
  isOpenModalAddBanner: boolean;
  isOpenModalAddGeneralFont: boolean;
  isOpenModalAddColorFont: boolean;
  isOpenModalCreateNotification: boolean;
  isOpenModalViewNotification: boolean;
  isOpenModalTutorial: boolean;
  isOpenModalMediaForCategory: boolean;
  isOpenModalBWMediaForCategory: boolean;
  isOpenModalActualMediaForItem: boolean;
  isOpenModalPreviewMediaForItem: boolean;
  isOpenModalEditItem: boolean;
  isOpenModalSubcategoryItem: boolean;
  isOpenModalCreateGIFs: boolean;
  isOpenModaTransferPresetTo: boolean;
  isOpenModalUserStory: boolean;
  isOpenDialog: null | 'categories';
}

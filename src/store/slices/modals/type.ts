import { behaviorPlugin } from '@testing-library/user-event/dist/keyboard/types';

export interface ModalsSliceProps {
  animationState: 'firstRender' | 'animationOpen' | 'animationClose';
  animationSecondaryState: 'firstRender' | 'animationOpen' | 'animationClose';
  isOpenModal: boolean;
  isOpenDialog: null | 'categories';
}

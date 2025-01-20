export interface INotificationState {
  message: string | null;
  acceptionValue: boolean | null;
  isVisible: boolean;
  isAcceptionNeeded: boolean;
  errorType: boolean;
}

export interface INotificationProps {
  message: string | null;
  isAcceptionNeeded: boolean;
}

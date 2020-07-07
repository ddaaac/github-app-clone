import { atom } from 'recoil';

export const expoPushTokenState = atom({
  key: 'expoPushTokenState',
  default: '',
});

export const notificationState = atom({
  key: 'notificationState',
  default: false,
});


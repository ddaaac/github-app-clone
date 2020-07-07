import { atom, selector } from 'recoil';
import axios from 'axios';
import Secret from '../Secret';

const BASE_URL = 'https://api.github.com';
const AUTHORIZATION = `Token ${Secret}`;

const _userInfoTrigger = atom({
  key: 'userInfoTrigger',
  default: 0,
});

export const getUserInfo = selector({
  key: 'getUserInfo',
  get: async ({ get }) => {
    get(_userInfoTrigger);
    const response = await axios({
      method: 'get',
      baseURL: BASE_URL,
      url: '/user',
      headers: { 'Authorization': AUTHORIZATION },
    });
    return response.data;
  },
  set: ({ set }) => {
    set(_userInfoTrigger, v => v + 1);
  },
});

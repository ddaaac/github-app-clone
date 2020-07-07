import { atom, selector } from 'recoil';
import axios from 'axios';
import Secret from '../Secret';
import { getUserInfo } from './User';

const BASE_URL = 'https://api.github.com';
const AUTHORIZATION = `Token ${Secret}`;

const _repositoriesTrigger = atom({
  key: 'repositoriesTrigger',
  default: 0,
});

export const getRepositories = selector({
  key: 'getRepositories',
  get: async ({ get }) => {
    get(_repositoriesTrigger);
    const { login } = get(getUserInfo);
    const response = await axios({
      method: 'get',
      baseURL: BASE_URL,
      url: `/users/${login}/repos`,
      headers: { 'Authorization': AUTHORIZATION },
    });
    return response.data;
  },
  set: ({ set }) => {
    console.log("repository setter!e")
    set(_repositoriesTrigger, v => v + 1);
  }
});

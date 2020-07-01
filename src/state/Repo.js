import { atom, selector } from 'recoil';
import axios from 'axios';
import Secret from '../Secret';
import { getUserInfo } from './User';

const BASE_URL = 'https://api.github.com';
const AUTHORIZATION = `Token ${Secret}`;

const _repositoriesTrigger = atom({
  key: 'repositoriesTrigger',
  default: false,
});

export const getRepositories = selector({
  key: 'getRepositories',
  get: async ({ get }) => {
    get(_repositoriesTrigger);
    const { login } = get(getUserInfo);
    console.log(login);
    const response = await axios({
      method: 'get',
      baseURL: BASE_URL,
      url: `/users/${login}/repos`,
      headers: { 'Authorization': AUTHORIZATION },
    });
    console.log("Repository triggered!")
    console.log(response.data);
    return response.data;
  },
  set: ({ set }) => {
    set(_repositoriesTrigger, v => !v);
  }
});

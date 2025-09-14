import axios from 'axios';

const url = import.meta.env.VITE_FAKE_API_URL;

const fakeApi = axios.create({
  baseURL: url
});

//TODO APLICAR INTERCEPTORES

export { fakeApi }
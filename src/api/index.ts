import axios from 'axios';

const apiMapasSaude = axios.create({
  baseURL: process.env.MAPAS_URL,
  headers: {
    authorization: process.env.MAPAS_JWT,
    'MapasSDK-REQUEST': 'true',
  },
});

const apiSACS = axios.create({
  baseURL: process.env.SACS_URL,
  headers: {
    Authorization: process.env.SACS_JWT,
  },
});

const apiSAGU = axios.create({
  baseURL: process.env.MAPAS_URL,
  headers: {
    authorization: process.env.MAPAS_JWT,
    'MapasSDK-REQUEST': 'true',
  },
});

export { apiMapasSaude, apiSACS, apiSAGU };

export type EnviromentVariables = {
  server: string;
  base_url: string;
};

export type Enviroment = "production" | "development";
const NODE_ENV: string = "development";

const BASE_URL_LIVE = "";

const SERVER_ADDRESS_LIVE = `${BASE_URL_LIVE}`;

const LIVE: EnviromentVariables = {
  server: SERVER_ADDRESS_LIVE,
  base_url: BASE_URL_LIVE,
};
const ACTIVE = LIVE;

export { NODE_ENV, BASE_URL_LIVE, LIVE, ACTIVE };

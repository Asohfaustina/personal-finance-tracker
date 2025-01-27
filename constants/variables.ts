export type EnvironmentVariables = {
	server: string;
	base_url: string;
};

export type Environment = "production" | "development";
const NODE_ENV: string = "production";
const SERVICE_ENV = "production";

const BASE_URL_LIVE = "https://finance-tracker-server-qaj6.onrender.com";
const BASE_URL_LOCAL = "http://localhost:8080";
const SERVER_ADDRESS_LIVE = `${BASE_URL_LIVE}`;

const SERVER_ADDRESS_LOCAL = `${BASE_URL_LOCAL}`;

const LIVE: EnvironmentVariables = {
	server: SERVER_ADDRESS_LIVE,
	base_url: BASE_URL_LIVE,
};

const LOCAL: EnvironmentVariables = {
	server: SERVER_ADDRESS_LOCAL,
	base_url: BASE_URL_LOCAL,
};

const ACTIVE = NODE_ENV === "production" ? LIVE : LOCAL;

export { NODE_ENV, BASE_URL_LIVE, LIVE, LOCAL, ACTIVE, SERVICE_ENV };

import axios from "axios";

export const createUser = async (payLoad) => {
  const createUserEndpoint = `${API_URL_V1}/add`;

  const res = await axios.post(createUserEndpoint, payLoad);

  return res;
};

export const retriveUser = async (userId) => {
  const getUserEndpoint = `${API_URL_V1}/get/${userId}`;

  const res = await axios.get(`${getUserEndpoint}`);

  return res;
};

export const retrieveAllUsers = async () => {
  const getAllUsersEndpoint = `${API_URL_V1}/all`;

  const res = await axios.get(getAllUsersEndpoint);

  return res;
};

import { getLocalStorage } from "./encrypted-storage";

export const getAuthHeader = () => {
  const token = getLocalStorage("token");
  let header = {};

  if (token) {
    header = {
      Authorization: `${token}`,
    };
  }

  return header;
};

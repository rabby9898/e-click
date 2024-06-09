import AxiosSecure from "./AxiosSecure";

export const createUser = async () => {
  const { data } = await AxiosSecure.post("/api/signup");
  return data;
};

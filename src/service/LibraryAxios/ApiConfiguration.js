
const getToken = () => {
  return localStorage.getItem("Token");
};
export const HeaderDetail = () => {
   return {
    headers: {
      Authorization: getToken(),
      "Content-Type": "application/json",
    },
  };
};
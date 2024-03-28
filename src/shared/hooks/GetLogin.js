import { PostAxios } from "../../service/LibraryAxios/LibraryAxios";
import { BASE_URL } from "../../environment/Environment";
import {
  LOGIN_URL,
  USER_DETAIL,
} from "../../environment/LocalPathEnvironment";

 const GetLogin = async (loginDetail) => {
  const UserLoginUrl = BASE_URL + USER_DETAIL + LOGIN_URL;
  console.log("Enter");
  return await PostAxios(UserLoginUrl, loginDetail)
    .then((res) => {
      saveTokenInLocalStorage(res.data.accessToken);
      window.location.href = "/library/home";
    })
    .catch((error) => {
      alert(error.response.data.message);
    });
};
const saveTokenInLocalStorage = (token) => {
  localStorage.setItem("Token", "Bearer " + token);
  localStorage.setItem("IsToken", true);
};
export default GetLogin;

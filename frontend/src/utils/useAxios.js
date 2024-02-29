import axios from "axios";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://localhost:8000/user/";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: authTokens?.access ? `Bearer ${authTokens.access}` : "", // Asegúrate de que authTokens y authTokens.access no sean nulos
    },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!authTokens || !authTokens.access) {
      return req; // No hay token de acceso, no hagas nada
    }

    const user = jwtDecode(authTokens.access);
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 3;

    if (!isExpired) return req;

    try {
      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh,
      });

      localStorage.setItem("authTokens", JSON.stringify(response.data));
      setAuthTokens(response.data);
      setUser(jwtDecode(response.data.access));

      req.headers.Authorization = `Bearer ${jwtDecode(response.data.access)}`;
      return req;
    } catch (error) {
      console.error("Error al intentar refrescar el token:", error);
      // Manejar el error de manera apropiada según tus necesidades
      return req;
    }
  });

  return axiosInstance;
};

export default useAxios;

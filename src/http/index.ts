import axios,{ AxiosResponse } from "axios";
import { error } from "console";
import { config } from "process";
import { AuthResponse } from "../models/response/AuthResponse";

const $host = axios.create({
   baseURL: process.env.REACT_APP_API_URL
})

const $api = axios.create({
   withCredentials: true,
   baseURL: process.env.REACT_APP_API_URL
})

$api.interceptors.request.use((config) => {
   config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
   return config
})

$api.interceptors.response.use(
   (config) => {
      return config;
   },
   async (error) => {
      const originalRequest = error.config;

      if (error.response.status === 401 && error.config && !error.config._isRetry) {
         originalRequest._isRetry = true;
         try {
            const response = await axios.get<AuthResponse>(`${process.env.REACT_APP_API_URL}api/user/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest)
         } catch (refreshError) {
            // Обработка ошибок при обновлении токена
            console.error('Не авторизован!Ошибка при обновлении токена:', refreshError);
         }
      }
      return Promise.reject(error);
   }
);
 
export {
   $api,
   $host
}
/*const $host = axios.create({
   baseURL: process.env.REACT_APP_API_URL
})

const $authHost = axios.create({
   baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
   config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
   return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
   $host,
   $authHost
}*/

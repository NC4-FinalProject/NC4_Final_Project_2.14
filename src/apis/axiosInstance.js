// import axios from 'axios';
//
// const API_URL = "http://localhost:9090";
//
// const axiosInstance = axios.create({
//   baseURL: API_URL,
// });
//
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = sessionStorage.getItem('ACCESS_TOKEN');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
//
// export default axiosInstance;
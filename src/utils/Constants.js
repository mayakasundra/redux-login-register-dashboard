const API_URL = `${process.env.REACT_APP_API_URL}`;
const auth_local_storage_token = localStorage.getItem("token");

export { API_URL, auth_local_storage_token };

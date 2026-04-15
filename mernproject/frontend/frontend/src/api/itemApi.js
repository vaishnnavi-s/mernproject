import API from "./axios";

export const getItems = () => API.get("/items");
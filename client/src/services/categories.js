import api from "./apiConfig";

export const getAllCategories = async () => {
  const resp = await api.get("/categories");
  return resp.data;
};

export const addCategoryToPost = async (categoryId, postId) => {
  const resp = await api.put(`/categories/${categoryId}/posts/${postId}`);
  return resp.data;
};

export const getOneCategory = async (id) => {
  const resp = await api.get(`/categories/${id}`);
  return resp.data;
};
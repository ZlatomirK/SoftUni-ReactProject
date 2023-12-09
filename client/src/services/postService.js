import request from "../lib/request";

const baseUrl = "http://localhost:3030/posts";

export const getAll = async () => {
  const result = await request.get(baseUrl);

  return result;
};

export const getOne = async (postId) => {
  const result = await request.get(`${baseUrl}/${postId}`);

  return result;
};

export const create = async (postData) => {
  const result = await request.post(`${baseUrl}/create`, postData);

  return result;
};

export const edit = async (postId, postData) => {
  const result = await request.put(`${baseUrl}/${postId}`, postData);

  return result;
};

export const remove = async (postId) => request.get(`${baseUrl}/${postId}/delete`);

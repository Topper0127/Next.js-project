import http from "../utils/http-common";

const getAll = (data) => {
  return http.post("/job/list",data);
};

const create = data => {
  return http.post(`/job/post`,data);
};


const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = id => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByEmail = email => {
  return http.get(`/users?email=${email}`);
};

const signup = data => {
  return http.post("/auth/signup", data);
};

const login = data => {
  return http.post("/auth/login", data);
}

const googleAuth = (data) => {
  return  http.post("/auth/google", data);
}

const userservice = {
  getAll,
  signup,
  update,
  remove,
  removeAll,
  findByEmail,
  login,
  create,
  googleAuth
};

export default userservice;
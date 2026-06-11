const BASE_URL = 'http://localhost:8000';

const getHeaders = (token) => ({
  'Content-Type': 'application/json',
  ...(token ? { Authorization: `Bearer ${token}` } : {})
});

export const authAPI = {
  login: (email, password) => fetch(`${BASE_URL}/api/auth/login`, { method: 'POST', headers: getHeaders(), body: JSON.stringify({ email, password }) }).then(r => r.json()),
  register: (data) => fetch(`${BASE_URL}/api/auth/register`, { method: 'POST', headers: getHeaders(), body: JSON.stringify(data) }).then(r => r.json()),
  logout: (token, refreshToken) => fetch(`${BASE_URL}/api/auth/logout`, { method: 'POST', headers: getHeaders(token), body: JSON.stringify({ refreshToken }) }).then(r => r.json()),
};

export const productAPI = {
  getAll: (params = {}) => {
    const q = new URLSearchParams(params).toString();
    return fetch(`${BASE_URL}/api/products?${q}`).then(r => r.json());
  },
  getById: (id) => fetch(`${BASE_URL}/api/products/${id}`).then(r => r.json()),
  getByCategory: (category, params = {}) => {
    const q = new URLSearchParams(params).toString();
    return fetch(`${BASE_URL}/api/products/category/${category}?${q}`).then(r => r.json());
  },
};

export const orderAPI = {
  create: (token, data) => fetch(`${BASE_URL}/api/orders`, { method: 'POST', headers: getHeaders(token), body: JSON.stringify(data) }).then(r => r.json()),
  getMyOrders: (token) => fetch(`${BASE_URL}/api/orders`, { headers: getHeaders(token) }).then(r => r.json()),
  getById: (token, id) => fetch(`${BASE_URL}/api/orders/${id}`, { headers: getHeaders(token) }).then(r => r.json()),
};

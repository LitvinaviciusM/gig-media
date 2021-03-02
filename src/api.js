const fetch = require('node-fetch'); 

const baseApiUrl = 'http://207.154.254.31/api';
const token = 'J5fcMi5oSnXZHzPQmNGbQUyfTqkfE4voGm3oowk2GYWp6vw9TUlwG5c1To6OU8sSHBvFJ';

const http = async (path, method, body) => {
  try {
    const res = await fetch(baseApiUrl + path, {
      method,
      headers: { token },
      ...body ? { body } : {},
    });
    if (res.ok) {
      const body = await res.json();
      return body;
    } else {
      // TODO
    }
  } catch (err) {
    // TODO
  }
};

export const getCompanyValues = language => http(`/company-values?language=${language}`, 'GET');

export const getOffices = () => http('/offices', 'GET');
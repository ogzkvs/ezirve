import settings from './settings';

const get = query => {
  return fetch(settings.api + query, {
    method: 'GET',
  }).then(response => {
    return response.json();
  });
};

const getLogin = query => {
  return fetch(settings.getLogin + query, {
    method: 'GET',
  }).then(response => {
    return response.json();
  });
};

export {get, getLogin};

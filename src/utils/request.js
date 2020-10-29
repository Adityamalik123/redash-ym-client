import fetch from 'isomorphic-fetch';
import { Modal } from 'antd';

// eslint-disable-next-line no-unused-vars

function statusMiddleware(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    Modal.warning({
      title: 'Invalid session',
      content: 'Please login to continue',
      onOk: () => {
        setTimeout(() => {
          window.location = '/user/login';
          window.showUnauthorized = false;
        }, 200);
      },
    });
  }
  const error = new Error(response.statusText || response.error);
  error.response = response;
  throw error;
}

export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };

  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    newOptions.headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }

  // if(window.location && window.location.pathname) {
  //   let path = window.location.pathname;
  //   path = path.slice(0,path.length-1);
  //   url = `${path}${url}`;
  // }

  return fetch(url, newOptions)
    .then(statusMiddleware)
    .then((response) => {
      return response.json();
    });
}

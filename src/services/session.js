import request from 'utils/request';

export async function getSession(refresh) {
  return request(`/api/sso/session?${refresh ? 'refresh=true' : ''}`);
}

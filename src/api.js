/* eslint-disable camelcase */
import axios from 'axios';
import { mockData } from './mock-data';

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_
        token=${accessToken}`,
  )
    .then((res) => res.json())
    .catch((error) => error.json());
  return result;
};

const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  // eslint-disable-next-line camelcase
  const { access_token } = await fetch(
    `https://bwfk4ydyl6.execute-api.us-east-1.amazonaws.com/dev/api/token/${
      encodeCode}`,
  )
    .then((res) => res.json())
    .catch((error) => console(error));
  // eslint-disable-next-line no-unused-expressions
  access_token && localStorage.setItem('access_token', access_token);

  return access_token;
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get('code');
    if (!code) {
      const results = await axios.get(
        'https://bwfk4ydyl6.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url',
      );
      const { authUrl } = results.data;
      // eslint-disable-next-line no-return-assign
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }

  return accessToken;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    const newurl = `${window.location.protocol
    }//${
      window.location.host
    }${window.location.pathname}`;
    window.history.pushState('', '', newurl);
  } else {
    const newurl = `${window.location.protocol}//${window.location.host}`;
    window.history.pushState('', '', newurl);
  }
};

export const extractLocations = (events) => {
  // eslint-disable-next-line no-shadow
  const extractLocations = events.map((event) => event.location);
  // eslint-disable-next-line prefer-const
  let locations = [...new Set(extractLocations)];
  return locations;
};

// eslint-disable-next-line consistent-return
export const getEvents = async () => {
  if (window.location.href.startsWith('http://localhost')) {
    return mockData;
  }
  if (!navigator.onLine) {
    const data = localStorage.getItem('lastEvents');
    // eslint-disable-next-line no-undef
    NProgress.done();
    // eslint-disable-next-line no-undef
    return data ? JSON.parse(events).events : [];
  }

  const token = await getAccessToken();
  if (token) {
    removeQuery();
    const url = `https://bwfk4ydyl6.execute-api.us-east-1.amazonaws.com/dev/api/get-events/${token}`;
    const result = await axios.get(url);
    if (result.data) {
      const locations = extractLocations(result.data.events);
      localStorage.setItem('lastEvents', JSON.stringify(result.data));
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    return result.data.events;
  }
};

export { checkToken };

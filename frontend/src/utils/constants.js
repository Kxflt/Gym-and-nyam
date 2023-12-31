export const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*()\-=_+{};':"|,.<>/?`~]).*$/;

export const MAX_LENGTH_STRING = 100;

export const MIN_LENGTH_STRING = 3;

export const TOKEN_LOCAL_STORAGE_KEY = 'authToken';

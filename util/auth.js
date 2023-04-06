import axios from "axios";

const API_KEY = "AIzaSyDvUskjmHbhTQqPmrfOZ5VAM2QfFSMlYIU";

// signup / sign in fxn
async function authenticate(mode, email, password) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;

  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });

  const token = response.data.idToken;

  return token;
}

// create a new user
export async function createUser(email, password) {
  return await authenticate("signUp", email, password);
}

// log a user in
export async function login(email, password) {
  return authenticate("signInWithPassword", email, password);
}

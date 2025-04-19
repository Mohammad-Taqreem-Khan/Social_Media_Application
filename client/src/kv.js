// Base URL from environment variable
const BASE = import.meta.env.VITE_API_BASE_URL;

// Routes
export const postLogin = `${BASE}/api/auth/login`;
export const postSignup = `${BASE}/api/auth/signup`;
export const postCreateProfile = `${BASE}/api/user/createprofile`;
export const getMe = `${BASE}/api/user/me`;
export const postCreateContact = `${BASE}/api/contact/createcontact`;
export const postGetProfile = `${BASE}/api/user/getprofile`;
export const postSavePost = `${BASE}/api/post/savepost`;
export const getFeed = `${BASE}/api/post/getfeed`;
export const postGetUserPost = `${BASE}/api/post/userpost`;
export const postIsFollowing = `${BASE}/api/contact/isfollowing`;
export const postFollow = `${BASE}/api/contact/follow`;
export const postUnFollow = `${BASE}/api/contact/unfollow`;
export const postUploadStauts = `${BASE}/api/status/uploadstatus`;
export const getStauts = `${BASE}/api/status/getStatus`;
export const getFollowers = `${BASE}/api/contact/getfollowers`;
export const getNotification = `${BASE}/api/contact/getnotification`;
export const getContacts = `${BASE}/api/contact/getcontacts`;
export const postMsg = `${BASE}/api/msg/savemsg`;
export const getMsg = `${BASE}/api/msg/getmsg`;

// User / auth
export const TOKEN = localStorage.getItem("TOKEN");
export const USERNAME = localStorage.getItem("USERNAME");
export const USER_PROFILE = JSON.parse(localStorage.getItem("USER_PROFILE"));
export const CONTACTS = JSON.parse(localStorage.getItem("CONTACTS"));

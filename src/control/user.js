import { cleanAndReload } from "../functions/navigatorFunctions";

let _data = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {
      loggedIn: false,
      name: null
    };

const User = {
  authenticated: () => _data.loggedIn,
  info: () => ({
    name: _data.name
  }),
  logout: () => {
    _data.loggedIn = false;
    cleanAndReload();
  },
  setUserInfo: json => {
    _data.name = json.name;
    _data.loggedIn = true;
  },
  authenticate: userInfo => {
    User.setUserInfo({ userInfo });
    localStorage.setItem("userInfo", JSON.stringify(_data));
    return true;
  }
};

Object.freeze(User);

export default User;

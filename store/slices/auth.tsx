import jwtDecode from "jwt-decode";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Dispatch } from "redux";
import { AppDispatch } from "../index";
import axios from "axios";

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  user: object | null;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string | null;
  city: string | null;
  state: string | null;
  country: string | null;
  zipCode: string | null;
  userName: string | null;
  email: string | null;
}

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  user: {},
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    getInitialize(state, action: PayloadAction<any>) {
      state.isLoading = false;
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
    },
    login(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    register(state, action: PayloadAction<any>) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export default slice.reducer;

// ----------------------------------------------------------------------

const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }
  const decoded: any = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;

  return decoded.exp > currentTime;
};

const setSession = (accessToken: string | null) => {
  if (accessToken) {
    localStorage.setItem("accessToken", accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem("accessToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

// ----------------------------------------------------------------------

export function login(params: { userName: string; password: string }) {
  return async (dispatch: AppDispatch) => {
    // const response = await axios.post(`${process.env.API_URL}/api/User/login`, {
    //   userName: params.userName,
    //   password: params.password,
    // });
    console.log('process.env.API_URL ===> ', process.env.API_URL);
    const response = await axios.post(`${process.env.API_URL}/api/User/login`, {
      userName: params.userName,
      password: params.password,
    });
    const { token, user } = response.data;
    setSession(token);
    dispatch(slice.actions.login({ user }));
  };
}

// ----------------------------------------------------------------------

export function logout() {
  return async (dispatch: AppDispatch) => {
    setSession(null);
    dispatch(slice.actions.logout());
  };
}

// ----------------------------------------------------------------------

export function getInitialize() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);

        type Decoded = {
          UserInformation: string;
        };
        const decoded: Decoded = jwtDecode(accessToken);

        const user: User = JSON.parse(decoded.UserInformation);

        console.log("user->>>", user);

        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: true,
            user: user,
          })
        );
      } else {
        dispatch(
          slice.actions.getInitialize({
            isAuthenticated: false,
            user: null,
          })
        );
      }
    } catch (error) {
      console.error(error);
      dispatch(
        slice.actions.getInitialize({
          isAuthenticated: false,
          user: null,
        })
      );
    }
  };
}

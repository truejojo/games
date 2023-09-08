import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "@/config";
import { throwErrorMessage } from "@/helper/error-message";

const state = {
  user: null,
  isUser: false,
};

const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_IS_USER(state, payload) {
    state.isUser = payload;
  },
};

const actions = {
  async register(_, { email, password, name }) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
        name
      );
      await updateProfile(userCredential.user, { displayName: name });
    } catch (error) {
      throwErrorMessage(error.code);
    }
  },

  async logIn(_, { email, password }) {
    try {
      await setPersistence(auth, browserLocalPersistence);
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throwErrorMessage(error.code);
    }
  },

  async logOut() {
    try {
      await signOut(auth);
    } catch (error) {
      throwErrorMessage(error.code);
    }
  },

  onAuthStateChangedUser(context) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        context.commit("SET_USER", user);
        context.commit("SET_IS_USER", true);
        console.log(user);
      } else {
        context.commit("SET_USER", null);
        context.commit("SET_IS_USER", false);
      }
    });
  },

};

const getters = {
  userName: (state) => state.user.displayName,
  userEmail: (state) => state.user.email,
  userId: (state) => state.user.uid,
  userAccessToken: (state) => state.user.accessToken,
  userExpirationTime: (state) => state.user.stsTokenManager.expirationTime,
  isUser: (state) => state.isUser,
};

const authModule = {
  mutations,
  actions,
  getters,
};

export default authModule;

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";



let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you", likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      newPostText: "it-kamasutra",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Vadick" },
        { id: 2, name: "Alina" },
        { id: 3, name: "Chesterok" },
        { id: 4, name: "Puppy" },
        { id: 5, name: "Another Puppy" },
        { id: 6, name: "Another cat" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Mew Mew" },
        { id: 3, message: "Bark Bark" },
        { id: 4, message: "Bark Bark" },
        { id: 5, message: "Bark Bark" },
        { id: 6, message: "Bark Bark" },
      ],
      newMessageBody: "",
    },

    sideBar: {
      friends: [
        { id: 1, name: "Goga" },
        { id: 2, name: "Voga" },
        { id: 3, name: "Doga" },
      ],
    },
  },
  _callSubscriber() {
    console.log("hi");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);

  },
};



export default store;
window.store = store;

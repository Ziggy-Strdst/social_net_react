const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY: {
      return { ...state, newMessageBody: action.body };
    }
    case SEND_MESSAGE: {
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 7, message: body }],
      };
    }
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;

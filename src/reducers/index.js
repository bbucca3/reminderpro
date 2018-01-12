import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

// helper function for adding within reducer
const reminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate
  }
}
// helper function for removing
const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  console.log('new reduced reminders', reminders)
  return reminders;
}
// reducer
const reminders = (state = [], action) => {
  let reminders = null;
  switch(action.type) {
    case ADD_REMINDER:
      reminders = [...state, reminder(action)];
      console.log('reminders as state: ', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      return reminders;
    case CLEAR_REMINDERS:
        reminders = [];
        console.log('clearing reminders as state: ', reminders);
        return reminders;
    default:
        return state;
  }
}

export default reminders;

import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../constants';

export const addReminder = (text, dueDate) => {
  const action = {
    type: ADD_REMINDER,
    text, // es6 shorthand for text: text
    dueDate
  }
  console.log('action in addReminder', action);
  return action;
}

export const deleteReminder = (id) => {
  const action = {
    type: DELETE_REMINDER,
    id
  }
  console.log('delete action: ', action);
  return action;
}

export const clearReminders = () => {
  const action = {
    type: CLEAR_REMINDERS
  }
  console.log('action in clearReminders: ', action);
  return action;
}

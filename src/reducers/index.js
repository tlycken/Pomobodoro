import {combineReducers} from 'redux';

export default function (state = {
  times: { // all in minutes
    pomodoro: 12,
    shortBreak: 1,
    longBreak: 5
  },
  mobsters: [
    'alice', 'bob'
  ],
  current: {
    stage: 'pause', // pause, start, pomodoro, short-break
    // long-break
    mobster: 'bob', // one from mobsters list in settings
    timeLeft: 542 // seconds
  }
}) {
  return state;
}
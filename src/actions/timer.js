import * as types from './types';

export function pause() {
  return { type: types.PAUSE_TIMER };
}

export function start() {
  return { type: types.START_TIMER };
}
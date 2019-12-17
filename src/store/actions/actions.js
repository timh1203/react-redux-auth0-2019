import * as ACTION_TYPES from './action.types'

export const SUCCESS = {
  type: ACTION_TYPES.SUCCESS
}

export const FAILURE = {
  type: ACTION_TYPES.FAILURE
}

export const success = () => {
  return (
    ACTION_TYPES.SUCCESS
  )
}

export const failure = () => {
  return (
    ACTION_TYPES.FAILURE
  )
}

export const user_input = (payload) => {
  return {
    type: ACTION_TYPES.USER_INPUT,
    payload
  }
}

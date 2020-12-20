import { playerStrings } from "../../Utils/Strings/strings"

const { playbarActionTypes } = require("./actionTypes")

export const playMusic = (data) => ({
    type: playbarActionTypes.PLAY,
    payload: data
})

export const pauseMusic = (data) => ({
    type: playbarActionTypes.PAUSE,
    payload: data
})

export const loopMusic = (data) => ({
    type: playbarActionTypes.LOOP,
    payload: data
})

export const startTime = (data) => ({
    type: playbarActionTypes.START_TIME,
    payload: data
})

export const musicDuration = (data) => ({
    type: playbarActionTypes.DURATION,
    payload: data
})

export const showTime = (data) => ({
    type: playbarActionTypes.SHOW_TIME,
    payload: data
})
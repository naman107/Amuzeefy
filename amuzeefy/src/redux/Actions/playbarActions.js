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
﻿export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload
    },
    setFetchTimestamp(state) {
        state.FetchTimestamp = new Date().getTime();
    }
}
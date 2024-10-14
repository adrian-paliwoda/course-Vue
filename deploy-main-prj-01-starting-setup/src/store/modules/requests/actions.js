export default {
    async contactCoach(context, payload) {
        const newRequest = {
            // id: new Date().toISOString(),
            coachId: payload.coachId,
            userEmail: payload.email,
            message: payload.message
        }

        const response = await fetch(`https://vueapp-c604d-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(newRequest)
        });

        const responseData = await response.json();
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        newRequest.coachId = payload.coachId;
        newRequest.id = responseData.name;
        
        context.commit("addRequest", newRequest);
    },
    
    async loadRequests(context) {
        const token = context.rootGetters.token;
        const response = await fetch(`https://vueapp-c604d-default-rtdb.firebaseio.com/requests/${context.rootGetters.userId}.json?auth=${token}`, {
            method: 'GET',
        });

        const responseData = await response.json();
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }

        const requests = [];

        for(const key in responseData) {
            const newRequest = {
                id: key,
                coachId: responseData[key].coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }

            requests.push(newRequest);
        }

        context.commit('setRequests', requests);
    }
}
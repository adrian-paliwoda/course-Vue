export default {
    registerCoach(context, payload) {
        const userId = context.rootGetters.userId;
        const coachData = {
            firstName: payload.first,
            lastName: payload.last,
            description: payload.desc,
            hourlyRate: payload.rate,
            areas: payload.areas
        }

        
        context.commit('registerCoach', {
            ...coachData,
            id: userId
        });
    },
    
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate)
        {
            return;
        }
        
        const response = await fetch(`https://vueapp-c604d-default-rtdb.firebaseio.com/coaches.json`, {
        // const response = await fetch(`https://vueapp-c604d-default-rtdb.fiebaseio.com/coaches.json`, {
            method: 'GET',
        });

        const responseData = await response.json();
        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch!');
            throw error;
        }
        
        const coaches = [];
        
        for(const key in responseData) {
            const coachData = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            
            coaches.push(coachData);
        }
        
        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
}
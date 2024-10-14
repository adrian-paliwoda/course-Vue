let timer;
export default {
    async login(context, payload){
        await context.dispatch('auth', {
            ...payload,
            mode: 'login'
        });
    },
    
    async signup(context, payload){
        await context.dispatch('auth', {
            ...payload,
            mode: 'singUp'
        });
    },
    logout(context){
        context.commit("setUser", {
            token: null,
            userId: null
        });
        
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');
        
        clearTimeout(timer);
    },
    tryLogin(context){
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        
        const expiresIn = +tokenExpiration - new Date().getTime();
        
        if (expiresIn < 0){
            return;
        }
        
        timer = setTimeout(function () {
            context.dispatch('autoLogout')
        }, expiresIn)
        
        if (token && userId){
            context.commit('setUser', {
                token: token,
                userId: userId
            });
        }
    },
    async auth(context, payload){
        const mode = payload.mode;
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsDc4E-O5FRayTV6FvX19pR7UMDa6ywmk";
        if (mode === 'singUp'){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsDc4E-O5FRayTV6FvX19pR7UMDa6ywmk";
        }
        
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: payload.email,
                password: payload.password,
                returnSecureToken: true
            })
        });

        const responseDate = await response.json();
        if(!response.ok){
            throw new Error(responseDate.message || "Fail during sending signup request");
        }

        const expirationDate = new Date().getTime() + (+(responseDate.expiresIn * 1000));
        // const expirationDate = 5000;
        
        localStorage.setItem('token', responseDate.token);
        localStorage.setItem('userId', responseDate.localId);
        localStorage.setItem('tokenExpiration', expirationDate);
        
        timer = setTimeout(function () {
            context.dispatch('autoLogout');
        }, responseDate.expiresIn);
        
        context.commit('setUser', {
            token: responseDate.idToken,
            userId: responseDate.localId,
            tokenExpiration: expirationDate
        });
    },
    autoLogout(context){
        context.dispatch('logout');
        context.commit('didLogout');
    }
}
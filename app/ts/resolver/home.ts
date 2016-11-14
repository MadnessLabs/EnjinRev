/// <reference path="../../typings/index.d.ts"/>
class HomeResolver {
    constructor() {
        return {
            currentAuth: this.currentAuth
        };
    }
    
    currentAuth(enjin) {
        return enjin.auth.instance.$requireSignIn();
    }
}
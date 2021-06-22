// This class is singleton to handle login/logout tracking.
class Authentication {
    constructor() {
        this.isAuthenticated = true;
    }

    logIn(callback) {
        this.isAuthenticated = true;
        callback();
    }

    logOut(callback) {
        this.isAuthenticated = false;
        callback();
    }
}

export default new Authentication();
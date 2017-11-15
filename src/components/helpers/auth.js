import {auth, provider} from "../config/firebase";

//var accessToken;
//var accessTokenSecret;

export function loginWithTwitter() {

    return auth.signInWithPopup(provider)
}

function authenticate(promise) {
    return promise
        .then(function (result) {
            // login with your app with result object to get accessToken (token)
            // localStorage.save(token);
            var token = result.credential.accessToken;
            var user = result.user;
            console.log("login happened with firebase, ", JSON.stringify(user));
            localStorage.setItem("firebaseUser", JSON.stringify(result));
            return Promise.resolve(result);
        }).catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            alert("failed firebase login" + error);
            return Promise.reject("err");
        });
}

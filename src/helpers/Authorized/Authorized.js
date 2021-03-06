import React from 'react';
// import { FullPageSpinner } from 'components/FullPageSpinner/FullPageSpinner';
const AuthContext = React.createContext();

function AuthProvider(props) {
  // code for pre-loading the user's information if we have their token in
  // localStorage goes here
  // 🚨 this is the important bit.
  // Normally your provider components render the context provider with a value.
  // But we post-pone rendering any of the children until after we've determined
  // whether or not we have a user token and if we do, then we render a spinner
  // while we go retrieve that user's information.
  // if (weAreStillWaitingToGetTheUserData) {
  //   return <FullPageSpinner />
  // }
  const login = () => {
  }; // make a login request
  const register = () => {
  }; // register the user
  const logout = () => {
  }; // clear the token in localStorage and the user data
  // note, I'm not bothering to optimize this `value` with React.useMemo here
  // because this is the top-most component rendered in our app and it will very
  // rarely re-render/cause a performance problem.
  return (
    <AuthContext.Provider
      value={{
        session:
            {"username":"essent","name":"Essent","id":78394,"proPic":null,"email":"aditya@ym.com",
              "roles":[{"role":"ROLE_BOT_ADMIN","owner":"x1532195756954"},
                {"role":"ROLE_BOT_ADMIN","owner":"x1563185332983"},
                {"role":"ROLE_BOT_ADMIN","owner":"x1572447766397"},
                {"role":"ROLE_BOT_ADMIN","owner":"x1565100503080"},
                {"role":"ROLE_BOT_ADMIN","owner":"x1545488090660"}],"subscription":{"owner_id":0,"id":1,"plan":{"package":null,"tier":"DEFAULT"}},"xmppToken":null}
      }}
      {...props}
    />
  );
}

const useAuth = () => React.useContext(AuthContext);
export {AuthProvider, AuthContext};
// value={{
//         session: [{
//           botId: 'dominos',
//           roles: ["role1", "qe", "asd"]
//         }]
//       }}

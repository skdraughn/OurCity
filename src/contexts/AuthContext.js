import { Hub, DataStore } from "aws-amplify";
import { createContext, useContext, useEffect } from "react";
import { User } from "../models";

const AuthContext = createContext({});

const AuthContextProvider = () => {
  const [authUser, setAuthUser] = useState(null);
  const [dbUser, setDbUser] = useState(null);

  const checkUser = async () => {
    try {
      const tempAuthUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setAuthUser(tempAuthUser);
    } catch (e) {
      setAuthUser(null);
    }
  };

  const sub = authUser?.attributes?.sub;
  const email = authUser?.attributes?.username;

  useEffect(() => {
    const listener = Hub.listen("auth", (data) => {
      if (data.payload.event === "signIn" || data.payload.event === "signOut") {
        checkUser();
      }
    });

    return () => {
      listener();
    };
  }, []);

  useEffect(() => {}, [sub]);

  useEffect(() => {
    if (sub) {
      DataStore.query(User, (u) => u.sub.eq(sub)).then((user) => {
        if (!user) {
          DataStore.save(
            new User({
              sub: sub,
            })
          ).then(setDbUser);
        } else setDbUser(user[0]);
      });
    }
  }, [authUser]);

  return (
    <AuthContext.Provider
      value={{ authUser, dbUser, sub, setDbUser, name, username, type }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuthContext = () => useContext(AuthContext);

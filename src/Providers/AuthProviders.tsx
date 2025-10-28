import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/Firebase.config";


interface AuthContextType {
    user: unknown;
    setUser: React.Dispatch<React.SetStateAction<unknown>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    createUser: (email: string, password: string) => Promise<unknown>;
    signIn: (email: string, password: string) => Promise<unknown>;
    signInWithGoogle: () => Promise<unknown>;
    logout: () => Promise<void>;
    updateUserProfile: (name: unknown, photo: unknown) => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | undefined>(undefined);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function AuthProviders({ children }: { children: React.ReactNode     }) {
    const [user, setUser] = useState<unknown>(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email: string, password: string) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signIn = (email: string, password: string) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updateUserProfile = (name: any, photo: any) => {
        if (auth.currentUser) {
            return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
            });
        } else {
            return Promise.reject(new Error("No authenticated user found."));
        }
    };

    // on Auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            console.log('CurrentUser-->', currentUser?.email);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signIn,
        signInWithGoogle,
        logout,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
}

export default AuthProviders;
import { createAuthClient } from "better-auth/react";
import { useRouter } from "next/navigation";

export const client = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "",
});

export const useAuth = () => {
  const router = useRouter();
  const { data: session, isPending } = client.useSession();

  return {
    session,
    isPending,
    router,
  };
};

export const signUp = async (email, password, name, image) => {
  try {
    const response = await client.signUp.email({
      email,
      password,
      name,
      image,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const signIn = async (email, password) => {
  try {
    const response = await client.signIn.email({
      email,
      password,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const signOut = async () => {
  try {
    await client.signOut();
  } catch (error) {
    throw error;
  }
};

export const signInWithGoogle = async () => {
  try {
    await client.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    throw error;
  }
};

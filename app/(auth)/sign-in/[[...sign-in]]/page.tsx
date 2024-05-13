import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in page for the app",
};

const SignInPage = () => {
  return <SignIn path="/sign-in" />;
};

export default SignInPage;

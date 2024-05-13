import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up page for the app",
};

const SignUpPage = () => {
  return <SignUp path="/sign-up" />;
};

export default SignUpPage;

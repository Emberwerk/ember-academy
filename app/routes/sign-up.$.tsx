import { SignUp as ClerkSignUp } from "@clerk/remix";

const SignUp = () => (
  <div className="flex flex-col h-screen items-center justify-center">
    <ClerkSignUp />
  </div>
);

export default SignUp;

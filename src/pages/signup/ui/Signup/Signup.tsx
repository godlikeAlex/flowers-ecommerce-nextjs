import { Anchor } from "@/shared/ui";
import { SignupForm } from "../SignupForm";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <h4 className="mb-16">Sign Up</h4>
      <p className="mb-16">Please Enter your detail to Sign Up.</p>
      <SignupForm />
      <p className="mt-16">
        Already have an Account?{" "}
        <Anchor as={Link} href="/signin">
          Sign In
        </Anchor>
      </p>
    </>
  );
}

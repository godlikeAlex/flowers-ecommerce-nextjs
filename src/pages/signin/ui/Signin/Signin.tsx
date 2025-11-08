import { Anchor } from "@/shared/ui";
import Link from "next/link";
import { SigninForm } from "../SigninForm";

export default function Signin() {
  return (
    <>
      <h4 className="mb-16">Sign In</h4>
      <p className="mb-16">Please Enter your detail to Sign In.</p>

      <SigninForm />

      <p className="mt-16">
        Don’t have an Account?{" "}
        <Anchor as={Link} href="/signup">
          Sign Up For Free
        </Anchor>
      </p>
    </>
  );
}

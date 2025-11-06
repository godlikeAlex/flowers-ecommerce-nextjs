"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, ClickIcon, Input } from "@/shared/ui";
import { SigninFormValues, signinSchema } from "../../model/signin-schema";
import { toast } from "sonner";

export default function SigninForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (values: SigninFormValues) => {
    console.log("Sign in form:", values);
    toast.success("You have successfully logged into your account", {
      position: "bottom-center",
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-16">
        <Input
          placeholder="Your email"
          disabled={isSubmitting}
          error={errors.email?.message}
          {...register("email")}
        />
      </div>

      <div className="mb-16">
        <Input
          placeholder="Password"
          type="password"
          disabled={isSubmitting}
          error={errors.password?.message}
          {...register("password")}
        />
      </div>

      <Button
        className="w-100"
        accessoryRight={<ClickIcon />}
        loading={isSubmitting}
      >
        Sign In
      </Button>
    </form>
  );
}

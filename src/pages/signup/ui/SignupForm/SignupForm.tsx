"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, ClickIcon, Input } from "@/shared/ui";
import { SignupFormValues, signupSchema } from "../../model/signup-schema";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (values: SignupFormValues) => {
    console.log("Signup Form", values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-16">
        <Input
          placeholder="Your Name"
          disabled={isSubmitting}
          error={errors.name?.message}
          {...register("name")}
        />
      </div>

      <div className="mb-16">
        <Input
          placeholder="Your Email"
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
        loading={isSubmitting}
        accessoryRight={<ClickIcon />}
      >
        Sign Up
      </Button>
    </form>
  );
}

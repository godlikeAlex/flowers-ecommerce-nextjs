"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Alert, Button, ClickIcon, Input } from "@/shared/ui";
import { isLaravelValidationError } from "@/shared/lib";
import { DEFAULT_REDIRECT_ROUTE } from "@/shared/config";

import { SignupFormValues, signupSchema } from "../../model/signup-schema";
import useSignup from "../../model/useSignup";

export default function SignupForm() {
  const router = useRouter();
  const signupMutation = useSignup();
  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (values: SignupFormValues) => {
    try {
      const { data } = await signupMutation.mutateAsync(values);

      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `apiToken=${data.token}; path=/; max-age=${60 * 60 * 2}; SameSite=Lax`;

      toast.success(
        "Account successfully created. Thank you for joining us 💙",
      );

      router.replace(DEFAULT_REDIRECT_ROUTE);
    } catch (error: unknown) {
      if (isLaravelValidationError(error)) {
        setError("root", {
          type: "manual",
          message: error.response.data.message,
        });
      } else {
        toast.error("An unexpected error occurred. Please try again later.");
      }
    }
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

      {errors.root && (
        <Alert className="mb-16" title="Error" type="error">
          {errors.root.message}
        </Alert>
      )}

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

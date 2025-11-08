"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { useSignin } from "@/features/auth/model";
import { Alert, Button, ClickIcon, Input } from "@/shared/ui";
import { DEFAULT_REDIRECT_ROUTE } from "@/shared/config";
import { isLaravelValidationError } from "@/shared/lib";

import { SigninFormValues, signinSchema } from "../../model/signin-schema";

export default function SigninForm() {
  const router = useRouter();
  const signinMutation = useSignin();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signinSchema),
  });

  const onSubmit = async (values: SigninFormValues) => {
    try {
      const { data } = await signinMutation.mutateAsync(values);

      // eslint-disable-next-line react-hooks/immutability
      document.cookie = `apiToken=${data.token}; path=/; max-age=${60 * 60 * 2}; SameSite=Lax`;

      toast.success("💙 You have successfully logged into your account", {
        position: "bottom-center",
      });

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

      {errors.root && (
        <Alert className="mb-16" title="Error" type="error">
          {errors.root.message}
        </Alert>
      )}

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

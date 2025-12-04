import { createReviewSchema } from "@/entities/review";
import { Button, Input, Textarea } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import RatingInput from "./RatingInput";

import styles from "./ReviewSection.module.css";

export default function ReviewForm() {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof createReviewSchema>>({
    defaultValues: {
      media: [],
      review: "",
      name: "",
      email: "",
    },
    resolver: zodResolver(createReviewSchema),
  });

  const onSubmit = () => {
    console.log();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("mt-3", styles.reviewForm)}
    >
      <div className="text-center mb-4">
        <h4>Write Review</h4>
      </div>
      <div className="row">
        <div className={clsx("col-md-6")}>
          <Input
            placeholder="Your Name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>

        <div className={clsx("col-md-6")}>
          <Input
            placeholder="Your Email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="col-md-12 mt-4">
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <RatingInput value={field.value} onChange={field.onChange} />
            )}
          />
        </div>

        <div className="col-md-12 mt-4">
          <Textarea placeholder="Review" rows={6} />
        </div>

        <div className="col-md-12 mt-4">
          <Button className="w-100">Submit Review</Button>
        </div>
      </div>
    </form>
  );
}

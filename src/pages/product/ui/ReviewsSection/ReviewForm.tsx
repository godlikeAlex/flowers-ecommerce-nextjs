import {
  Button,
  Input,
  InputErrorMessage,
  Textarea,
  UploadDropZone,
} from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { Controller, useForm } from "react-hook-form";
import RatingInput from "./RatingInput";
import { toast } from "sonner";

import styles from "./ReviewSection.module.css";
import { usePublishReview } from "@/features/review";
import {
  createReviewSchema,
  CreateReviewForm,
} from "../../model/create-review-schema";

interface Props {
  productID: number;
  onSuccess: () => void;
}

export default function ReviewForm({ onSuccess, productID }: Props) {
  const publishReview = usePublishReview();

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<CreateReviewForm>({
    defaultValues: {
      media: [],
      review: "",
      name: "",
      email: "",
    },
    resolver: zodResolver(createReviewSchema),
  });

  const onSubmit = async (values: CreateReviewForm) => {
    try {
      await publishReview.mutateAsync({ productID, ...values });

      onSuccess();

      toast.success("Thanks! Your review will be published soon", {
        duration: 4000,
        position: "bottom-center",
      });
    } catch (e) {
      console.log("Error while sending review", e);
      toast.error("Failed to send review");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx("mt-3", styles.reviewForm)}
    >
      <div className="text-center mb-4">
        <h4>Write Review</h4>
      </div>
      <div className="row row-gap-4">
        <div className={clsx("col-md-6")}>
          <Input
            disabled={publishReview.isPending}
            placeholder="Your Name"
            error={errors.name?.message}
            {...register("name")}
          />
        </div>

        <div className={clsx("col-md-6")}>
          <Input
            disabled={publishReview.isPending}
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
              <RatingInput
                disabled={publishReview.isPending}
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />

          {errors.rating && (
            <InputErrorMessage>{errors.rating.message}</InputErrorMessage>
          )}
        </div>

        <div className="col-md-12 mt-4">
          <Textarea
            disabled={publishReview.isPending}
            error={errors.review?.message}
            {...register("review")}
            placeholder="Write your review"
            rows={6}
          />
        </div>

        <div className="col-md-12 mt-4">
          <Controller
            render={({ field }) => (
              <UploadDropZone
                files={field.value}
                onUpload={(files) =>
                  field.onChange([...(field.value || []), ...files])
                }
                onUpdate={(files) => field.onChange(files)}
              />
            )}
            control={control}
            name="media"
          />

          {errors.media && (
            <InputErrorMessage>{errors.media.message}</InputErrorMessage>
          )}
        </div>

        <div className="col-md-12 mt-4">
          <Button className="w-100" disabled={publishReview.isPending}>
            Submit Review
          </Button>
        </div>
      </div>
    </form>
  );
}

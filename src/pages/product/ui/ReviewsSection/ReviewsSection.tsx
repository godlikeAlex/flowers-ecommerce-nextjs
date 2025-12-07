"use client";

import { EmptyState, Modal, Button, StarRating } from "@/shared/ui";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";
import Image from "next/image";

import image from "./empty-reviews.png";
import { useState } from "react";
import ReviewForm from "./ReviewForm";
import { Review } from "../Review";
import { useReviews } from "@/entities/review";
import Skeleton from "react-loading-skeleton";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr/ArrowRight";

interface Props {
  productID: number;
  totalReviews: number;
  productRating: number;
}

export default function ReviewsSection({
  productID,
  totalReviews,
  productRating,
}: Props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const reviews = useReviews({ productID });

  const emptyState = (
    <EmptyState>
      <EmptyState.Head>
        <EmptyState.Image>
          <Image src={image} alt="No reviews" loading="eager" />
        </EmptyState.Image>

        <EmptyState.Heading>No Reviews Yet</EmptyState.Heading>
        <EmptyState.Description>
          It’s empty for now — be the first to share your thoughts 💙
        </EmptyState.Description>
      </EmptyState.Head>

      <EmptyState.Actions>
        <Button
          accessoryRight={<StarIcon />}
          onClick={() => setModalIsOpen(true)}
        >
          Write A Review
        </Button>
      </EmptyState.Actions>
    </EmptyState>
  );

  if (reviews.isPending) {
    return (
      <>
        <div className="mb-48">
          <Skeleton height={32} />
          <Skeleton height={22} width={180} />
        </div>

        <Skeleton height={220} count={3} className="mb-4" />
      </>
    );
  }

  if (reviews.isError) return emptyState;

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ReviewForm
          productID={productID}
          onSuccess={() => setModalIsOpen(false)}
        />
      </Modal>

      {reviews?.data && reviews?.data?.length > 0 ? (
        <>
          <div className="row  mb-48">
            <div className="col-md-12">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5>Reviews ({totalReviews})</h5>
                  <div className="mt-2">
                    <StarRating
                      rating={productRating}
                      label={`(${productRating}) Average Rating`}
                    />
                  </div>
                </div>

                <Button
                  accessoryRight={<StarIcon />}
                  onClick={() => setModalIsOpen(true)}
                >
                  Write A Review
                </Button>
              </div>
            </div>
          </div>

          <div className="row row-gap-5">
            {reviews.data.map((review, index) => (
              <div className="col-md-12" key={review.id}>
                <Review
                  {...review}
                  showDivider={reviews.data.length !== index + 1}
                />
              </div>
            ))}
          </div>

          <div className="row">
            {reviews.hasNextPage && (
              <div className="col-md-12 mt-25 text-center">
                <Button
                  onClick={() => reviews.fetchNextPage()}
                  disabled={reviews.isFetchingNextPage}
                  accessoryRight={<ArrowRightIcon />}
                  className="mx-auto"
                >
                  Load More Reviews
                </Button>
              </div>
            )}
          </div>
        </>
      ) : (
        emptyState
      )}
    </>
  );
}

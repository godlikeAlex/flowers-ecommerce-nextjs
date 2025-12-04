"use client";

import { EmptyState, Modal, Button } from "@/shared/ui";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";
import Image from "next/image";

import image from "./empty-reviews.png";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

export default function ReviewsSection() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <ReviewForm />
      </Modal>

      <EmptyState>
        <EmptyState.Head>
          <EmptyState.Image>
            <Image src={image} alt="No reviews" />
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
    </>
  );
}

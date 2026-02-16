"use client";

import { Button, EmptyState } from "@/shared/ui";

import image from "./not-found.webp";
import Image from "next/image";
import Link from "next/link";
import { ROUTES } from "@/shared/config";

export default function NotFoundPage() {
  return (
    <section className="my-5">
      <EmptyState>
        <EmptyState.Head>
          <EmptyState.Image>
            <Image src={image} alt="Page Not Found" style={{ width: "80%" }} />
          </EmptyState.Image>
          <EmptyState.Heading>Page Not Found</EmptyState.Heading>
          <EmptyState.Description>
            We searched everywhere, but this page is nowhere to be found. Maybe
            it never existed.
          </EmptyState.Description>
        </EmptyState.Head>

        <EmptyState.Actions>
          <Button as={Link} href={ROUTES.HOME}>
            Home page
          </Button>
        </EmptyState.Actions>
      </EmptyState>
    </section>
  );
}

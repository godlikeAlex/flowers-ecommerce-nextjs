import { EmptyState } from "@/shared/ui";

import image from "./empty-image.png";
import Image from "next/image";

export default function EmptyStatePosts() {
  return (
    <EmptyState>
      <EmptyState.Head>
        <EmptyState.Image>
          <Image src={image} alt="No products" />
        </EmptyState.Image>
        <EmptyState.Heading>It’s empty here for now.</EmptyState.Heading>
        <EmptyState.Description>
          Don’t worry, new posts could show up any time, <br /> so check back
          soon!
        </EmptyState.Description>
      </EmptyState.Head>
    </EmptyState>
  );
}

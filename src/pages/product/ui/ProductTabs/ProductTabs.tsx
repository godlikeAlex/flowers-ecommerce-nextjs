import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import styles from "./ProductTabs.module.css";
import { Button, EmptyState } from "@/shared/ui";
import { StarIcon } from "@phosphor-icons/react/dist/ssr/Star";
import Image from "next/image";

import image from "./empty-reviews.png";

interface Props {
  description: string;
}

export default function ProductTabs({ description }: Props) {
  return (
    <TabGroup>
      <TabList>
        <Tab className={styles.button}>Description</Tab>
        <Tab className={styles.button}>Reviews</Tab>
      </TabList>
      <hr className="dash-line mb-32" />
      <TabPanels>
        <TabPanel>
          <div dangerouslySetInnerHTML={{ __html: description ?? "" }} />
        </TabPanel>
        <TabPanel>
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
              <Button accessoryRight={<StarIcon />}>Write A Review</Button>
            </EmptyState.Actions>
          </EmptyState>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

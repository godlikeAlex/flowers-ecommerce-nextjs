import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import styles from "./ProductTabs.module.css";
import { ReviewSection } from "../ReviewsSection";

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
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: description ?? "" }} // Sanitized by backed
          />
        </TabPanel>
        <TabPanel>
          <ReviewSection />
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

import styles from "./ProductTabs.module.css";
import { ReviewSection } from "../ReviewsSection";

interface Props {
  productID: number;
  description: string;
  totalReviews: number;
  productRating: number;
}

export default function ProductTabs({
  description,
  productID,
  totalReviews,
  productRating,
}: Props) {
  return (
    <TabGroup>
      <TabList>
        <Tab className={styles.button}>Description</Tab>
        <Tab className={styles.button}>Reviews</Tab>
        <Tab className={styles.button}>Policy</Tab>
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
          <ReviewSection
            productID={productID}
            productRating={productRating}
            totalReviews={totalReviews}
          />
        </TabPanel>
        <TabPanel>
          <div className={styles.description}>
            <p>
              In some instances, our photo may represent an overall theme or
              look and include a one-of-a-kind vase which cannot be exactly
              replicated.
            </p>
            <p>
              Although the actual bouquet may not precisely match the photo, its
              temperament will. Occasionally, substitutions of flowers and/or
              containers happen due to weather, seasonality and market
              conditions which may affect availability. If this is the case with
              the gift you’ve selected, we will ensure that the style, theme and
              color scheme of your arrangement is preserved and will only
              substitute items of equal value or higher value.
            </p>

            <p>
              If any design elements are of major importance to your order,
              please include them in the florist instructions at checkout or
              contact us to ensure availability.
            </p>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  );
}

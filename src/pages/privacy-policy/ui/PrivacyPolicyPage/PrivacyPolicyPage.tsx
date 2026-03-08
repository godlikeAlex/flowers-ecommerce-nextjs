import { PageBanner } from "@/shared/ui";

import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />

      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto py-5">
            <p>
              Bluemelle (we, our, or us) operates the Bluemelle website. This
              page informs you of our policies regarding the collection, use,
              and disclosure of personal information when you use our services.
            </p>

            <h6 className="mt-4 color-primary">Return Policy</h6>
            <p className={styles.paragraph}>
              All sales are final. Due to the perishable nature of flowers, we
              do not accept returns or issue refunds on floral arrangements or
              other products.
            </p>
            <p className={styles.paragraph}>
              If your order arrives damaged or incorrect, please contact us
              within 24 hours of delivery and include photos so we can review
              the issue.
            </p>
            <p className={styles.paragraph}>
              Bluemelle LLC reserves the right to substitute flowers or
              containers with similar items based on seasonal availability while
              maintaining the overall design and value of the arrangement. 🌸
            </p>

            <h6 className="mt-4 color-primary">Information We Collect</h6>
            <p>We may collect the following types of personal information:</p>
            <ul>
              <li>Name and surname</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Delivery address</li>
              <li>Order details (flowers, messages, delivery time)</li>
            </ul>

            <h6 className="mt-4 color-primary">How We Use Your Information</h6>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>To process and deliver your orders</li>
              <li>To contact you regarding your order</li>
              <li>To improve our services and customer experience</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h6 className="mt-4 color-primary">Cookies</h6>
            <p>
              Bluemelle may use cookies and similar technologies to improve
              website functionality and analyze traffic. You can choose to
              disable cookies through your browser settings.
            </p>

            <h6 className="mt-4 color-primary">Sharing of Information</h6>
            <p>
              We do not sell, trade, or rent your personal information to third
              parties. Your data may be shared only in the following cases:
            </p>
            <ul>
              <li>With delivery services to complete your order</li>
              <li>When required by law or legal authorities</li>
            </ul>

            <h6 className="mt-4 color-primary">Data Security</h6>
            <p>
              We take reasonable measures to protect your personal data from
              unauthorized access, alteration, or disclosure. However, no method
              of transmission over the Internet is 100% secure.
            </p>

            <h6 className="mt-4 color-primary">Your Rights</h6>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction or deletion of your data</li>
              <li>Withdraw consent for data processing</li>
            </ul>

            <h6 className="mt-4 color-primary">Third-Party Links</h6>
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those
              websites.
            </p>

            <h6 className="mt-4 color-primary">
              Changes to This Privacy Policy
            </h6>
            <p>
              Bluemelle reserves the right to update this Privacy Policy at any
              time. Changes will be posted on this page.
            </p>

            <h6 className="mt-4 color-primary">Contact Us</h6>
            <p>
              If you have any questions about this Privacy Policy, you can
              contact us:
            </p>
            <ul>
              <li>Email: bluemellenj@gmail.com</li>
              <li>Phone: +1 (848) 345-0492</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

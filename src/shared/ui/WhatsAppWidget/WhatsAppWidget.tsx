import Script from "next/script";

export default function WhatsAppWidget() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" async />
      <div
        className="elfsight-app-3a1bc87e-aaf9-41c7-880b-396e47b14570"
        data-elfsight-app-lazy
      />
    </>
  );
}

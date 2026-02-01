import Script from "next/script";

export default function AnnouncementWidget() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" async />
      <div
        className="elfsight-app-354575cd-0d97-422a-b51a-2a1c8efa97f6"
        data-elfsight-app-lazy
      />
    </>
  );
}

import { PropsWithChildren } from "react";

interface Props {
  title?: string;
}

export default function HomeSection({ children }: PropsWithChildren<Props>) {
  return <section style={{ paddingBlock: 80 }}>{children}</section>;
}

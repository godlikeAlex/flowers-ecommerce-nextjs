import { format } from "date-fns";

import styles from "./PostPublishedDate.module.css";

interface Props {
  published_at: string;
}

export default function PostPublishedDate({ published_at }: Props) {
  const localeDate = format(new Date(published_at), "d MMMM yyyy");

  return <span className={styles.date}>{localeDate}</span>;
}

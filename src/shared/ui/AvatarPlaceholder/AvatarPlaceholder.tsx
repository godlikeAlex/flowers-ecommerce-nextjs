import styles from "./AvatarPlaceholder.module.css";

export interface Props {
  name: string;
  size: number;
}

export default function AvatarPlaceholder({ size, name = "A" }: Props) {
  const fontSize = size * 0.55;
  const singleInitial = name.at(0);

  return (
    <div
      style={{ width: size, height: size, fontSize }}
      className={styles["avatar-container"]}
    >
      {singleInitial}
    </div>
  );
}

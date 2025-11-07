"use client";

import { useUser } from "@/entities/user";

export default function Dashboard() {
  const user = useUser();

  return <h1>{user.data?.name}</h1>;
}

"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState();

  useEffect(() => {
    console.log(state);
  }, []);

  return <main>Flowers Shop</main>;
}

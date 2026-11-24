"use client";
import { useEffect, useState } from 'react';
export default function Page() {
  const [Studio, setStudio] = useState(null);
  useEffect(() => {
    let active = true;
    import('./studio').then(({ default: Component }) => { if (active) setStudio(() => Component); });
    return () => { active = false; };
  }, []);
  return Studio ? <Studio /> : null;
}

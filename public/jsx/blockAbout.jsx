import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo
} from "react";
import "../scss/blockAbout.scss";
import { setTimeout } from "timers";
export default function BlockAbout() {
  const [clicks, setclicks] = useState(0);
  const [ticks, setticks] = useState(10);
  useEffect(() => {
    console.log(ticks);
    if (ticks > 0) setTimeout(() => setticks(ticks - 1), 1000);
  }, [ticks]);
  return (
    <div id="block-about">
      <h1>{ticks} s</h1>
      <button onClick={() => setclicks(clicks + 1)}>click me</button>
    </div>
  );
}

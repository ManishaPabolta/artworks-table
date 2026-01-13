import { useRef, useState } from "react";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import type { Artwork } from "../types/artwork";

interface Props {
  currentPageData: Artwork[];
  selectedIds: number[];              // ✅ MUST be number[]
  setSelectedIds: (ids: number[]) => void; // ✅ MUST be number[]
}

export default function CustomSelectOverlay({
  currentPageData,
  selectedIds,
  setSelectedIds,
}: Props) {
  const [count, setCount] = useState("");
  const overlayRef = useRef<OverlayPanel>(null);

  const applySelection = () => {
    const num = Number(count);
    if (!num || num <= 0) return;

    const ids = currentPageData
      .slice(0, num)
      .map((art) => art.id)
      .filter((id): id is number => id !== undefined);

    setSelectedIds(ids);
    overlayRef.current?.hide();
  };

  return (
    <>
      <Button label="Custom Select" onClick={(e) => overlayRef.current?.toggle(e)} />
      <OverlayPanel ref={overlayRef}>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <Button label="Apply" onClick={applySelection} />
      </OverlayPanel>
    </>
  );
}

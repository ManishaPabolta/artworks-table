import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { fetchArtworks } from "../api/artworksApi";
import type { Artwork } from "../types/artwork";
import CustomSelectOverlay from "./CustomSelectOverlay";

const ROWS_PER_PAGE = 12;

export default function ArtTable() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [page, setPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [selectedRows, setSelectedRows] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchArtworks(page, ROWS_PER_PAGE)
      .then((res) => {
        setArtworks(res.data);
        setTotalRecords(res.pagination.total);
      })
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div style={{ padding: "1rem" }}>
      {/* ✅ Overlay */}
     <CustomSelectOverlay
  currentPageData={artworks}
  selectedIds={selectedRows
    .map((r) => r.id)
    .filter((id): id is number => id !== undefined)
  }
  setSelectedIds={(ids: number[]) => {
    const rows = artworks.filter(
      (art): art is Artwork & { id: number } =>
        art.id !== undefined && ids.includes(art.id)
    );
    setSelectedRows(rows);
  }}
/>


      {/* ✅ DataTable */}
      <DataTable
        value={artworks}
        loading={loading}
        paginator
        rows={ROWS_PER_PAGE}
        totalRecords={totalRecords}
        lazy
        first={(page - 1) * ROWS_PER_PAGE}
        onPage={(e) => setPage(e.page! + 1)}
        dataKey="id"
        selection={selectedRows}
        selectionMode="checkbox"
        onSelectionChange={(e) => {
          setSelectedRows(e.value as Artwork[]);
        }}
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3rem" }} />
        <Column field="title" header="Title" />
        <Column field="artist_display" header="Artist" />
        <Column field="place_of_origin" header="Origin" />
        <Column
          header="Year"
          body={(row: Artwork) =>
            `${row.date_start} - ${row.date_end}`
          }
        />
      </DataTable>
    </div>
  );
}

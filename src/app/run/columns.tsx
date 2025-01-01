"use client"

import { type ColumnDef } from "@tanstack/react-table"

export interface RunData {
    id: string;
    race: string;
    date: string;
    location: string;
    type: string;
    race_time: string;
    results: string;
}

export const columns: ColumnDef<RunData>[] = [
    {
        accessorKey: "race",
        header: "Race",
    },
    {
        accessorKey: "date",
        header: "Date",
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "type",
        header: "Type",
    },
    {
        accessorKey: "race_time",
        header: "Race Time",
    },
    {
        accessorKey: "results",
        header: "Results",
        cell: ({ row }) => (
            <a className="underline" href={row.original.results} target="_blank" rel="noreferrer">
                Check the results!
            </a>
        ),
    },
]

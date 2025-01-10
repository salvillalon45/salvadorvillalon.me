"use client"

import { type ColumnDef } from "@tanstack/react-table"
import { Button } from "../_components/ui/button";
import { ArrowUpDown } from "lucide-react";

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
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Date
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "location",
        header: "Location",
    },
    {
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Type
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "race_time",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Race Time
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
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

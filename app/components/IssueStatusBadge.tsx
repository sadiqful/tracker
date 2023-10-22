import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

const statusMap: Record<
Status, 
        {label: string, color: 'red' | 'violet' | 'green'}
> = {
        OPEN: {label: 'Open', color: 'red'},
        IN_PROGRESS: {label: 'Open', color: 'red'},
        CLOSED: {label: 'Open', color: 'red'}
};

const IssueStatusPage = ({status}:{status: Status}) => {
    return (
        <Badge color={statusMap[status].color}>
            {statusMap[status].label}
        </Badge>
    )
}
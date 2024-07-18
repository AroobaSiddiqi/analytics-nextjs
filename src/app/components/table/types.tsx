export interface TableProps {
    columns: ColumnDef[],
    data: any[]
}

export type TableColumnDefs = Array<ColumnDef>

export interface ColumnDef {
    name: string,
    field: string,
    cellRenderer?: (data:any)=>any,
    attributes?: { [key: string]: any }
}
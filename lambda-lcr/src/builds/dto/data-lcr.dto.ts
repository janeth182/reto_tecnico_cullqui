export interface Detail {
    input: string
}

export class DataLcrDto {
    version: string
    id: string
    "detail-type": string
    source: string
    account: string
    time: string
    region: string
    resources: any[]
    detail: Detail
}
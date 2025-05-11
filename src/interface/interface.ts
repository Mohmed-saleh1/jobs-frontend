export interface IJobCardDataType {
    id: number;
    title: string;
    company: string;
    location: string;
    salaryInfo?: string;
    quickApply?: boolean;
    description: string;
    postedAt: string;
    route: string;
    logo?: string;  
}

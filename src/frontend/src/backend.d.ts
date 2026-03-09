import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Enquiry {
    id: bigint;
    serviceType: string;
    bedrooms: string;
    name: string;
    submittedAt: bigint;
    propertyAddress: string;
    email: string;
    message: string;
    preferredDate: string;
    phone: string;
}
export interface backendInterface {
    getEnquiries(): Promise<Array<Enquiry>>;
    getEnquiryCount(): Promise<bigint>;
    submitEnquiry(name: string, email: string, phone: string, serviceType: string, propertyAddress: string, bedrooms: string, preferredDate: string, message: string): Promise<bigint>;
}

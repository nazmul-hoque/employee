interface Address {
    [key: number]: string;
    streetName: string;
    postalCode: string;
    apartmentNumber: number;
    state: string;
    country: string
}

export default Address
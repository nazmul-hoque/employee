import { useState } from 'react';
import Address from '../../types/Address';
import Employee from '../../types/Employee';


export const useEmployeeForm = (initialData:Employee) => {
    const [employeeData, setEmployeeData] = useState<Employee>(initialData);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (index: number, field: any, value: string) => {
        const updatedAddresses: Address[] = [...employeeData.addresses];
        updatedAddresses[index][field] = value;
        setEmployeeData((prevData) => ({
            ...prevData,
            addresses: updatedAddresses,
        }));
    };

    const handleAddAddress = () => {
        setEmployeeData((prevData) => ({
            ...prevData,
            addresses: [...prevData.addresses, {
                streetName: '',
                postalCode: '',
                apartmentNumber: 0,
                state: '',
                country: ''
            } as Address],
        }));
        console.info("adding address", employeeData)
    };

    const handleRemoveAddress = (index: number) => {
        const updatedAddresses = [...employeeData.addresses];
        updatedAddresses.splice(index, 1);
        setEmployeeData((prevData) => ({
            ...prevData,
            addresses: updatedAddresses,
        }));
    };

    return {
        handleInputChange,
        handleAddressChange,
        handleAddAddress,
        handleRemoveAddress,
    };
};

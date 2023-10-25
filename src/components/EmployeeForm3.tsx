import React, { useEffect, useState } from 'react';
import AddressInput from './AddressInput';
import Address from '../types/Address';
import Employee from '../types/Employee';
import EmployeeFormProps from '../types/EmployeeFormProps';
import { debug } from 'console';
import { Button, Grid, TextField, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

// interface EmployeeFormProps {
//     onSubmit: (employeeData: Employee) => void;
// }

// interface Address {
//     street: string;
//     city: string;
//     province: string;
// }

// interface EmployeeData {
//     name: string;
//     phone: string;
//     email: string;
//     addresses: Address[];
// }

const EmployeeForm3: React.FC<EmployeeFormProps> = ({ initValues, onSubmit }) => {
    //debugger
    // const [employeeData, setEmployeeData] = useState<Employee>({
    //     id:-1,
    //     firstName: initValues.firstName || '',
    //     lastName: '',
    //     phone: '',
    //     email: '',
    //     addresses: [{
    //         streetName: '',
    //         postalCode: '',
    //         apartmentNumber: 0,
    //         state: '',
    //         country: ''}],
    // });
    const [employeeData, setEmployeeData] = useState<Employee>(initValues);

    // I tried my good number of hours for this, as I am sending the initValues as props
    // Using an useEffect  (one in main component and again on Child Component)
    useEffect(()=>{
        setEmployeeData(initValues)
    }, [initValues])

    
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        //debugger
        const { name, value } = e.target;
        console.info("element", name, value)
        setEmployeeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAddressChange = (index: number, field: any, value: string) => {
        const updatedAddresses = [...employeeData.addresses];
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
            }],
        }));
    };

    const handleRemoveAddress = (index: number) => {
        const updatedAddresses = [...employeeData.addresses];
        updatedAddresses.splice(index, 1);
        setEmployeeData((prevData) => ({
            ...prevData,
            addresses: updatedAddresses,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(employeeData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid2 sx={{m:2}}>
                <TextField
                    type="text"
                    name="firstName"
                    label="First Name"
                    value={employeeData.firstName}
                    onChange={handleInputChange}
                />
            
            
                <TextField
                    type="text"
                    name="phone"
                    label="Phone"
                    value={employeeData.phone}
                    onChange={handleInputChange}
                />
            </Grid2>
            <Grid2 sx={{m:2}}>
                <TextField
                    type="text"
                    name="email"
                    label="Email"
                    value={employeeData.email}
                    onChange={handleInputChange}
                />
            </Grid2>
            <Typography variant='subtitle2'>Addresses</Typography>
            {employeeData.addresses.map((address, index) => (
                <AddressInput
                    key={index}
                    address={address}
                    onAddressChange={(field, value) => handleAddressChange(index, field as keyof Address, value)}
                    onRemove={() => handleRemoveAddress(index)}
                />
            ))}
            <Grid2 sx={{m:2}}>
            <Button type="button" variant='outlined' onClick={handleAddAddress}>
                Add Address
            </Button>
            </Grid2>
            <Grid2 sx={{m:2}}>
            <Button type="submit" variant='outlined'>Submit</Button>
            </Grid2>
        </form>
    );
};

export default EmployeeForm3;

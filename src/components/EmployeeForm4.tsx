import React from 'react';
import { useEmployeeForm } from './hooks/useEmployeeForm'
import AddressInput from './AddressInput';
import EmployeeFormProps from '../types/EmployeeFormProps';
import Address from '../types/Address';


const EmployeeForm4: React.FC<EmployeeFormProps> = ({ initValues, onSubmit }) => {
    const {
        handleInputChange,
        handleAddressChange,
        handleAddAddress,
        handleRemoveAddress,
    } = useEmployeeForm(initValues);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(initValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={initValues.firstName}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Phone:
                <input
                    type="text"
                    name="phone"
                    value={initValues.phone}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={initValues.email}
                    onChange={handleInputChange}
                />
            </label>
            <h3>Addresses</h3>
            {initValues.addresses.map((address, index) => (
                <AddressInput
                    key={index}
                    address={address}
                    onAddressChange={(field, value) => handleAddressChange(index, field, value)}
                    onRemove={() => handleRemoveAddress(index)}
                />
            ))}
            <button type="button" onClick={handleAddAddress}>
                Add Address
            </button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default EmployeeForm4;

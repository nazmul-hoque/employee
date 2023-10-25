import React from 'react';
import Address from '../types/Address';
import { Button, Grid, TextField } from '@mui/material';

interface AddressInputProps {
    address: Address;
    onAddressChange: (field: string, value: string) => void;
    onRemove: () => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ address, onAddressChange, onRemove }) => {
    return (
        <Grid container spacing={2}>
            <Grid sx={{m:2}}>
                <TextField
                    type="text"
                    value={address.apartmentNumber}
                    label="Apartment Number"
                    onChange={(e) => onAddressChange('apartmentNumber', e.target.value)}
                />
            </Grid>
            <Grid sx={{m:2}}>
                
                <TextField
                    type="text"
                    value={address.country}
                    label="Country"
                    onChange={(e) => onAddressChange('country', e.target.value)}
                />
            </Grid>
            <Grid sx={{m:2}}>
                
                <TextField
                    type="text"
                    value={address.state}
                    label="Province"
                    onChange={(e) => onAddressChange('state', e.target.value)}
                />
            </Grid>
            <Grid sx={{m:2}}>
            <Button type="button" color='warning' variant='outlined' onClick={onRemove}>
                Remove Address
            </Button>
            </Grid>
        </Grid>
    );
};

export default AddressInput;

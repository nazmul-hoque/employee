import React, { useEffect } from 'react';
import useForm  from './hooks/useForm';
import { Button, FormControl, Grid, TextField } from '@mui/material';
import * as Yup from 'yup';
import Address from '../types/Address';
import Employee from '../types/Employee';
import EmployeeFormProps from '../types/EmployeeFormProps';



const EmployeeForm2: React.FC<EmployeeFormProps>=({ initValues, onSubmit })=> {
    // console.info(
    //     initValues
    // )
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        addresses: Yup.array()
    });

    //let initialValues = {} as Employee
    
    // defining the initial state for the form
    // const initialValues = {
    //     id: initValues.id || -1,
    //     firstName: initValues.firstName || '',
    //     lastName: initValues.lastName || '',
    //     email: initValues.email || '',
    //     phone: initValues.phone || '',
    //     addresses: initValues.addresses || {} as Address[]
    // } as Employee


    // getting the event handlers from our custom hook
    const { onChange,values } = useForm(
        
        initValues
    )
    
    // a submit function that will execute upon form submission
    // async function loginUserCallback() {
    //     // send "values" to database
    // }
    return (
        <FormControl>
            <>
            {
                    console.info(
                        initValues
                    )
            }
            
                <Grid item xs={6}>
                    <TextField type="text" variant='outlined' name='firstName' label="First Name" value={values.firstName}
                        onChange={onChange} ></TextField>
                </Grid>
                {/* Lastname */}    
                <Grid item xs={6}>
                    <TextField type="text" variant='outlined' name="lastName" label="Last Name" value={values.firstName}
                        onChange={onChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="text" variant='outlined' name="email" label="Email" value={values.firstName}
                        onChange={onChange} />
                </Grid>
                <Grid item xs={6}>
                    <TextField type="text" variant='outlined' name="phone" label="Phone" value={values.firstName}
                        onChange={onChange} />
                </Grid>
            </>
 
     
            <Grid container spacing={2}>
                <h4>Addresses</h4>
                {
                    values.addresses?.map((address: any, index: number) => (
                        <Grid key={index}>
                            <Grid item xs={6} sx={{ mb: 5 }}>
                                <TextField type="text" name={`addresses[${index}].streetName`} label="Street Name" 
                                    value={(values.addresses !=null)? values.addresses[index].streetName :'' }
                                    onChange={onChange} />
                            </Grid>
                            <Grid item xs={6} sx={{ mb: 5 }}>
                                <TextField type="text" name={`addresses.${index}.country`} label="Country" />
                              
                            </Grid>
                            <Grid item xs={6} sx={{ mb: 5 }}>
                                <TextField type="text" name={`addresses.${index}.postalCode`} label="Postal Code" />
                               
                            </Grid>
                            <Grid item xs={6} sx={{ mb: 5 }}>
                                <TextField type="text" name={`addresses.${index}.apartmentNumber`} label="Apartment No"/>
                               
                            </Grid>
                            <Grid item xs={6} sx={{ mb: 5 }}>
                                <TextField type="text" name={`addresses.${index}.state`} label="State"/>
                              
                            </Grid>
                            {/* <button type="button" onClick={() => arrayHelpers.remove(index)}>
                                Remove Address
                            </button> */}
                        </Grid>
                    ))}
                
                    {/* <button type="button" onClick={() => arrayHelpers.push({ postalCode: '', country: '', streetName: '' })}>
                        Add Address
                    </button> */}
            </Grid>
           
                                                    
            <Button type="submit">Submit</Button>
        </FormControl>
      
    );
};

export default EmployeeForm2;

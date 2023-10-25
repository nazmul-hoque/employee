import React from 'react';
import { Formik, Form, Field, FieldArray,  ErrorMessage, FormikErrors } from 'formik';
import { Grid, TextField, Button } from '@mui/material';
import EmployeeFormProps from '../types/EmployeeFormProps';
import * as Yup from 'yup';
import Address from '../types/Address';
import Employee from '../types/Employee';



const EmployeeForm: React.FC<EmployeeFormProps> = ({ initValues, onSubmit}) => {
    const validationSchema = Yup.object({
        firstName: Yup.string().required('First Name is required'),
        lastName: Yup.string().required('Last Name is required'),
        email: Yup.string().required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        addresses: Yup.array()
    });

    return (
        <Formik
            initialValues={{
                id:initValues.id || -1,
                firstName:initValues.firstName || '',
                lastName:initValues.lastName || '',
                email:initValues.email || '',
                phone:initValues.phone || '',
                addresses:initValues.addresses || {} as Address[]
            } as Employee}
             enableReinitialize
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ errors, touched, values }) => (
                <Form>
                    <Grid container spacing={2}>
                        {/* Firstname */}
                        <Grid item xs={6}>
                            <Field as={TextField} name="firstName" label="First Name" error={touched.firstName && !!errors.firstName} helperText={touched.firstName && errors.firstName} />
                        </Grid>
                        {/* Lastname */}    
                        <Grid item xs={6}>
                            <Field as={TextField} name="lastName" label="Last Name" error={touched.lastName && !!errors.lastName} helperText={touched.lastName && errors.lastName} />
                        </Grid>
                        <Grid item xs={6}>
                            <Field as={TextField} name="email" label="Email" error={touched.email && !!errors.email} helperText={touched.email && errors.email} />
                        </Grid>
                        <Grid item xs={6}>
                        <Field as={TextField} name="phone" label="Phone" error={touched.phone && !!errors.phone} helperText={touched.phone && errors.phone} />
                        </Grid>
                    </Grid>
                    
                   
                        
                    
                    <FieldArray name="addresses">
                        {(arrayHelpers:any) => (
                            <>
                                <h4>Addresses</h4>
                                {
                                    console.info(values)
                                }
                                {
                                    values.addresses?.map((address, index) => (
                                        <Grid key={index}>
                                            <Grid item xs={6} sx={{mb:5}}>
                                                <Field as={TextField} name={`addresses[${index}].streetName`} label="Street Name" 
                                                    // error={touched.addresses?.[index]?.streetName && !!((errors.addresses as FormikErrors<Address>[])[index]?.streetName)}
                                                    // helperText={touched.addresses?.[index]?.streetName && ((errors.addresses as FormikErrors<Address>[])[index]?.streetName)} 
                                                    />
                                            </Grid>
                                            <Grid item xs={6} sx={{ mb: 5 }}>
                                                <Field as={TextField} name={`addresses[${index}].country`} label="Country" 
                                                    // error={touched.addresses?.[index]?.country && !!((errors.addresses as FormikErrors<Address>[])[index]?.country)}
                                                    // helperText={touched.addresses?.[index]?.country && ((errors.addresses as FormikErrors<Address>[])[index]?.country)} 
                                                    />
                                           </Grid>
                                            <Grid item xs={6} sx={{ mb: 5 }}>
                                                <Field as={TextField} name={`addresses[${index}].postalCode`} label="Postal Code" />
                                                <ErrorMessage name={`addresses.${index}.postalCode`} component="div" />
                                            </Grid>
                                            <Grid item xs={6} sx={{ mb: 5 }}>
                                                <Field as={TextField} name={`addresses[${index}].apartmentNumber`} label="Apartment No"/>
                                                <ErrorMessage name={`addresses.${index}.apartmentNumber`} component="div" />
                                            </Grid>
                                            <Grid item xs={6} sx={{ mb: 5 }}>
                                                <Field as={TextField} name={`addresses[${index}].state`} label="State"/>
                                                <ErrorMessage name={`addresses.${index}.state`} component="div" />
                                            </Grid>
                                            {<Button type="button" color="warning" onClick={() => arrayHelpers.remove(index)}>
                                                Remove Address
                                            </Button> }
                                        </Grid>
                                    ))}
                               
                                    { <Button type="button" color="secondary" onClick={() => arrayHelpers.push({ postalCode: '', country: '', streetName: '' })}>
                                        Add Address
                                    </Button> }
                            </>
                        )}
                    </FieldArray>
                                                            
                    <Button type="submit" color='primary'>Submit</Button>
                </Form>
            )}
        </Formik>
    );
};

export default EmployeeForm;

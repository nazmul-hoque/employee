import React from 'react';
import EmployeeForm from '../components/EmployeeForm';
import  Employee  from '../types/Employee';
import axios from 'axios';
import { fetchEmployees } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';
import { Grid3x3Rounded } from '@mui/icons-material';
import { Grid } from '@mui/material';
import Address from '../types/Address';
import EmployeeForm4 from '../components/EmployeeForm4';
import EmployeeForm3 from '../components/EmployeeForm3';

const AddEmployee: React.FC = () => {
    const initialValues: Employee = {
        id:-1,
        firstName: '',
        lastName:'',
        addresses: [{} as Address],
        email: '',
        phone: '',
    };

    const navigate =useNavigate();
    const handleSubmit = (employee: Employee) => {
        
        console.log(employee)

        if (employee.id === -1) {
            // Add new employee
            employee.id=0
            employee.addresses.forEach((itm) => {
                itm.apartmentNumber = Number(itm.apartmentNumber)
            })
            axios.post('https://procom-interview-employee-test.azurewebsites.net/Employee', employee)
            .then(
                () =>navigate('/')  
            );            
        }
            
    };

    return (
        <Grid sx={{m:5}}>
            <h2>Add Employee</h2>
            <EmployeeForm3 initValues={initialValues} onSubmit={handleSubmit} />
        </Grid>
    );
};

export default AddEmployee;

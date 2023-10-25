import React, { useMemo } from 'react';
import EmployeeForm from '../components/EmployeeForm';
import Employee  from '../types/Employee';
//import EditEmployeeProps from '../types/EditEmployeeProps'
import axios from 'axios';
import { Paper, Typography } from '@mui/material';
import { useParams } from 'react-router';
import { fetchEmployee } from '../services/EmployeeServices';
import { useNavigate } from 'react-router-dom';
import Address from '../types/Address';
import EmployeeForm2 from '../components/EmployeeForm2';
import EmployeeForm3 from '../components/EmployeeForm3';
import EmployeeForm4 from '../components/EmployeeForm4';


const EditEmployee: React.FC<any> = () => {
    const {id} =useParams()
    //const [employee, setEmployee] = React.useState<Employee>({} as Employee);

    const [employee, setEmployee] = React.useState<Employee>({
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        addresses: [{
            streetName: '',
            postalCode: '',
            apartmentNumber: 0,
            state: '',
            country: ''
        } as Address],
    } as Employee);

    React.useEffect(() => {
        async function fetchData() {
            const employeeData = await fetchEmployee(Number(id));
            console.info ("Rendered at", new Date())
            console.info("Getting data", employeeData)
            if(employeeData)
            setEmployee(employeeData);
        }

        fetchData();
       
    }, [id]);
    
    const navigate =useNavigate()
    const handleSubmit = (employee: Employee) => {

        employee.addresses.forEach((itm)=>{
            itm.apartmentNumber =Number(itm.apartmentNumber)
        })

        console.info("modified",employee)
        // Edit existing employee
        axios.put(`https://procom-interview-employee-test.azurewebsites.net/Employee/${employee.id}`, employee)
            .then(
                () => navigate('/')
            )
    };

    return (
        <Paper elevation={1} sx={{width:'500px'}}>
            <Typography variant='h6'>Edit Employee</Typography>
            <EmployeeForm3 initValues={employee}  onSubmit={handleSubmit} />
        </Paper>
    );
};

export default EditEmployee;

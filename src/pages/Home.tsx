import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeList from '../components/EmployeeList';
import  Employee  from '../types/Employee';
import { Grid, IconButton, Typography } from '@mui/material';
import { Add } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    // const [loading, setLoading] = useState(true)
    const [employees, setEmployees] = useState<Employee[]>([])

    const fetchEmployees = async () => {
        try {
            const response = await axios.get<Employee[]>('https://procom-interview-employee-test.azurewebsites.net/Employee');
            setEmployees(response.data);
            //setLoading(false)
        } catch (error) {
            console.error('Error fetching employees:', error);
            // setLoading(false)
        }
    };
    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleDelete = (employeeId: number) => {
        axios.delete(`https://procom-interview-employee-test.azurewebsites.net/Employee/${employeeId}`).then(() => fetchEmployees());
    };

    return (
        <Grid>
            <Typography variant='h3'>Employee List</Typography>
            <Link to='/employee/add'>
                <IconButton>
                    <Add />
                </IconButton>
            </Link>Add Employee
            
            <EmployeeList employees={employees} onDelete={handleDelete} />
        </Grid>
    );
};

export default Home;

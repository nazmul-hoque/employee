import React from 'react';
import  Employee  from '../types/Employee';
import {

    TableBody,
    TableCell,
    TableRow,
    // Typography,
    IconButton,
} from '@mui/material'
import { Link } from 'react-router-dom';

import { Delete, Edit } from '@mui/icons-material';

interface EmployeeListItemProps {
    employee: Employee;
    onDelete: () => void;
}

const EmployeeListItem: React.FC<EmployeeListItemProps> = ({ employee, onDelete }) => {
    return (
       
                <TableBody>
                            <TableRow key={employee.id}>
                            <TableCell>{employee.firstName}</TableCell>
                            <TableCell>{employee.lastName}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.phone}</TableCell>
                            <TableCell>
                                <Link to={`/employee/${employee.id}`}>
                                    <IconButton>
                                        <Edit />
                                    </IconButton>
                                </Link>
                                <IconButton onClick={onDelete}>
                                    <Delete />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                </TableBody>
           
    );
};

export default EmployeeListItem;

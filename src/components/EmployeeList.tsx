import React, { useState } from 'react';
// import Employee  from '../types/Employee';
import EmployeeListItem from './EmployeeListItem';
import EmployeeListProps from '../types/EmployeeListProps';
import {
    Paper,
    Table,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@mui/material'

const EmployeeList: React.FC<any> = ({ employees, onDelete }:EmployeeListProps) => {
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    {employees?.map((employee) => (
                        <EmployeeListItem key={employee.id} employee={employee} onDelete={() => onDelete(employee.id)} />
                    ))}
                </Table>
            </TableContainer>
        </div>
    );
};

export default EmployeeList;

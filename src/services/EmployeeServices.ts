import axios from "axios";
import Employee from "../types/Employee";
import Address from "../types/Address";

export const fetchEmployees = async () => {
    try {
        const response = await axios.get<Employee[]>('https://procom-interview-employee-test.azurewebsites.net/Employee');
        return response.data
        
    } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
    }
};

export const fetchEmployee = async (id: number):Promise<Employee |null> => {
    try {
        const response = await axios.get<Employee>(`https://procom-interview-employee-test.azurewebsites.net/Employee/${id}`);
        return response.data
        
    } catch (error) {
        console.error('Error fetching employee:', error);
        return {
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
        } as Employee;
    }
}
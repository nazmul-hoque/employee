import Employee from "./Employee";

interface EmployeeFormProps {
    initValues: Employee;
    onSubmit: (values: Employee) => void; 
    setEmp?: (values: Employee) => void;
}
export default EmployeeFormProps
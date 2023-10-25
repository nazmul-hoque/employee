import Employee from "./Employee";
interface EmployeeListProps {
    employees: Employee[];
    onDelete: (id: number) => void;
}

export default EmployeeListProps
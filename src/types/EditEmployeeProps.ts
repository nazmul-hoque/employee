import Employee from "./Employee";

export default interface EditEmployeeProps {
     //employee: Employee;
     onSave: (values: Employee) => void;
 }

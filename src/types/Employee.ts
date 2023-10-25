import Address from "./Address";
interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    addresses: Address[]
}
export default Employee
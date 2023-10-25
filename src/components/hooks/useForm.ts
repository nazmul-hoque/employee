import { useState } from "react";
import Employee from "../../types/Employee";

// // useForm functional componen
// export const useForm = (callback: any, initialState = {}) => {
//     const [values, setValues] = useState(initialState);
//     // onChange
//     const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         setValues({ ...values, [event.target.name]: event.target.value });
//     };

//     // onSubmit
//     const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         await callback(); // triggering the callback
//     };
//     // return values
//     return {
//         onChange,
//         onSubmit,
//         values,
//     }
// }


type FormValues=Employee;
type FormEventHandlers = {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    //onSubmit: (event: React.FormEvent) => void;
    values:FormValues
};
//function useForm(callback: () => void, initialValues: FormValues): FormEventHandlers {

function useForm( initialValues: FormValues): FormEventHandlers {
    const [values, setValues] = useState<FormValues>(initialValues);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    // const handleSubmit = (event: React.FormEvent) => {
    //     event.preventDefault();
    //     //callback(); // Call the provided callback function for form submission
    // };

    return {
        onChange: handleChange,
        //onSubmit: handleSubmit,
        values,
    };
}

export default useForm;

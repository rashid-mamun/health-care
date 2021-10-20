import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import './Appoinment.css'

const Appoinment = () => {
    const history = useHistory();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        history.push('/thankyou')
    };
    return (
        <div className='py-5 d-flex bg-white justify-content-center align-items-center'>
            <div className=' d-flex  py-5 justify-content-center align-items-center'>

                <form className="appoinment-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Doctors Name" defaultValue="" {...register("doctorsName")} required />
                    <input placeholder="Doctors Department Name" defaultValue="" {...register("doctorsDepartmentName")} required />
                    <input placeholder="Your  Address" defaultValue="" {...register("address")} required />

                    {/* <Select name="gender" options={["female", "male", "other"]} /> */}

                    <input placeholder="Your City" defaultValue="" {...register("city")} required />
                    <input placeholder="Your phone number" defaultValue="" {...register("phone")} required />

                    <input type="submit" />
                </form>


            </div>

        </div>
    );
};

export default Appoinment;
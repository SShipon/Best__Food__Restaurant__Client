import React from 'react';
import { toast } from 'react-toastify';

const Register = () => {
    const notify = () => toast("Wow so easy!");
    return (
        <div>
            <button className='btn susses' onClick={notify}>Notify!</button>
            <h3>Hey customer Register now</h3>  
        </div>
    );
};

export default Register;
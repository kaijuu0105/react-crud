import React from 'react';

const Form = ({ label, type, placeholder, register, errorMessage }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
};

export default Form;

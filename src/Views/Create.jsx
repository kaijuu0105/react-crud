import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = async () => {
        try {
            const response = await axios.post('https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud', {
                firstName,
                lastName,
                checkbox,
            });
            console.log('Data posted successfully:', response.data);
        } catch (error) {
            console.error('Error posting data:', error);
        }
    };

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        placeholder='Last Name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox
                        label='I agree to the Terms and Conditions'
                        checked={checkbox}
                        onChange={() => setCheckbox(!checkbox)}
                    />
                </Form.Field>
                <Button onClick={postData} type='button'>Submit</Button>
            </Form>
        </div>
    );
};

export default Create;

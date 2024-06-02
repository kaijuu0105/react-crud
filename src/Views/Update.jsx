import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Update = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'))
    }, []); // 依存配列を追加

    const updateApiData = () => {
        axios.put(`https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud/${id}`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            navigate('/read');  // 成功したら '/read' にリダイレクト
        });
    }

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
                <Button onClick={updateApiData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
};

export default Update;

import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [ apiData, setApiData ] = useState([]);
    useEffect(() => {
        axios.get(`https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud`)
        .then((response) => {
            // console.log(response);
            setApiData(response.data)
        })
    }, []);

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox);
    }

    const deleteData = (id) => {
        axios.delete(`https://663f8e48e3a7c3218a4d61b8.mockapi.io/api/v1/crud/${id}`)
            .then(() => {
                // 削除後にテーブルのデータを更新する
                setApiData(apiData.filter(item => item.id !== id));
            })
            .catch((error) => {
                console.error('データの削除に失敗しました:', error);
            });
    };

    console.log(setData);
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                  {apiData.map((data, index) => {
                     return(
                        <Table.Row key={index}>
                           <Table.Cell>{data.firstName}</Table.Cell>
                           <Table.Cell>{data.lastName}</Table.Cell>
                           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                           <Link to='/update'>
                              <Table.Cell><Button onClick={() => setData(data)}>Update</Button></Table.Cell>
                           </Link>
                           <Table.Cell><Button onClick={() => deleteData(data.id)}>Delete</Button></Table.Cell>
                        </Table.Row>
                     )
                  })}
                </Table.Body>
            </Table>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

function Companies() {
    // styled
    const Ul = Styled.ul`
    margin:"0 20px 0 0";
display :flex;

`;

    const Li = Styled.li`
margin:"0 20px 0 0";
display :"inline-block";
list-style:none;
margin-right:35px;
color:rgb(80, 72, 229);
font-weight:600;
font-size:16px;
text-aling:center;
cursor:pointer
`;

    const Button = Styled.button`
    background-color:rgb(80, 72, 229);
    color:#fff;
    padding:7px;
    font-weight:600;
   
    border:none;



`;

    const [datas, setdatas] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await axios.post('https://demo1779595.mockable.io/companies');
        setdatas(response.data.companiesList);
        console.log(response.data.companiesList);
    };
    return (
        <div>
            <div className="d-flex justify-content-between">
                <h2 className="my-3">
                    <strong>Companies</strong>
                </h2>

                <div>
                    <Ul>
                        <Li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-arrow-bar-up"
                                width="44"
                                height="28"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="12" y1="4" x2="12" y2="14" />
                                <line x1="12" y1="4" x2="16" y2="8" />
                                <line x1="12" y1="4" x2="8" y2="8" />
                                <line x1="4" y1="20" x2="20" y2="20" />
                            </svg>
                            Import
                        </Li>
                        <Li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-arrow-bar-to-down"
                                width="44"
                                height="28"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <line x1="4" y1="20" x2="20" y2="20" />
                                <line x1="12" y1="14" x2="12" y2="4" />
                                <line x1="12" y1="14" x2="16" y2="10" />
                                <line x1="12" y1="14" x2="8" y2="10" />
                            </svg>
                            Export
                        </Li>
                        <Button className="rounded">Add Companies </Button>
                    </Ul>
                </div>
            </div>

            <div className="bg-white py-3 px-3 rounded-1 border">
                <input className="form-control me-2 w-50 p-3 my-3 rounded-1" type="search" placeholder="Search" aria-label="Search"></input>
            </div>

            <table className="table my-2">
                <thead>
                    <tr>
                        <th scope="col">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        </th>

                        <th scope="col">Name</th>
                        <th scope="col">Company</th>
                        <th scope="col">Role</th>
                        <th scope="col">Verified</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {datas &&
                        datas.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    </td>
                                    <td>{item.name}</td>
                                    <td>{item.company}</td>
                                    <td>{item.role}</td>
                                    {item.verified ? <td>true</td> : <td>false</td>}

                                    <td>{item.status}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
}

export default Companies;

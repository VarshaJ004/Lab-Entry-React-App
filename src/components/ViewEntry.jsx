import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import './home.css'


const ViewEntry = () => {

    const [entry, changeEntry] = useState([])

    const fetchData = () => {
        axios.get("http://localhost:3001/view-entry")
            .then((response) => {
                changeEntry(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
           <Navbar />

            <div className="container">
                <h2 className="heading">View Lab Entries</h2>

                <div className="row">
                    <div className="col-12">

                        <div className="table-responsive">

                            <table className="table table-bordered table-striped table-dark">

                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Course</th>
                                        <th>Semester</th>
                                        <th>Department</th>
                                        <th>Date</th>
                                        <th>Time In</th>
                                        <th>Time Out</th>
                                    </tr>
                                </thead>

                                <tbody>

                                    {entry.map(
                                        (value, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{value.name}</td>
                                                    <td>{value.course}</td>
                                                    <td>{value.sem}</td>
                                                    <td>{value.department}</td>
                                                    <td>{value.date}</td>
                                                    <td>{value.timeIn}</td>
                                                    <td>{value.timeOut}</td>
                                                </tr>
                                            )
                                        }
                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default ViewEntry
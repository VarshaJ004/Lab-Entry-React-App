import React, { useState } from 'react'
import axios from 'axios'



const AddEntry = () => {

    const [input, changeInput] = useState({
        name: "",
        course: "",
        sem: "",
        department: "",
        date: "",
        timeIn: "",
        timeOut: ""
    })

    const [message, setMessage] = useState("")
    const [error, setError] = useState("")

    const inputHandler = (event) => {
        changeInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const readValue = () => {
        console.log(input)

        axios.post("http://localhost:3000/add-entry", input)
            .then((response) => {
                console.log(response.data)

                setMessage("Lab Entry Added Successfully")
                setError("")

                changeInput({
                    name: "",
                    course: "",
                    sem: "",
                    department: "",
                    date: "",
                    timeIn: "",
                    timeOut: ""
                })
            })
            .catch((error) => {
                console.error(error)

                if (error.response) {
                    setError(error.response.data.message)
                } else {
                    setError("Something went wrong")
                }

                setMessage("")
            })
    }

    return (
        <div>
          

            <div className="container">
                <h2 className="heading">Lab Entry</h2>

                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}

                <div className="row">
                    <div className="col-12">

                        <div className="row g-4">

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Name</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={input.name}
                                    onChange={inputHandler}
                                    placeholder="Enter Name"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Course</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="course"
                                    value={input.course}
                                    onChange={inputHandler}
                                    placeholder="Enter Course"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Semester</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="sem"
                                    value={input.sem}
                                    onChange={inputHandler}
                                    placeholder="Enter Semester"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Department</b></label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="department"
                                    value={input.department}
                                    onChange={inputHandler}
                                    placeholder="Enter Department"
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Date</b></label>
                                <input
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    value={input.date}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Time In</b></label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="timeIn"
                                    value={input.timeIn}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <label className="form-label text-light"><b>Time Out</b></label>
                                <input
                                    type="time"
                                    className="form-control"
                                    name="timeOut"
                                    value={input.timeOut}
                                    onChange={inputHandler}
                                />
                            </div>

                            <div className="col-md-6">
                                <button
                                    className="btn btn-submit"
                                    onClick={readValue}
                                >
                                    Add Entry
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEntry
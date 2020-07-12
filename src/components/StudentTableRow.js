import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import {faTrash,faEdit} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class StudentTableRow extends Component {

    constructor(props) {
        super(props);
        this.deleteStudent = this.deleteStudent.bind(this);
    }

    deleteStudent() {
        axios.delete('http://localhost:4000/students/delete-student/' + this.props.obj._id)
            .then((res) => {
                console.log('Student successfully deleted!'); alert("Deleted.");
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <tr>
                <td>{this.props.obj.name}</td>
                <td>{this.props.obj.email}</td>
                <td>{this.props.obj.rollno}</td>
                <td>
                    <Link className="btn btn-primary" to={"/edit-student/" + this.props.obj._id}>
                        <FontAwesomeIcon icon={faEdit} />   Edit
                    </Link>

                    <Link className="btn btn-danger" onClick={this.deleteStudent} size="sm" variant="danger"> <FontAwesomeIcon icon={faTrash} /> Delete</Link>
                </td>
            </tr>
        );
    }
}
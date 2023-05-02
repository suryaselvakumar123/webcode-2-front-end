import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import 'bootstrap/dist/css/bootstrap.min.css';
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ContactUs() {

    const navigate = useNavigate();
    const [status, setStatus] = useState("Send");
    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        setStatus("Submit");
        alert("Message sent successfully!");
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginLeft: '100px', marginTop: '50px' }} className="add-user-form">
            <h1 style={{ color: "green", fontWeight: 'bolder', fontFamily: 'cursive' }}>✨Contact Us✨</h1><br />
            <TextField
                id="name"
                name="name"
                label="Enter your name"
                type="text"
                variant="outlined"
                style={{ width: '800px' }}
                required
            /><br />
            <br />
            <TextField
                id="email"
                name="email"
                label="Enter your Email"
                variant="outlined"
                style={{ width: '800px' }}
                required
            /><br />
            <br />
            <TextField
                id="message"
                name="message"
                label="Enter your message"
                variant="outlined"
                style={{ width: '800px' }}
                required
            /><br />
            <br />
            <Button
                type="submit"
                variant="contained"
                color="success"
            >
                {status}
            </Button>&nbsp;&nbsp;

            <Button variant="contained" color="success" onClick={() => navigate(-1)}>
                <ArrowBackIosIcon /> BACK
            </Button>
        </form>
    );
}

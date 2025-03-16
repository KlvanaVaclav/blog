import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

const LoginModal = ({ open, onClose, onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // Hardcoded credentials
        const correctUsername = "admin";
        const correctPassword = "p@55";

        if (username === correctUsername && password === correctPassword) {
            onLogin(); // If credentials are correct, log in the user
        } else {
            setError("Invalid username or password");
        }
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                {error && (
                    <div style={{ color: "red", marginBottom: "10px" }}>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Username"
                        fullWidth
                        variant="outlined"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        type="password"
                        fullWidth
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        margin="normal"
                    />
                    <DialogActions>
                        <Button onClick={onClose} color="primary">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary">
                            Login
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;

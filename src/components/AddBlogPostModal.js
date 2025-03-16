// src/components/AddBlogPostModal.js
import React, { useState } from "react";
import { Modal, Fade, Box, TextField, Button, Typography, Backdrop } from "@mui/material";

const AddBlogPostModal = ({ open, onClose, onAddPost }) => {
    const [newPost, setNewPost] = useState({ title: "", content: "" });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newPost.title && newPost.content) {
            onAddPost(newPost);
            setNewPost({ title: "", content: "" }); // Reset the form
            onClose(); // Close the modal after submission
        }
    };

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        bgcolor: "background.paper",
                        border: "2px solid #000",
                        boxShadow: 24,
                        p: 4,
                        width: "80%",
                        maxWidth: "600px",
                    }}
                >
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        Add New Post
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            name="title"
                            value={newPost.title}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            label="Content"
                            variant="outlined"
                            fullWidth
                            name="content"
                            value={newPost.content}
                            onChange={handleInputChange}
                            sx={{ mb: 2 }}
                        />
                        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                sx={{ mr: 2 }}
                            >
                                Add Post
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                onClick={onClose}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default AddBlogPostModal;

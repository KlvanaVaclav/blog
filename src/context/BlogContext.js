import React, { createContext, useContext, useState, useEffect } from "react";
import { getBlogPosts, addBlogPost, deleteBlogPost, updateBlogPost } from "../utils/db"; // Import the db functions

// Create BlogContext
const BlogContext = createContext();

// Custom hook to use BlogContext
export const useBlog = () => {
    const context = useContext(BlogContext);
    if (!context) {
        throw new Error("useBlog must be used within a BlogProvider");
    }
    return context;
};

// BlogProvider component to wrap your app
export const BlogProvider = ({ children }) => {
    const [blogPosts, setBlogPosts] = useState([]);

    // Fetch blog posts from IndexedDB
    const fetchBlogPosts = async () => {
        try {
            const posts = await getBlogPosts();
            setBlogPosts(posts);
        } catch (error) {
            console.error("Error fetching blog posts:", error);
        }
    };

    // Add a new post
    const handleAddPost = async (newPost) => {
        try {
            await addBlogPost(newPost); // Add to IndexedDB
            setBlogPosts((prevPosts) => [...prevPosts, newPost]); // Update local state
        } catch (error) {
            console.error("Error adding post:", error);
        }
    };

    // Delete a post
    const handleDeletePost = async (id) => {
        try {
            await deleteBlogPost(id); // Remove from IndexedDB
            setBlogPosts((prevPosts) => prevPosts.filter((post) => post.id !== id)); // Update local state
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };

    // Update a post
    const handleUpdatePost = async (updatedPost) => {
        try {
            await updateBlogPost(updatedPost); // Update in IndexedDB
            setBlogPosts((prevPosts) =>
                prevPosts.map((post) =>
                    post.id === updatedPost.id ? updatedPost : post
                )
            ); // Update local state
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    return (
        <BlogContext.Provider
            value={{ blogPosts, handleAddPost, handleDeletePost, handleUpdatePost }}
        >
            {children}
        </BlogContext.Provider>
    );
};

// src/utils/db.js
import { openDB } from "idb"; // Assuming you're using idb library for IndexedDB

const DB_NAME = "blogDB";
const DB_VERSION = 1;
const STORE_NAME = "posts";

// Open IndexedDB
const openDatabase = async () => {
    return openDB(DB_NAME, DB_VERSION, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: "id" });
            }
        },
    });
};

// Add a new blog post
export const addBlogPost = async (post) => {
    const db = await openDatabase();
    await db.put(STORE_NAME, post);
};

// Get all blog posts
export const getBlogPosts = async () => {
    const db = await openDatabase();
    return await db.getAll(STORE_NAME);
};

// Delete a blog post
export const deleteBlogPost = async (id) => {
    const db = await openDatabase();
    await db.delete(STORE_NAME, id);
};

// Update an existing blog post
export const updateBlogPost = async (post) => {
    const db = await openDatabase();
    await db.put(STORE_NAME, post);
};

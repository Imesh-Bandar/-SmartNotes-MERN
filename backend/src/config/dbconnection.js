import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

//mongodb+srv://imeshfsdinfo:kQZAHt71TBqVB6Ft@cluster0.slox4dr.mongodb.net/SmartNotes?retryWrites=true&w=majority&appName=Cluster0


export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully");

    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1); // Exit the process with failure

    }
}
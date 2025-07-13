import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {

    try {
        const { success } = await ratelimit.limit("my-rate-limit");

        
        if (!success) {
            return res.status(429).json({ message: "too many request try again later" });
        }
        next(); // Proceed to the next middleware or route handler if the rate limit is not exceeded

    } catch (error) {
        console.error("Rate limiter error:", error);
        return res.status(500).json({ message: "Internal Server Error" });
        next(error); // Call next with the error to pass it to the error handling middleware

    }


}

export default rateLimiter;
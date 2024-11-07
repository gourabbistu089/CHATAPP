import { User } from "../models/user.model.js";

export const getUserForSideBar = async (req, res) => {
    try {
        const loggedUserId = req.user._id;
        // get all users except the logged in user
        const allUsers = await User.find({ _id: { $ne: loggedUserId } }).select("-password -refreshToken");
        res.status(200).json(allUsers);
        
    } catch (error) {
        console.log("Error while getting user : ", error.message);
        res
            .status(500)
            .json({ success: false, message: "Error while getting user" });
        
    }
}
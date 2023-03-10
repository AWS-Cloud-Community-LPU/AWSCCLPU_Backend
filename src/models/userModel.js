import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: false,
        },
        password: {
            type: String,
            required: true,
        },
        resetPasswordToken: String,
        resetPasswordExpiration: Date,
    },
    {timestamps: true}
);

export default mongoose.model("User", userSchema);

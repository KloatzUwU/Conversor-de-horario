import mongoose from "mongoose";

const PstSchema = new mongoose.Schema(
    {
        time: {type: Number},
        timezone: {type: String},
        summertime: {type: Boolean}
    },
    {
        versionKey: false
    }
)

const PST = mongoose.model("PST", PstSchema)

export default PST;
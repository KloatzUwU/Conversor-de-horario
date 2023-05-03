import mongoose from "mongoose";

const EestSchema = new mongoose.Schema(
    {
        time: {type: Number},
        timezone: {type: String},
        summertime: {type: Boolean}
    },
    {
        versionKey: false
    }
)

const EEST = mongoose.model("EEST", EestSchema)

export default EEST;
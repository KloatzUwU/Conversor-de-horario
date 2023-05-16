import mongoose from "mongoose";

const BrtSchema = new mongoose.Schema(
    {
        time: {type: Number},
        timezone: {type: String},
        summertime: {type: Boolean}
    },
    {
        versionKey: false
    }
)

const BRT = mongoose.model("BRT", BrtSchema)

export default BRT;

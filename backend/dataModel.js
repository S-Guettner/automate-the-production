import mongoose from "mongoose"

const dataSchema = mongoose.Schema(
    {
        price: {
            type: Number,
            default: 50
        },

        max_workload: {
            type: Number,
            default: 100
        },

        current_workload: {
            type: Number,
            default: 0
        },

        val_current_workload: {
            type: Number,
            default: 0
        }, 

        bank_balance: {
            type: Number,
            default: 0
        }
    },

    {
        timestamps: true
    }
)


const dataSet = mongoose.model('dataSet',dataSchema )

export default dataSet
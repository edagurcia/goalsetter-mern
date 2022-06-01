const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please add a name"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please add a email"],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please add a password"],
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("User", userSchema);

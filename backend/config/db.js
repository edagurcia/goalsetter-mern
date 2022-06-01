const mongoose = require("mongoose");

const connectDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		const url = `${connection.connection.host}:${connection.connection.port}`;
		console.log(`MongoDB Server en ${url}`.cyan.underline);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

module.exports = connectDB;

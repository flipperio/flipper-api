/**
* Return the appropriate database uri for the current environment type
*/
module.exports = function dbUri() {
	const env = process.env.NODE_ENV;
	if (env === 'production') {
		return process.env.DB_PROD_URI;
	}
	else if (env === 'testing') {
		return process.env.DB_TEST_URI;
	}

	return process.env.DB_DEV_URI;
};

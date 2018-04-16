
const PORT = process.env.PORT || 3000;
const dbConfig = "mongodb://localhost:27017/dbmfc";
const MONGO_DUPLICATE_CODE = 11000;

module.exports = {

    PORT: PORT,
    db: dbConfig,
    MONGO_DUPLICATE_CODE: MONGO_DUPLICATE_CODE

};
require("dotenv/config")
require("express-async-errors")
const AppError = require('./utils/AppError')
const migrationsRun = require("./database/sqlite/migrations");
const { UPLOADS_FOLDER } = require('./configs/upload');
const cors = require('cors');
const morgan = require('morgan')

const express = require('express')

const routes = require('./routes')
migrationsRun();

const app = express();
app.use(cors())
const PORT = process.env.SERVER_PORT || 3003;

app.use(express.json())
app.use(morgan('dev'))
app.use(routes);

app.use("/files", express.static(UPLOADS_FOLDER))

app.use((error, request, response, next) => {

    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});

app.listen(PORT, () => console.log(`Server is running ${PORT}`));


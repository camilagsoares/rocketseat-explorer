require("express-async-errors")
const AppError = require('./utils/AppError')
const migrationsRun = require("./database/sqlite/migrations");
const uploadConfig = require('./configs/upload')

const express = require('express')

const routes = require('./routes')
migrationsRun();

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(routes);

app.use("/files",express.static(uploadConfig))

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


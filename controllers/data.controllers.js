const { response } = require('express');

/**
 * The function `postData` is an asynchronous function that logs the data from the request body and
 * handles any errors that occur.
 * @param req - The `req` parameter is the request object that contains information about the incoming
 * HTTP request, such as the request headers, request body, and request parameters.
 * @param res - The `res` parameter is the response object that is used to send the response back to
 * the client. It is an instance of the `http.ServerResponse` class in Node.js.
 * @returns In the catch block, a response with status code 500 and a JSON object containing the
 * properties "ok" set to false and "msg" set to 'Error inesperado, porfavor intente nuevamente' is
 * being returned.
 */
const postData = async(req, res) => {

    try {

        const data = req.body;

        console.log(data);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, porfavor intente nuevamente'
        });

    }


};

const postDataParams = async(req, res) => {

    try {

        const data = req.body;
        const datos = req.params.datos;

        console.log(data);
        console.log(datos);

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error inesperado, porfavor intente nuevamente'
        });

    }


};

// EXPORTS
module.exports = {
    postData,
    postDataParams
};
var axios = require('axios');

async function postUser(args, callback) {
    try {
        // Realizar la solicitud POST al servicio de creación de usuarios
        const response = await axios.post('http://localhost:3003/users', {
            userIdNumber: args.userIdNumber,
            userName: args.userName,
            userAge: args.userAge,
            userEmail: args.userEmail,
            userPhone: args.userPhone,
            userCity: args.userCity,
            userCountry: args.userCountry,
            userPostalCode: args.userPostalCode
        });

        // Si la operación fue exitosa, devolver una respuesta con el resultado
        callback({
            result: "Success",
            userId: response.data.userId
        });
    } catch (error) {
        // Si hubo un error, manejarlo y devolver una respuesta de error
        console.error(error);
        console.log(error.response.data);
        callback({
            result: "Errorsadasdasd"
        });
    }
}

async function getUser(args, callback) {
    try {
        // Realizar la solicitud GET al servicio para obtener información del usuario
        const response = await axios.get('http://localhost:3003/users/' + args.userIdNumber);

        // Devolver una respuesta con la información del usuario obtenida
        callback({
            result: "Success",
            userData: response.data // Puedes ajustar esto según la estructura de la respuesta real
        });
    } catch (error) {
        // Si hubo un error, manejarlo y devolver una respuesta de error
        console.error(error);
        callback({
            result: "Error"
        });
    }
}

module.exports = {
    post_user: postUser,
    get_user: getUser
};

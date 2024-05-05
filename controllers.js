var axios = require('axios');

async function postUser(args, callback) {
    //create a axios request to the notification service and wait for the result

    await axios.post('http://wheelsun_user_ms:8000/passenger', {
        userIdNumber: parseInt(args.userIdNumber),
        userName: args.userName,
        userAge: parseInt(args.userAge),
        userEmail: args.userEmail,
        userPhone: args.userPhone,
        userAddress: args.userAddress,
        userCity: args.userCity,
        userCountry: args.userCountry,
        userPostalCode: args.userPostalCode
    }).then(function (response) {
        callback({
            result: response.data
        });
    }).catch(function (error) {
        console.log(error);
        callback({
            result: "Error"
        });
    });

}


async function getUser(args, callback) {
    //create a axios request to the notification service and wait for the result
    await axios.get('http://wheelsun_user_ms:8000/passenger/' + args.userIdNumber).then(function (response) {
        callback({
            result: response.data
        });
    }).catch(function (error) {
        console.log(error);
        callback({
            result: "Error"
        });
    });
}


module.exports = {
    post_user: postUser,
    get_user: getUser
};
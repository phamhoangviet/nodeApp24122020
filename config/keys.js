//dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';
dbPassword = 'mongodb://localhost:27017/node_passport_login';

module.exports = {
    mongoURI: dbPassword
};

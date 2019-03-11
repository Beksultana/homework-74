const fs = require('fs');
const path = './messages/';

let data = [];

module.exports = {
    init() {
            fs.readdir(path, (error, file)=> {
                if (file) {
                    file.map(file => {
                        const message = fs.readFileSync(path + file, 'utf8');
                        data.push(JSON.parse(message));
                    })
                }
                if (error){
                    throw new Error("some was happened")
                    }
            });
    },
    getMessages() {
        return data;
    }
};

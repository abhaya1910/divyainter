const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./database');

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());

db.sequelize.sync().then(() => { 
    app.use(require("./src/route/routes"));
    

    app.listen(port, () => { 
        console.log(`Node js server running on port ${port}`);
    })
})





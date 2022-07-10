const express= require('express');
const detailsControler= require('../Components/details');

const detailsRouter = express.Router()
detailsRouter.route("/details")
.get(detailsControler.apiController)
module.exports  = detailsRouter
'use strict';
//========================== Load internal modules ====================

const trailUserDao = require('./trailit_user_Dao');
const AppUtil = require('../appUtils');

//========================== Load Modules End ==============================================

function getAllUserTrail(data) {
	return trailUserDao.getAllTrail(data)
		.then(result => {
			return result;
		})
		.catch(err => console.log(err));
};

//========================== Export Module Start ==============================

module.exports = {
	getAllUserTrail,
};

//========================== Export Module End ===============================
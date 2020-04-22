'use strict';

//========================== Load Modules Start =======================

//========================== Load external modules ====================
// import promise from 'bluebird';
//========================== Load internal modules ====================
// Load user service
const trailUserService = require('./trailit_user_Service');
//========================== Load Modules End ==============================================

/**
 * @function testUserTour
 */

function getAllTrails(data) {
	return trailUserService.getAllUserTrail(data)
		.then(result => {
			return result;
		})
		.catch(err => console.log(err));
};


//========================== Export Module Start ==============================

module.exports = {
	getAllTrails,
};

//========================== Export Module End ===============================
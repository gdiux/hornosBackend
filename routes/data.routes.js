/** =====================================================================
 *  ABONADO ROUTER 
=========================================================================*/
const { Router } = require('express');

// CONTROLLERS
const { postData, postDataParams } = require('../controllers/data.controllers');

const router = Router();

/** =====================================================================
 *  GET DATOS
=========================================================================*/
router.post('/', postData);

/** =====================================================================
 *  GET DATOS PARAMS
=========================================================================*/
router.post('/:datos', postDataParams);

// EXPORT
module.exports = router;
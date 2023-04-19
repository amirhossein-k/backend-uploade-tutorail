const express = require('express')
const {uploade} =require('../helpers/filehelper')
const {singleFileUploade,multipleFileUploade,updateFileSingle} =require('../controllers/fileUploader')
const router = express.Router()

router.route('/singleFile').post(uploade.single('file'),singleFileUploade)
router.route('/multipleFile').post(uploade.array('files'),multipleFileUploade)
router.route('/singleUpdateFile').put(uploade.single('file'),updateFileSingle)
module.exports = router



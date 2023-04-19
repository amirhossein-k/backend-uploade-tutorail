const multer = require("multer");


const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'uploads')
    },
    filename: (req,file,cb)=>{
        cb(
            null,
            new Date().toString().replace(/:/g,'-') + '-' + file.originalname
        )
    }
})

// for filter
const filefilter = (req,file,cb)=>{
    if(file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg')
        {
            cb(null,true)
        }else{
            cb(null,false)
        }
}

const uploade = multer( {storage,filefilter})

module.exports = {uploade}
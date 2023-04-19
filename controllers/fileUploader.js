const SingleFile = require('../models/SingleUploade')
const MultipleFile = require('../models/MultipleUploade')
// uploade one file
const singleFileUploade = async(req,res,next)=>{
    try{
        const file = new SingleFile({
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormater(req.file.size,2)
        })
        await file.save()
        res.status(201).json(file)
       
    }catch(error){
        res.send('erorr')
    }
}
// uploade multiple file
const multipleFileUploade = async(req,res,next)=>{
    try{

        let filesArray = []
        req.files.forEach(item=>{
            const file = {
                fileName : item.originalname,
                filePath : item.path,
                fileType : item.mimetype,
                fileSize : fileSizeFormater(item.size,2)
            }
            filesArray.push(file)
        })
        const multiplefiles = new MultipleFile({
            files: filesArray
        })
        await multiplefiles.save()
        res.status(201).json(multiplefiles)
       
    }catch(error){
        res.send(error.message)
    }
}

// update photo 
const updateFileSingle = async(req,res,next)=>{
    try{
        // first must get detail from database
        const file_database = await SingleFile.findOne({fileName: req.body.name})
        const file = {
            fileName : req.file.originalname,
            filePath : req.file.path,
            fileType : req.file.mimetype,
            fileSize : fileSizeFormater(req.file.size,2)
        }

        if(file_database){
            file_database= file
            await file_database.save()
            res.status(201).json(file_database)
        }
        
    }catch(error){
        res.send(error.message)
    }
}

const fileSizeFormater  = (bytes,decimal)=>{
    if(bytes === 0 ){
        return '0 bytes'
    }

    const dm = decimal || 2
    const Size = ['bytes', 'KB' , 'MB' , 'GB' , 'TB']
    const index = Math.floor(Math.log(bytes)/Math.log(1000))

    return(
        parseFloat((bytes/Math.pow(1000,index)).toFixed(dm)) + ' ' + Size[index]
    )
}

module.exports ={
    singleFileUploade,multipleFileUploade,updateFileSingle
}
import * as multer from 'multer';
import * as express from 'express';


export default new class uploadImage {
    upload(fieldName: string){
        
        const storage = multer.diskStorage({

            destination: (req, file, cb) =>{
                cb(null, './src/uploads')
            }, 
           filename: (req, file, cb) =>{
            cb(null, `${file.filename}-${Date.now()}.png`)
           }

        })

        const uploadFile = multer({storage})

        return (req: express.Request, res: express.Response, next: express.NextFunction) => {
            uploadFile.single(fieldName) (req, res, (error:any)=>{
                if(error){
                    console.error(`Multer Error: ${error}`);
                    return res.status(400).json({message: `Ooops something went error when you upload image, please see this ==>> ${error}`})
                } 
                res.locals.filename = req.file.filename
                next()
            })
        }
    }
}

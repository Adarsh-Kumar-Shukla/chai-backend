import {v2 as cloudinary} from "cloudinary"
import fs from "fs"



cloudinary.config({ 
    cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
    api_key: 'process.env.CLOUDINARY_API_KEY', 
    api_secret: 'process.env.CLOUDINARY_API_SECRET'
});


const uploadOnCloudinary = async (localFilesPath) => {
    try{
        if(!localFilesPath)return null
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilesPath, {
            resource_type: "auto"
        })
        // file has been uploaded on cloudinary
        console.log("file is uploaded on cloudinary ", response.url)
        return response;
    } catch(error) {
        fs.unlinkSync(localFilesPath) // remove the locally saved temporary file as the upload operation
        return null;
    }
}

export {uploadOnCloudinary} 
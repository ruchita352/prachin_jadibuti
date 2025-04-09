let multer = require('multer')
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: "dvapnsdzx",
    api_key: "336954554445712",
    api_secret: "OiyKlwp3FIH7JMdfi4d3DClIjZQ"
})

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "upload",
    },
})

let upload = multer({ storage: storage })
// let upload = multer({dest:"/upload"})

module.exports = { upload, cloudinary }
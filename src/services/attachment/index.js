const express = require("express");
const schema = require("./attachment.schema");
const router = express.Router();

router.post(
	"/",
	schema.create
	/* 
        #swagger.description = 'Upload attachments' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.consumes = ['multipart/form-data']  
        
        #swagger.requestBody = {
            content: {
                "multipart/form-data": {
                    schema: {
                        required: ["File"],
                        properties: {
                            File: {
                                type: "string",
                                format: "binary"
                            }
                        }
                    }
                }
            }
        }

        #swagger.responses[201] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.get(
	"/:filename",
	schema.get
	/* 
        #swagger.description = 'Get Attachment' 

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[404] = {
            description: "Not Found",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

module.exports = router;

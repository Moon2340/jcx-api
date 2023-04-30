const express = require("express");
const schema = require("./users.schema");
const router = express.Router();

router.get(
	"/",
	schema.getAllUsers
	/* 	
        #swagger.description = 'Get all users list' 

        #swagger.parameters['search'] = {
            in: 'query',
            type: "string"
        }
        #swagger.parameters['limit'] = {
            in: 'query',
            type: "number"
        }
        #swagger.parameters['page'] = {
            in: 'query',
            type: "number"
        }
        #swagger.parameters['sort'] = {
            in: 'query',
            type: "string"
        }

        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.get(
	"/:id",
	schema.getUserById
	/* 	
        #swagger.description = 'Get user informations' 


        #swagger.responses[200] = {
            description: "Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.patch(
	"/:id",
	schema.updateUserInformation
	/* 
        #swagger.description = 'Update user informations' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "properties": { 
                            "username": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "tam11a" 
                            },
                            "firstName": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "Rudolf" 
                            },
                            "lastName": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "Tam" 
                            },
                        } 
                    },
                }
            }
        }

        #swagger.responses[200] = {
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

module.exports = router;

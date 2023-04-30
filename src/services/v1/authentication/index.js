const express = require("express");
const router = express.Router();
const schema = require("./authentication.schema");
const { userAuthorized } = require("../../../authentication");

router.post(
	"/register",
	schema.register
	/* 	
        #swagger.description = 'Register a new user' 

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": ["username", "firstName", "lastName", "email", "password"], 
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
                            "email": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "ibrahimsadiktamim@gmail.com" 
                            },
                            "password": { 
                                "type": "string", 
                                "minLength": 6, 
                                "example": "123456" 
                            } 
                            
                        } 
                    },
                }
            }
        }

        #swagger.responses[201] = {
            description: "Registration Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Invalid Credentials",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.post(
	"/login",
	schema.login
	/* 	
        #swagger.description = 'Sign a specific user in' 

        #swagger.requestBody = {
            required: true,
            content: {
                "application/json": {
                    schema: {
                        "required": ["email", "password"], 
                        "properties": { 
                            "email": { 
                                "type": "string", 
                                "minLength": 1, 
                                "example": "hello@example.xyz" 
                            }, 
                            "password": { 
                                "type": "string", 
                                "minLength": 6, 
                                "example": "123456" 
                            } 
                            
                        } 
                    },
                }
            }
        }

        #swagger.responses[200] = {
            description: "Login Successful",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Invalid Credentials",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.get(
	"/validate",
	schema.validate
	/* 	
        #swagger.description = 'Validate user' 

        #swagger.security = [{
            "bearerAuth": []
        }]

        #swagger.responses[200] = {
            description: "Authenticated",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[404] = {
            description: "No User Found",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

router.patch(
	"/update-profile",
	schema.updateProfile
	/*
        #swagger.description = 'Update user' 

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
            description: "Authenticated",
        }   
        #swagger.responses[400] = {
            description: "Invalid Request",
        }   
        #swagger.responses[401] = {
            description: "Unauthenticated",
        }   
        #swagger.responses[404] = {
            description: "No User Found",
        }   
        #swagger.responses[500] = {
            description: "Internal Server Error",
        }   
    */
);

module.exports = router;

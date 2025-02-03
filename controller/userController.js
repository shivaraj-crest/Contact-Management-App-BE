const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users} = require('../models');
const { request } = require('express');

require("dotenv").config();

exports.register = async (req,res) =>{
    try{
        const {username,email,password} = req.body;

        
        const existingUser = await users.findOne(
            {where: {email}}
        );


        if(existingUser){
            return res.status(400).json({message: "Email already exists"})
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const userVal = await users.create({
            username,
            email,
            password: hashedPassword,
        });


        res.status(201).json({message: "User created successfully",userVal});

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            console.error('Validation Errors:', error.errors.map(e => 
                `${e.path}: ${e.message}`
            ).join(', '));
    
            return res.status(400).json({
                error: error.errors.map(e => ({
                    field: e.path, 
                    message: e.message
                }))
            });
        }
    
        if (error.name === 'SequelizeUniqueConstraintError') {
            console.error('Unique Constraint Error:', error.errors.map(e => 
                `${e.path}: ${e.message}`
            ).join(', '));
    
            return res.status(400).json({
                error: error.errors.map(e => ({
                    field: e.path, 
                    message: `Duplicate entry for ${e.path}`
                }))
            });
        }
    
        console.log('hello0000', error.message);
        return res.status(500).json({ error: error.message });
    }
}


exports.login = async (req,res) =>{
    try{
        const {email,password} = req.body;

        const userVal = await users.findOne({where:{email}});
        if(!userVal){
            return res.status(404).json({message:"User not found"})
        }


        const isMatch = await bcrypt.compare(password,userVal.password);
        if(!isMatch){
            return res.status(400).json("Invalid credentials");
        }
        
        const token = jwt.sign(
            {id: userVal.id},
            process.env.JWT_SECRET,
            {expiresIn: "30d"}
        );
        res.status(200).json({message:"Login Successful", token, userId: userVal.id});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


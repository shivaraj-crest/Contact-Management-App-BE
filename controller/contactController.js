const { contacts } = require('../models');

const createContact = async (req, res) => {
    try{
        
        const userId = req.query.userId;
        console.log('hellooooo userId',userId)
        const {name,email,phone} = req.body;
        const contact = await contacts.create({name,email,phone,userId});
        res.status(200).json({message: "Contact created successfully", contact});
    }catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

const getContact = async (req, res) => {
    try{
        const userId = req.query.userId;
        console.log('hellooooo userId',userId)
        const userContacts = await contacts.findAll({
            where: { userId: userId }
        });
        res.status(200).json({message: "Contacts fetched successfully", contacts: userContacts});
    }catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

const updateContact = async (req, res) => {
    try{
        const userId = req.query.userId;    
        const {id,name,email,phone} = req.body;
        const contact = await contacts.update({name,email,phone},{where:{id}});
        res.status(200).json({message: "Contact updated successfully", contact});
    }catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

const deleteContact = async (req, res) => {
    try{
        const userId = req.query.userId;
        const {id} = req.body;
        console.log(`Attempting to delete contact with ID: ${id} for user ID: ${userId}`);
        const contact = await contacts.destroy({where:{id,userId}});

        res.status(200).json({message: "Contact deleted successfully", contact});
    }catch(error){
        res.status(500).json({message: "Internal server error", error: error.message});
    }
}

module.exports = {
    createContact,
    getContact,
    updateContact,
    deleteContact
};

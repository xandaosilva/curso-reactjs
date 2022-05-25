const Photo = require("../models/Photo");
const User = require("../models/User");
const { default: mongoose } = require("mongoose");

// Insert a photo, with an user related to it
const insertPhoto = async (req, res) => {
    const { title } = req.body;
    const image = req.file.filename;
    const reqUser = req.user;
    const user = await User.findById(reqUser._id);

    // Create a photo
    const newPhoto = await Photo.create({ image, title, userId: user.id, userName: user.name });

    // If photo was created successfuly, return data
    if(!newPhoto){
        res.status(422).json({errors: ["Houve um problema, por favor tente novamente mais tarde."]});
        return;
    }

    res.status(201).json(newPhoto);
}

// Remove a photo from DB
const deletePhoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user;
    
    try {
        const photo = await Photo.findById(mongoose.Types.ObjectId(id));

        // Check if photo exists
        if(!photo){
            res.status(404).json({errors: ["Foto não encontrada."]});
            return;
        }

        // Check if photo belongs to user
        if(!photo.userId.equals(reqUser._id)){
            res.status(422).json({errors: ["Ocorreu um erro, por favor tente novamente mais tarde."]});
            return;
        }

        await Photo.findByIdAndDelete(photo._id);
        res.status(200).json({id: photo._id, message: "Foto excluída com sucesso."});
    } catch (error) {
        res.status(404).json({errors: ["Foto não encontrada."]});
        return;
    }
}

// Get all photos
const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({}).sort([["createdAt", -1]]).exec();
    return res.status(200).json(photos);
}

// Get user photos
const getUserPhotos = async (req, res) => {
    const { id } = req.params;
    const photos = await Photo.find({userId: id}).sort([["createdAt", -1]]).exec();
    return res.status(200).json(photos);
}

// Get phot by ID
const getPhotoById = async (req, res) => {
    const { id } = req.params;
    const photo = await Photo.findById(mongoose.Types.ObjectId(id));

    // Check if photo exists
    if(!photo){
        res.status(404).json({errors: ["Foto não encontrada."]});
        return;
    }

    return res.status(200).json(photo);
}

// Update a photo
const updatePhoto = async (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    const reqUser = req.user;
    const photo = await Photo.findById(id);

    // Check if photo exists
    if(!photo){
        res.status(404).json({errors: ["Foto não encontrada."]});
        return;
    }

    // Check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)){
        res.status(422).json({errors: ["Ocorreu um erro, por favor tente novamente mais tarde."]});
        return;
    }

    if(title){
        photo.title = title;
    }

    await photo.save();

    res.status(200).json({photo, message: "Foto atualizada com sucesso."});
}

// Like funtionalitty
const likePhoto = async (req, res) => {
    const { id } = req.params;
    const reqUser = req.user;
    const photo = await Photo.findById(id);

    // Check if photo exists
    if(!photo){
        res.status(404).json({errors: ["Foto não encontrada."]});
        return;
    }

    // Check if user already liked a photo
    if(photo.likes.includes(reqUser._id)){
        res.status(422).json({erros: ["Você já curtiu a foto."]});
        return;
    }

    // Put user id in likes array
    photo.likes.push(reqUser._id);
    photo.save();

    res.status(200).json({photoId: id, userId: reqUser._id, message: "A foto foi curtida."});
}

module.exports = { insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoById, updatePhoto, likePhoto };
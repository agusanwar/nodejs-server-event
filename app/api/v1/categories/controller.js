const Categories = require('./model');
const { getAllCategories, createCategories } = require('../../../services/mongoose/categories');

const index = async (req, res, next) => {
    try {

    const resault = await getAllCategories();
    res.status(201).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

const create = async (req, res, next) => {
    try {
    const resault = await createCategories(req);
    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

const find = async (req, res, next) => {
    try {
    const { id } = req.params;
    const resault = await Categories.findOne({_id: id})

    if(!resault) {
        return res.body(400).json({
            message: 'Id categpries tidak ditemukan'
        });
    }

    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

const update = async (req, res, next) => {
    try {
    const { id } = req.params;
    const { name } = req.body;

    const resault = await Categories.findOneAndUpdate(
        { _id: id },
        { name },
        { new: true, runValidators: true }, 
    );
   
    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
};

const destroy = async (req, res, next) => {
    try {
    const { id } = req.params;
    const resault = await Categories.findByIdAndRemove( id );
   
    res.status(200).json({
        data: resault
    });
        
    } catch (err) {
        next(err);
    }
}

module.exports = {
    index, create, find, update, destroy
}
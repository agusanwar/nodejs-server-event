const Categories = require('../../api/v1/categories/model');
const { BadRequestError } = require('../../errors');

const getAllCategories = async (req, res) => {
    const resault = await Categories.find().select('_id name');

    return resault;
};

const createCategories = async (req) => {
    const { name } = req.body;
    // search category
    const check = await Categories.findOne({ name });

    // check data true or false
    if(check) throw new BadRequestError('name sudah tersedia, silahkan input new name');

    const resault = await Categories.create({ name });

    return resault;
};

module.exports = {
    getAllCategories,
    createCategories,
}


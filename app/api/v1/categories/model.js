const mongoose = require('mongoose');

let categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            minLength: [3, 'Minimal Length Category 3 Karakter'],
            maxLength: [20, 'Maximal Length Category 20 Karakter'],
            required: [true, 'Nama Category harus diisi'],
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
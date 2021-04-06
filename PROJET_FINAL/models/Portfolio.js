const mongoose =require('mongoose');

const PortfolioSchema = new mongoose.Schema({

    name:{
        type:String,
        required: true
    },

    image:{
        type:String

    },
    
    Description:{
        type:String
    }
});

module.exports = Portfolio = mongoose.model('portfolio',PortfolioSchema)
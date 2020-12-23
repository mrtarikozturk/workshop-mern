const mongoose = require('mongoose');
const { Schema } = mongoose;

const schema = new Schema({
    categoryName: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'created',
    },
    description: {
        type: String,
    },
    deletedAt: {
        type: Date,
    },
    products:[{type:Schema.Types.ObjectId, ref:'Product'}]

}, {timestamps:true, collection:'Categories'});

module.exports = Category = mongoose.model('Category', schema);

/**
    1 Product 1 Category
    1 Category n Product
*/


/**
    - Veriler arasinda anlamsal iliski
    -Ne kadar kullanacagim
    -Hangi islemler yapilacak?
    -Sayisal olarak nasil bir iliski var?
--user
userName
email
password
isActive
activationCode

--detail

firstName
lastName
birthDate
tc

--contact
country
city
town
district
phone

    
    Reference Data Models
--user
userName
email
password
isActive
activationCode

--detail

firstName
lastName
birthDate
tc

--contact
country
city
town
district
phone

        One to One 
        One to Many
            -One to Few
            -One to Many
            -One to aLot
        Many to Many
    
    
    
    
    Embeded Data Models

    user:{
        userName
email
password
isActive
activationCode
detail:{
    firstName
lastName
birthDate
tc
},
contacts:[{country
city
town
district
phone
}, {country
city
town
district
phone
}]
    }
*/
 
const { Router } = require("express");
const axios = require("axios");
const { Purchase , User} = require("../db.js");
const router = Router();


router.post("/",async (req,res)=>{

try {
    
    const {products, totalPrice, idUser} = req.body

    const newPurchase = await Purchase.create({
        products,
        totalPrice
    })

    const searchUser = await User.findOne({
        where: { id: idUser }
    })

    if(searchUser){
        newPurchase.addUser(searchUser)
        res.status(200).send(newPurchase)
    }else{
        res.send("no tiene id")
    }
    

} catch (error) {
    res.sendStatus(404)
}

})

router.get('/', async (req, res) => {

    let purchaseTable = await Purchase.findAll({
        include:[
            {
                model: User,
                attributes: ["username"],
                through: {
                    attributes: []
                }
            },
        ],
        
        order: [
            ['id', 'ASC']
        ]
    })

    res.send(purchaseTable);
})


module.exports = router
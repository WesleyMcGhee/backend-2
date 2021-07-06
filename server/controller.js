const houses = require('./db.json');
let houseID = 4;

module.exports= {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },
    createHouse: (req, res) => {
        const { address, price, imageURL } = req.body;

        const newHouse = {
            id: houseID,
            address,
            price,
            imageURL
        }
        houses.push(newHouse);
        houseID++
        res.status(200).send(houses);
    },
    updateHouse: (req, res, next) => {
        const { id } = req.params;
        const { type } = req.body;

        const index = houses.findIndex(house => {
            return house.id === +id;
        });

        if (type === 'plus'){
            houses[index].price += 1000;
            res.status(200).send(houses);
        }else if(type === 'minus'){
            houses[index].price -= 1000;
            res.status(200).send(houses);
        }


    },
    deleteHouse: (req, res) => {
        const { id } = req.params;

        const index = houses.findIndex(house => {
            return house.id === +id;
        });

        if (id === -1){
            res.status(400).send({error: 'That is not a valid ID'});
        }else{
            houses.splice(index, 1);
            res.status(200).send(houses);
        }
    }
}
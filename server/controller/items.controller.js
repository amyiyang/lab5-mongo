const express = require('express');
const router = express.Router();

const ItemsAccessor = require("../model/items.model");

// const items = [{_id: '1234', owner: 'hunter', item: 'backback', count: 1,},
//     {_id: '2345', owner: 'hunter', item: 'pokeball', count: 5}];

router.get('/', (req, res) => {
    return ItemsAccessor.getAllItems()
        .then((response) => res.status(200).send(response),
            (error) =>  res.status(404).send(`Error finding Pokemon:${error}`));

});

router.post('/', (req, res) => {
    // const body = req.body;
    // const id = uuidv4();
    // items.push({
    //     _id: id,
    //     item: body.item,
    //     count: body.count,
    //     health: body.health,
    //     owner: body.owner,
    // });
    // res.status(200).send({message: 'Success!', id: id});

    return ItemsAccessor.insertItem(req.body)
        .then((response) => res.status(200).send(response),
            (error) => res.status(404).send(`Error finding Pokemon:${error}`))
});

// router.get('/:id', function (req, res) {
//     const id = req.params.id;
//     const response = items.find(item => item._id === id);
//     if (response) {
//         return res.status(200).send(response)
//     }
//
//     res.status(404).send({error: 'No Item found for that ID!'});
// });

// router.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const body = req.body;
//     const response = items.find((item) => item._id === id);
//     if (!response) {
//         return res.state(404).send({error: 'Item not found!'});
//     }
//
//     response.name = body.name;
//     response.count = body.count;
//
//     res.status(200).send('Success!');
// });

// router.delete('/:id', function (req, res) {
//     const id = req.params.id;
//     for (var i = items.length - 1; i >= 0; i--) {
//         if (items[i]._id === id) {
//             items.splice(i, 1);
//         }
//     }
//
//     res.status(200).send('Success!');
// });

module.exports = router;
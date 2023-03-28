const { MongoClient, ObjectID } = require('mongodb');

const connURL = 'mongodb+srv://admin:admin@cluster0.hxcjoob.mongodb.net/taskDB?retryWrites=true&w=majority'
const dbName = 'task-manager'

MongoClient.connect(connURL, (error, client) => {
    if(error) return console.log('Unable to connect to database');

    const db = client.db(dbName)
    // db.collection('users').insertOne({
    //     name: 'Hriday',
    //     age: 9
    // })
    // .then(result => console.log('Data inserted', result.ops))
    // .catch(error => console.log(error))

    // db.collection('users').insertMany(
    //     [{
    //         name: 'Rishab',
    //         age: 3
    //     },
    //     {
    //         name: 'Devi',
    //         age: 5
    //     }]
    // )
    // .then(result => console.log('Data inserted', result.ops))
    // .catch(error => console.log(error))

    // db.collection('users').findOne({
    //     name: 'Hriday'
    // })
    // .then(result => console.log('Data found', result))
    // .catch(error => console.log(error))

    // db.collection('users').find({
    //     name: 'Devi'
    // })
    // .toArray()
    // .then(result => console.log('Data found', result))
    // .catch(error => console.log(error))

    // db.collection('users').updateOne({
    //     _id: new ObjectID('64218b747c1f907315ec1ae1')
    // }, { $set: { name: 'Radha' }})
    // .then(result => console.log('Updated data', result.modifiedCount))
    // .catch(error => console.log(error))

    // db.collection('users').updateMany({ age: 5 }, { $set: { age: 6 }})
    // .then(result => console.log('Updated data', result.modifiedCount))
    // .catch(error => console.log(error))

    db.collection('users').deleteOne({
        _id: new ObjectID('64218b747c1f907315ec1ae1')
    })
    .then(result => console.log('Deleted data', result.deletedCount))
    .catch(error => console.log(error))

    db.collection('users').deleteMany({ age: 3 })
    .then(result => console.log('Deleted data', result.deletedCount))
    .catch(error => console.log(error))
})
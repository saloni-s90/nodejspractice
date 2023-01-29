var {MongoClient} = require('mongodb')

var url = 'mongodb://0.0.0.0:27017/'

var dbname = 'practice'
var client = new MongoClient(url)

async function main(){
    await client.connect()

    console.log("Connected Server...");

    const db = client.db(dbname)

    const myCollection = db.collection('docs')

    const insres = await myCollection.insertMany(
        [{a:2},{b:3},{c:7,d:9}],
    )
    console.log("myCollection",insres)
    return 'program finished'
}
main()
.then(console.log)
.catch(console.error)
.finally(()=> {client.close()})
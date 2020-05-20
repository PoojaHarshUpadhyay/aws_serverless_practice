const Responses = require('../common/API_Responses')
const Dynamo = require('../common/Dynamo')

const tableName = process.env.tableName

exports.handler = async event => {
    console.log('event', event);

    if (!event.pathParameters || !event.pathParameters.ID) {
        console.log("failed");
        return Responses._400({message: "missing id or path"})
    }

    let id = event.pathParameters.ID;

    const user = await Dynamo.get(id, tableName).catch(err => {
        console.log("error in Dynamo Get", err)
        return null;
    })

    if (!user) {
        return Responses._400({message: "user not found"});
    }

    return Responses._200({user})
}
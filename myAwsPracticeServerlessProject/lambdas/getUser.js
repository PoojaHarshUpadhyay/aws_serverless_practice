const responses = require('./API_Responses')
exports.handler = async  event =>  {
    console.log('event', event);

    if(!event.pathParameters || !event.pathParameters.ID) {
        console.log("failed");
        return responses._400("missing id or path")
    }

    let id = event.pathParameters.ID;

    if(data[id]) {
        return responses._200(data[id]);
    } else {
        console.log("failed with id not in data");
        return responses._400("failed with id not in data")
    }

}

const  data = {
    1 : {name: 'poo', age: 25},
    2 : {name: 'foo', age: 20},
    3 : {name: 'moo', age: 15},
}
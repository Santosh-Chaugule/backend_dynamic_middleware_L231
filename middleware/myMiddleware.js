//You can store function inside a variable
let HOF = (req, res, next) => {
    console.log(req.query)

    // for(key in object){
    //code block to be executed
    //}

    let fullDetail = ' ';
    for (key in req.query) {

        //objectName["property"]//person["age"]


        console.log(key)
        console.log(req.query[key])

        // fullDetail = fullDetail + req.query[key]
        fullDetail += req.query[key] + ' ';
        //req.query



    }
    console.log(fullDetail)
    req.query = { fullDetail }



    next()
};


//you have to export
//there are two ways can export the node
module.exports = { HOF }
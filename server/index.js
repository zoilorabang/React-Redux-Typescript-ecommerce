const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json({type:'application/json',limit:'50mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'50mb',
    parameterLimit:'50000'
}));


app.get('/api/product/books', (req, res)=>{
    let books = {};
        for(let i=0;i<30;i++){
            books[["ID0",i].join('')]={
                id:["ID0",i].join(''),
                title:["BOOK ID0",i].join(''),
                description:["IDO",i,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",i].join(' '),
                author:"ZCR",
                price:40,
                pageCount:"100",
                img:"https://dummyimage.com/600x400/f34033/f3f2f7",
                isbn:""
            };
        }
    return res.status(200).json({
        books:books
    });
});

app.get('/api/product/book', (req, res)=>{
    let {id} = req.query || {};
    if(id){
        return res.status(200).json({
                    id:[id].join(''),
                    title:["BOOK ",id].join(''),
                    description:[id,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",id].join(' '),
                    author:"ZCR",
                    price:40,
                    pageCount:"100",
                    img:"https://dummyimage.com/600x400/f34033/f3f2f7",
                    isbn:""
        });
    }else{
        return res.status(400).json({
            errorCode:"0000001",
            errorMessage:"Invalid Request"
        })
    }

});


var server = app.listen(4000, function(){
    var host = server.address().address;
    var port = server.address().port;

    console.log("Mock REST API listening at http://%s:%s",host, port);
});

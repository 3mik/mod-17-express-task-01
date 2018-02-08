var express = require('express')
    , fs = require('fs')
    , bodyParser = require('body-parser')
    , app = express()
    , stringifyFile;


app.use(bodyParser.json());

app.get('/getNote', (req, res) => {
    fs.readFile('./test.json', 'utf8', (err, data) => {
        if(err) throw err;
        stringifyFile = data;
        res.send(data)
    });
});

app.post('/updateNote/:note', (req, res) => {
    stringifyFile = stringifyFile.concat(req.params.note);
    fs.writeFile('./test.json', stringifyFile, (err, data) => {
        if(err) throw err;
        console.log('File updated');
        res.send('Updated')
    })
});

app.listen(3000);

    
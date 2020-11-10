const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'de5e55fab0e9457d8f727cdd6027d3f0'
});

const handleApiCall = (req, res) => {
    app.models
    .predict(Clarifai.FACE_DETECT_MODEL, req.body.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json('unable to work with API'))   
}

const handleImage = (req, res, db) => {
    const {id} = req.body;

    // update the entries by adding 1 count
    db('users')
    .where('id', '=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries=>{
        res.json(entries[0]);
    })
    .catch(err => res.status(400).json('unable to get entries'));
}

module.exports = {
    handleImage: handleImage,
    handleApiCall: handleApiCall
}
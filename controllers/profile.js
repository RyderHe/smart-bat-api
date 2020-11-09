const handleProfileGet = (req, res, db) => { // :id enter anything into browser and grab directly
    
    const { id } = req.params;

    // get the user corresponded with the given user id

    db.select('*').from('users').where({
        id: id
    })
    .then(user => {
        if (user.length) { // user id exist
            res.json(user[0]);
        } else { // user = [] user id does not exist
            res.status(400).json("not found");
        }
    })
    .catch(err => res.status(400).json("error getting user"));
}

module.exports = {
    handleProfileGet:handleProfileGet
}
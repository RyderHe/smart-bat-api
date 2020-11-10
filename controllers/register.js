const handleRegister = (req, res, db, bcrypt) => {
    const {email, name, password} = req.body;
    if (!email || !name || !password) {
        return res.status(400).json("incorrect form submission");
    }
    // get the password hash
    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {
        trx.insert({
            hash: hash,
            email: email,
        })
        .into('login')
        .returning('email')
        .then(loginEmail => {
            return trx('users')
            .returning('*') // insert and return all the columns
            .insert({
                email: loginEmail[0],
                name: name,
                joined:new Date()
            })
            .then(user => {
                res.json(user[0]); // always remember to send a response
            })

        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'));
}

module.exports = {
    handleRegister: handleRegister
};
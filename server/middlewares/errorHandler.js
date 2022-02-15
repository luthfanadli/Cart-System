const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case 'UniqueUsername':
            res.status(400).json({ message: 'Username must be unique' })
            break;
        default:
            res.status(500).json(err)
            break;
    }
}

module.exports = errorHandler;
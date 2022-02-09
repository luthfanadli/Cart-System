const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "NOT_FOUND":
            res.status(400).json({ message: 'Product not Found' })
            break;
        default:
            res.status(500).json(err)
            break;
    }
}
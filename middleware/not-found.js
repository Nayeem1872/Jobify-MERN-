const  notFoundMiddleware = (req, res)=> res.status(404).send('Router does not exist')

export default notFoundMiddleware
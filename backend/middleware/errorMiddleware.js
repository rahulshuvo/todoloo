const errorHandler = (err, req, res, next) => {
  const statusCOde = res.statusCOde ? res.statusCOde : 500

  res.status(statusCOde)
  
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  })
}

module.exports = {
  errorHandler
}
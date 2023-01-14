module.exports = (app) => {
    app.get('/alive', (req, res) => {
        res.status(200)
        res.send('OK')
    })

    return app
}

const
    express = require('express'),
    path = require('path'),
    router = express.Router(),
    superagent = require('superagent')

module.exports = () => {

    router.get('/api/search', (req, res) => {
        const { artist } = req.query // this is the same as const show = req.query.show

        superagent
            .get('https://api.spotify.com/v1/search?q='+ artist +'&type=artist')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
            })
    })

     router.get('/api/detai', (req, res) => {
        const { id } = req.query 
        superagent
            .get('https://api.spotify.com/v1/artists/'+id+'/albums?album_type=album&market=US')
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
               
               
            })
    })
    
     
     router.get('/api/det', (req, res) => {
        const { num } = req.query 
        superagent
            .get('https://api.spotify.com/v1/artists/'+num)
            .end((err, response) => {
                if (err)
                    res.send(err)
                else
                    res.json(response.body)
               
               
               
            })
    })
      



    router.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))

    })

    return router
}
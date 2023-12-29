import { AppDataSource } from "./data-source"
import * as express from "express"
import NewsRouter from './app/news/router'

AppDataSource.initialize().then(async () => {
    const app = express()
    
    app.use(express.json())

    // router
    app.use('/api/v1', NewsRouter)

     // port
     const Port = 4000
     app.listen(Port, ()=>{
         console.log(`Server is running in port ${4000}`)
     })

}).catch(error => console.log(error))

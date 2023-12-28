import { AppDataSource } from "./data-source"
// import { User } from "./entity/User"
import * as express from "express"

AppDataSource.initialize().then(async () => {
    const app = express()
    
    app.use(express.json())

     // port
     const Port = 4000
     app.listen(Port, ()=>{
         console.log(`Server is running in port ${4000}`)
     })

}).catch(error => console.log(error))

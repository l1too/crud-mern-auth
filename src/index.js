import app from './server.js'
import {connectDB} from './db.js'

const PORT = 4000

connectDB()

app.listen(PORT,'127.0.0.1', ()=> {
    console.log(`Server running in port http://127.0.0.1:${PORT}`);
})


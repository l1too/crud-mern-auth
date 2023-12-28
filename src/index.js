import app from './server.js'
import {connectDB} from './db.js'

const PORT = 4000

connectDB()

app.listen(PORT, ()=> {
    console.log(`Server running in port http://localhost:${PORT}`);
})


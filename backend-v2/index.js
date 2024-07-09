const express= require('express');
const  app = express();
const cors=require('cors');
const userRoutes= require('./routes/usersRoute');
const courseRoutes= require('./routes/courseRoute');
const applicatopmRoutes= require('./routes/applicationRoute');
const scheduleRoutes= require('./routes/scheduleRoute');

app.use(express.json());
app.use(cors());
app.use('/users',userRoutes);
app.use('/courses',courseRoutes);
app.use('/applications',applicatopmRoutes);
app.use('/schedules',scheduleRoutes);

app.listen(8080,()=>{
    console.log('the server is working')
});
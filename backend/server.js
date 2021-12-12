const app=require('./app');
const {port}=require('./config/config');

require('./config/db');

 
app.listen(port, () => console.log(`Server is running on port:${port}`));
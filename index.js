const express = require('express');
const dotenv = require('dotenv');
const blogRoutes  = require('./routes/blogRoutes');


dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
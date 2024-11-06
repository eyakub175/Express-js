
const createBlog = (req, res) => {
    res.status(201).json({message: 'Blog created successfully'});
};

const readBlog = (req, res) => {
    res.status(200).json({message: 'Blog read successfully'});
};    

const updateBlog = (req, res) => {  
    res.status(200).json({message: 'Blog update successfully'});
};

const deleteBlog = (req, res) => {
    res.status(200).json({message: 'Blog deleted successfully'});
};


module.exports = {
    createBlog,
    readBlog,
    updateBlog,
    deleteBlog,
 };

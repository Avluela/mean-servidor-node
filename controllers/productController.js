const { exists } = require("../models/Product");
const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
        try {
            let product;

            // Creamos nuestro product
            product = new Product(req.body);

            await product.save();
            res.send(product);

        } catch (error) {
            console.log(error);
            res.status(500).send('ups, something was wrong');
        }
}

exports.getAllProduct = async (req, res) => {
    try {
        const product = await Product.find();
        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('ups, something was wrong');
    }
}

exports.editProduct = async (req, res) => {
    try {
        const { name, category, location, price } = req.body;
        let product = await  Product.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: "the product don't exist"});
        }

        product.name = name;
        product.category = category;
        product.location = location;
        product.price = price;

        product = await  Product.findOneAndUpdate({_id: req.params.id}, product, {new: true});
        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('ups, something was wrong');
    }
}


exports.getByIdProduct = async (req, res) => {
    try {
        let product = await  Product.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: "the product don't exist"});
        }

        res.send(product);

    } catch (error) {
        console.log(error);
        res.status(500).send('ups, something was wrong');
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        let product = await  Product.findById(req.params.id);

        if(!product){
            res.status(404).json({msg: "the product don't exist"});
        }

        await  Product.findOneAndDelete({_id: req.params.id});
        res.json({msg: 'Producto eliminado'});

    } catch (error) {
        console.log(error);
        res.status(500).send('ups, something was wrong');
    }
}
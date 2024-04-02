import productData from '../model/productDataModel.js';
import Product from '../model/productSchema.js';


export const getProducts = async (request, response) => {
    try {
        const products = await Product.find({});

        response.json(products);
    }catch (error) {

    }
}

export const getProductById = async (request, response) => {
    try {
        
        const products = await Product.findOne({ '_id': request.params.id });
        console.log(`>>>>>>>>`,products)
        response.json(products);
    }catch (error) {

    }
}
export const addProduct=async(req,res)=>{
    try{
        console.log(req.body)
        const product = new Product({
            url: req.body.url,
            detailUrl: req.body.detailUrl,
            title:{
                shortTitle:req.body.shortTitle,
                longTitle:req.body.longTitle
            },
            price:{
                mrp:req.body.mrp,
                cost:req.body.cost,
                discount:req.body.discount+'%'
            },
            quantity:req.body.quantity,
            description:req.body.description,
            discount:req.body.discounts,
            tagline:req.body.tagline
        });
        console.log(2)
        const result=await product.save();
        return res.status(200).send({success:true,data:result})
    }
    catch(error){
        response.json(error).status(500)
    }
}
export const getProductsData = async (request, response) => {
    try {
        const products = await productData.find({});

        response.json(products);
    }catch (error) {
        response.json(error).status(500)
    }
}

export const getProductDataById = async (request, response) => {
    try {
        console.log(`>>>>>>>>>`,request.params.id)
        const products = await productData.findOne({ '_id': request.params.id });
        response.json(products);
    }catch (error) {
        response.json(error).status(500)

    }
}
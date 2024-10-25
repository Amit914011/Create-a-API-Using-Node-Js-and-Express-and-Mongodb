const express=require('express')
const  router=express.Router();
const productController= require('../controller/productController')


router.post('/');
router.get('/',productController.product_All);
router.get('/:productId');
router.put('/:productId');
router.delete('/:productId');

module.exports=router;
const express =require('express');
const router = express.Router();
router.get('/',(req,res) =>{

res.render('index.html');
});

router.get('/encriptar16',(req,res) =>{
    res.render('E16.html');
});
router.get('/encriptar24',(req,res) =>{
    res.render('E24.html');
});
router.get('/encriptar32',(req,res) =>{
    res.render('E32.html');
});
router.get('/descifrar16',(req,res) =>{
    res.render('D16.html');
});
router.get('/descifrar24',(req,res) =>{
    res.render('D24.html');
});
router.get('/descifrar32',(req,res) =>{
    res.render('D32.html');
});

module.exports=router;
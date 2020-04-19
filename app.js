const express=require('express');
const path=require('path');
const app=express();

app.set('view engine','ejs');
app.use((req,res,next)=>
{
    res.locals.value2="Dinesh";
    next();
});
app.get('/',(req,res,nexta)=>
{
   res.render('index',{value:'Dinesh'});
});
app.use(express.static('public'));
app.use('/fruit',express.static(path.join(__dirname,'fruit')));
app.get('/uchiha',(req,res)=>
{
    res.sendFile(path.join(__dirname,'/public/app.html'));
});

app.listen(5000,(err)=>
{
    if(err)
    {
       res.send(err);
    }
    console.log("Application is working properly");
});
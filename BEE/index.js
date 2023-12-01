const express=require('express')
const app=express()
const host=3000
app.use(express.json())
const cors=require('cors')
app.use(cors()) // cross origin resource sharing

let posts=[]
let idx=1
//create post
app.post('/createpost', (req, res)=>{

    const post={
        id:idx,
        fullname:req.body.fullname,
        username:req.body.username,
        email:req.body.email,
        phonenumber:req.body.phonenumber,
        password:req.body.password,
        address:req.body.address
        // messege:req.body.messege:

    }
    idx=idx+1

    posts.push(post)
    res.status(201).json(post)

    // console.log(req.body)
    // console.log(typeof req.body)  
})

//read ll post
app.get('/getAllPost',(req,res)=>{
    res.json(posts)
})
app.get('/getPost/:id',(req,res)=>{
    // console.log(req.params.id)
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
        
        
        //     element.title.content=req.body.title
        //    element.content=req.body.content

            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })
})
app.patch('/updatePost/:id',(req,res)=>{
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
            

            element.fullname=req.body.fullname
            element.username=req.body.username
            element.address=req.body.address

//posts.splice(index,1)
            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })

})
app.delete('/deletePost/:id',(req,res)=>{
    for(let index=0;index<posts.length;index++){
        const element =posts[index];
        if(element.id==req.params.id){
            posts.splice(index,1);
        //     element.title.content=req.body.title
        //   element.content=req.body.content
//posts.splice(index,1)
            res.json(element)
            return;
        }}
    res.json({
        "msg": "no post with id found"
    })

})

app.listen(host,()=>{
    console.log("server started.....")
})
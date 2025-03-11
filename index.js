let express=require('express');
let mongoose=require('mongoose');
let app=express();
let studentCollection=require('./databases/models.js');

app.use(express.json());
// Routes Configuration

app.get("/students",(req,res)=>{
         studentCollection.find().then((ans)=>{
                res.send(ans);
                console.log(ans);
         })
         
});

app.get("/students/:id",(req,res)=>{
       let ID = req.params.id;
       studentCollection.find({_id:ID}).then((ans)=>{
           res.send(ans);
       }).catch((e)=>{
             res.send(e.message);
       })
})

app.post("/students/newstudent",(req,res)=>{
           let {Name,Age,School,isFamous}=req.body;
           studentCollection.insertOne({Name,Age,School,isFamous}).then((ans)=>{
                console.log(ans);
                res.status(200).send(ans);
           }).catch((e)=>{
                res.send(e.message);
           })
           
});

app.put("/students/update/:id",(req,res)=>{
        let ID=req.params.id;
        let {Name,Age,School,isFamous}=req.body;
        studentCollection.findByIdAndUpdate({_id:ID},{Name:Name,Age:Age,School:School,isFamous:isFamous}).then((ans)=>{
               res.send(ans);
        }).catch((error)=>{
             res.send(error.message);
        })
});

app.delete("/students/remove/:id",(req,res)=>{
           let ID=req.params.id;
           studentCollection.findByIdAndDelete({_id:ID}).then((ans)=>{
                      res.status(200).send(ans);
           }).catch((e)=>{ res.send(e.message)});
})
app.get("/mani",(req,res)=>{
      res.send("you are an awesom guy");
})

let port=4010;
app.listen(port,()=>{
       console.log(`server started at port ${port}`);

       //Database connection
       mongoose.connect("mongodb://localhost:27017/mydatabase")
         .then(()=>{
               console.log("connected to database successfully");
          })
          .catch((error)=>{
              console.log(error.message);
          })
})

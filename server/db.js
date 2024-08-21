var mysql=require("mysql");
var express=require("express");
var cors=require("cors");
var app=express();
app.use(express.json());
app.use(cors());

var conn=mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password:"",
        database: "test1",
    }
);

app.post("/myapi/insert",(req,resp)=>{

    var useremail=req.body.email;
    var userpass=req.body.pass;
    console.log(useremail);

    const query="select * from login WHERE email = ? AND password = ?";
    conn.query(query,[useremail,userpass]);
       if(result.length > 0){
        console.log(result);
        resp.send(result);
       }
       else{
        resp.send({message:"Please enter valid email id and password."})
       }

    // resp.json("");
    
});

app.post("/api/datainsert",(req,resp)=>{
    var uname=req.body.dbname;
    var uemail=req.body.dbemail;
    var umob=req.body.dbmob;
    var upsw=req.body.dbpsw;
    console.log(uname);

    const query="Insert into login(name,email,mobile_number,password) values(?,?,?,?)";
    conn.query(query,[uname,uemail,umob,upsw]);
    resp.json("");
})

conn.connect(function(err)
{
    if(err) throw err;
    console.log("db connected!");
});

var port=3565;

app.listen(port,()=>{
    console.log("Connected");
});
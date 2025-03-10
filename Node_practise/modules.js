// 1. OS MODULE 
// OS module is an in-built module provided by the nodejs environment that provides us with different data belongs to our system taht may be isAbsolute
// 1 memoryUsage
// 2.temporary directories availableMemory
// 3.about cpus,architecture

// let os=require('os');
// console.log(os.EOL);
// console.log(os.arch());
// console.log( os.cpus().length);
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.type());
// console.log(os.hostname());
// console.log(typeof os.tmpdir());
// console.log(os.uptime());
// console.log(os.loadavg());
// console.log(os.endianness());
// console.log(os.userInfo());
// console.log(os.version());
// console.log(os.platform());

// 2.FS MODULE

// let fs=require('fs');
// 1.readfile
// console.log(10)
// fs.readFile('test.txt',{ encoding: 'utf8', flag: 'r' },(error,fd)=>{console.log(fd)});
// console.log(fd)

// 2.readFileSync
// let fd=fs.readFileSync('sample.html','utf8')
// console.log(fd);

// 3.exists()
// fs.exists('../test.txt',(exists)=>{
//       let result=exists?'found':'not found';
//       console.log(result);
// })

// 4.existsSync()
// let result=fs.existsSync('../test.txt');
// console.log(result);

// fs.writeFile

// fs.writeFile('test',"it's been re written.",(error)=>{
//        if(error){console.log(error)};
// })

// writeFileSync()

// fs.writeFileSync('C:\Users\HP\Desktop\nodejs\Node_practise\test.html',`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <script type="text/javascript" defer src="javascript_practise.js"></script>
// </head>
// <body style="text-align: center;">
//     <h1>hello ,welcome to our home😍</h1>
//     <p id="timer" style="color: #000;font-family: 'Courier New', Courier, monospace;font-size: 28px;">0</p>
//     <button id="startTimer">start timer</button>
//     <button id="stopTimer">Stop timer</button> 
   
   
// </body>
// </html>`,(error)=>{
//     if(error){console.log(error)};
// })
// console.log("ended");

// path problem solved
// fs.writeFileSync('C:\\Users\\HP\\Desktop\\nodejs\\Node_practise\\test.html',data,(error)=>{
//         if(error){console.log(error)};
//     })
//     console.log("ended");

// fs.appendFileSync('test.txt','hello mani kanta',(fd)=>{
//     console.log(fd);
// })
    
// delete()
// fs.unlink('test.txt',(e)=>{console.log("it's deleted")})

// rename file

// fs.renameSync("E:\\manikanta_system\\wallpapers\\2.jpg.jpg","E:\\manikanta_system\\pic.jpg");

// fs.mkdir('expressjs',(e)=>{console.log(e)});
// fs.rename('expressjs','nodejss',(e)=>{console.log(e)});
// fs.rmdir('nodejss',(e)=>{if(e) console.log(e)})
// fs.stat('text.txt',(e,stat)=>{
//        console.log(stat.isFile());
//        console.log(stat.isDirectory());
//        console.log(stat.mtime.getDate());
//        console.log(stat.ctime);
//        console.log(stat.atime);

// // })
// fs.statSync('text.txt',(e,s)=>{});

// fs.open('text.txt','r',{encoding:'utf8'},(e,fd)=>{
//     if(e){
//         console.log(e);
//     }
//     else{
//         console.log(fd);
//     }
// // })

// real path

// fs.realpath('Node_practise',(e,resolved_path)=>{
//     console.log(resolved_path);
// })

// let r=require('readline');
// let x= r.question;
// console.log("hello buddy "+x);

// BUFFERS MODULE OR CLASS:

// let buffer=new Buffer("manikanta");
// console.log((JSON.stringify(buffer.toJSON())));

// let buffer=Buffer.from([12,2,3,12]);
// let buffer2=Buffer.from("manikanta reddy");
// console.log(Buffer.isBuffer(buffer));
// console.log(Buffer.isBuffer(buffer2));

// let target=Buffer.from("GeeksandGeeks");
// let source=Buffer.from("For");
// source.copy(target,5,0,3);
// console.log(target.toString());
// console.log(target.length);

// let buf=Buffer.alloc(8);
// buf.write("manikantar");          
// console.log(buf.toString('utf8'));--->"manikant" // no dynamicc allocation to the buffer that's been allocated with some bytes earlier  

// let randomBuffer=Buffer.allocUnsafe(9);
// console.log(randomBuffer.toString());
// let a=null;
// console.log(typeof String(a))

// let buffer1=Buffer.from("mani");
// let buffer2=Buffer.from("Manik");
// console.log(Buffer.compare(buffer1,buffer2));

// let buffer1=Buffer.from("mani");
// console.log(buffer1.slice(1,4).toString())

// let buffer1=Buffer.from("mani");
// let buffer2=Buffer.from("mani");
// console.log(buffer1.equals(buffer2));
// let buffer1=Buffer.from([10,20,30,40]);
// console.log(buffer1.subarray(1,4).toJSON())


// let buffer=Buffer.alloc(9);
// buffer.fill("manikanta",5);
// console.log(buffer.slice(5,buffer.length).toString());

//WRITING FROM A BUFFER TO A FILE

// let fs=require('fs');
// let buffer=Buffer.from("hello everyone i am manikanta reddy, the one who will be the brialliant person to ever live");
// fs.open('text.txt','w',(error,fd)=>{
//     fs.write(fd,buffer,0,buffer.length,0,(fd,bytes,buffer)=>{
//           console.log('the buffer been written to the text file ');
//     })
   
// })
// fs.readFile('text.txt','utf8',(error,fd)=>{
//     console.log(fd);
// })

// PATH MODULE:
let path=require('path');
// let root_directory=path.join(__filename);
// console.log(path.dirname(root_directory))
// console.log(path.basename(root_directory))
// console.log(path.extname(root_directory))
// console.log(path.relative(root_directory,path.join(root_directory,'..','..')))
// console.log(path.delimiter);
// console.log(path.resolve('Node_practise'))
// console.log(path.relative(__filename,path.resolve('sample.html')));
// console.log(path.format(path.parse(__filename)))
// console.log(path.parse(__filename));
// console.log(__dirname);


// HTTP AND URL MODULES:
let http=require('http');
let URL=require('url');
// let server=http.createServer((request,response)=>{
//         //    response.writeHead(200,{'Content-Type':'text/plain'});
//         //    console.log(request.url);
//         //    console.log(request.method);
//         const mimeTypes = {
//             '.jpg': 'image/jpeg',
//             '.png': 'image/png',
//             '.gif': 'image/gif',
//         };
//            response.setHeader('content-type','text/html');
//            console.log(path.resolve('background.jpeg'));
//            response.write(`<h1 style='color:green;font-size:30px;'>hello boys, how are you ?<h1/>
//                         <img style='height:200px;width:200px' alt='no img' src=${'../images/background.jpeg'}>`);
//            response.end();

           
           
// })
// let todos=[{'id':1,"name":"manikanta"}];
// let server=http.createServer((req,res)=>{
//        if(req.method=='POST' && req.url=='/newtodo'){
//                let body='';
//                req.on('data',(chunk)=>{
//                  body += chunk.toString();
//                })


//                req.on('end', ()=>{
//                   todos.push(body);
//                   console.log(todos);
//                   res.write(body);
//                   res.end();
//                })
               
//        }
//        else if(req.method=='GET' && req.url=='/todos'){
//             res.writeHead(200,{'Content-Type':'application/json'});
//             let result='';
//             for(let i of todos){
//                 result += JSON.stringify(i);
//             }
//             console.log(result);
//             res.write(result);
//             res.end();
//        }
//        else if(req.method == 'PUT' && req.url=='/update'){
//                  console.log(req.json())
//                  res.writeHead(200,{'content-type':'text/plain'})
//                  res.end("ended");
//        }
       
// })
// let port=3000;
// server.listen(3000,()=>{
//     console.log(`server started at ${port}`);
// })



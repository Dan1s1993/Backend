import express,{Request,Response} from 'express';
const app = express()
app.use(express.json())
const port = 3000
const ar:String= 'Nammasdsadsa';

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})
app.get('/about',(req:Request,res:Response)=>{
    res.send({message:'name',name:'DEnis'})
})
app.post('/about',(req,res)=>{
  res.json({title:req.body.title})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
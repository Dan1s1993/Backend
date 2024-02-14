import express,{Response,Request} from 'express';

const app = express()
app.use(express.json())
const port = process.env.PORT || 3000;
const ar:String= 'Nammasdsadsa';
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`

app.get('/', (req: Request, res: Response) => {
  res.type('html').send(html)
})
app.get('/about',(req: Request, res: Response)=>{
    res.send({message:'name',name:'DEnis'})
})
app.post('/about',(req: Request, res: Response)=>{
  res.json({title:req.body.title})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
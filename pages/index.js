import Head from 'next/head'
import todos from '../todos'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '../Card'
import { useState } from 'react'




export default function Home() {
  const [mytodos, setTodo] = useState(todos)
  const [inputs, setinputs] = useState("")


  const add = () => {
    setTodo([...mytodos, { id: parseInt(Math.floor(Math.random() * 100)), content: inputs }])
    setinputs('')
  }
  function remove(id) {
    setTodo(mytodos.filter(todos => todos.id !== id))


  }
  return (
    <div>
      <Head>
        <title>todos</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="todos app"></meta>
        <meta name="keywords" content="Ahmed, rahali, todos,next,react,web dev"></meta>
        <meta name="author" content="Ahmed rahali"></meta>
      </Head>
      <div className="todos">
        <div className="todos__input">
          <TextField onChange={e => setinputs(e.target.value)} value={inputs} className="input" id="standard-secondary" label="write something..." color="primary" />
          <Button onClick={() => add()} id="btn" variant="contained" color="primary">Add</Button>
        </div>
        <div className="todos__items">
          {mytodos.map(item => <Card key={item.id} remove={remove} item={item} />)}
        </div>
      </div>
    </div>
  )
}

import { useState } from "react";
import { Container, Table } from "react-bootstrap";
import {Button, Form} from "react-bootstrap";

import './App.css';

function App() {

  const [tareas, setTarea] = useState([]);

  function addTarea(event){
    event.preventDefault();
    const newTarea = event.target.tarea.value;
    setTarea([...tareas, { task: newTarea }]);
  }

  function borrar(index) {
    const updatedTareas = [...tareas];
    updatedTareas[index].completed = true;
    setTarea(updatedTareas);

  }
  function borrar2(index) {
    const temp = tareas.filter((tareas)=>tareas.index !== index);
    setTarea(temp)
  }


  return (
    <div>
      <Container className="contenedor">
        <Form onSubmit={addTarea} className="form">
          <input type="text" name="tarea" placeholder="Ingrese una tarea pendiete" className="tarea"/>
          <Button variant="info" type="submit" value="addTarea">Agregar tarea</Button>{''}
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colSpan={2} className="centrado">Tareas pendietes</th>
            </tr>
          </thead>
        <thbody>
        {tareas.map((tareas, index) => (
          <tr key={index} style={{ textDecoration: tareas.completed ? 'line-through' : 'none' }}>
            <th bordered hover className="listado">{tareas.task}</th><th bordered hover><Button onClick={() => borrar(index)} className="boton">Completar</Button></th>
          </tr>
        ))}
      </thbody>
        </Table>
      </Container>
    </div>
  );
}

export default App;

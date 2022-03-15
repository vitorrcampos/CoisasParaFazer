import React, {Component} from 'react'
import "./styles.css";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family: Fredoka;
    font-weight: 300;
  }
`  
const Estrutura = styled.body`
background-color: #D3F8E2;
`
const Titulo = styled.h1`
color:#F694C1;
font-weight: 600;
cursor: grabbing;
`
const Container = styled.div`
text-align: center;
font-size: 5vw;
margin-top: 5vw;

`
const Adicionar = styled.input`
margin-top:15vw;
width:55vw;
height: 10vw;
margin-right: 5vw;
border: black solid 1px;
border-radius: 20vw;
font-size: 6vw;
font-weight: 500;
`
const Botao = styled.button`
width: 30vw;
height: 20vw;
border-radius: 50vw;
font-size: 5vw;
border: none;
background-color: blueviolet;
font-weight: 500;
color: white;
border: white 0px 0px 10px;
cursor: pointer;
`
const Remove = styled.button`
width: 0vw;
height:1vw;
cursor: pointer;
`
const Lista = styled.li`
font-size: 10vw;
margin-right: 10vw;
color: #DE6C83;
text-shadow: grey 0vw 0vw 2vw ;
border: white 5px;
`

const Imagem = styled.img`
width: 7vw;
height: 7vw;
`
const Ulista = styled.ul``

class ToDoList extends Component {

  state = {

    tarefa: '',
    lista: []
  }

  handleChange = (e) => {
    this.setState({
      tarefa: e.target.value
    })
  }

  handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      this.add()
    }
  }

  add = () => {
    const {lista, tarefa} = this.state

    if (tarefa.length !== 0 || null) {
      this.setState({
        lista: lista.concat({
          tarefa: tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }

  }

  remove = (id) => {
    let {lista} = this.state
    this.setState({
      lista: lista.filter((item) => (
        item.id !== id
        ))
    })
  }

  render() {
    let {handleChange, add, remove, handleKeyDown} = this
    let {tarefa, lista} = this.state
    return (
        <Estrutura>
          <GlobalStyle/>
         <Container>
          <Titulo>Coisas para fazer:</Titulo>
            <Adicionar value = {tarefa} onKeyDown={handleKeyDown} onChange ={handleChange}/>  
            <Botao onClick={add}>Adicionar</Botao>
            {lista.map((item) => (
              <Ulista>
                <Lista> {item.tarefa} 
                <Remove onClick = {() => remove(item.id)}> <Imagem src="https://cdn-icons-png.flaticon.com/512/2891/2891491.png" alt="lixeira"/> </Remove>   </Lista>
              </Ulista>
            ))
            } 
          </Container>
          <style>
              @import
              url('https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&display=swap');
            </style>
        </Estrutura>
        
      )
      
    }
    
  }

export default ToDoList;
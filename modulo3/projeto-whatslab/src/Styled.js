import styled from 'styled-components'

export const ItemLista=styled.li`
    margin: 5px 10px;
    width: 15vw;
    list-style: none;   
 border-radius: 20px 2px solid black;
    div{

  
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 1vw;
        p:nth-child(2){
            color: orange;
        }
        button{
            padding: 0.6vw;
        }
    }
    p{  
      background-color: bisque;
        margin-left:1vw;
        text-align: left;
        font-weight: bold;
    }
`
export const Formulario=styled.form`
    position: fixed;
    margin-top:20px;
    width: 100%;
     margin-top: 550px;
     font-size: 35px;
     margin-left: 100px;
     input:nth-child(2){
     
            width: 300px;

    input{
        margin: 0px 3px;
        font-size: 1.2vw;
     
       
        }
    }
    button{
        font-size: 1.2vw;
    }
`

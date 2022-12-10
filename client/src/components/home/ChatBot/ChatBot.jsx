import React from 'react'
import ChatBot from 'react-simple-chatbot'
//import s from './ChatBot.module.css'
import { ThemeProvider } from 'styled-components' //La documentación recomienda usar style components


//const theme = {} //tambien recomienda usar un objeto para añadir los estilos
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#17abda',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#17abda',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

export default function MyChatBot() {

      return (
        <div>
          <ThemeProvider theme={theme}>
              <ChatBot 
              //botAvatar='https://cdn-icons-png.flaticon.com/512/4712/4712035.png' //para cambiar el avatar del chat
              floatingIcon='https://cdn-icons-png.flaticon.com/512/4711/4711987.png'
                floating='true'
                width='300px'
                  steps={[
                    {
                        id: '0',
                        message: 'Hola!, Latamcom te manda un saludo 👋',
                        trigger: '1',
                    },
                      {
                          id: "1",
                          message: "¿En qué podemos ayudarte?",
                          trigger: "2"
                      },
                      {
                          id: "2",
                          options: [
                            { value: "somos", label: "¿Quienes somos?", trigger: "3"},
                            { value: 1, label: 'Medios de pago', trigger: '4' },
                            { value: 2, label: 'Reportar un problema', trigger: '5' },
                            { value: 3, label: 'Tengo hambre 😔', trigger: '6' },
                            ],
                          
                      },
                      {
                          id: "3",
                          message: "Somos una tienda virtual, en la que puedes encontrar productos a precios muy accesibles",
                          trigger: "1a"
                      },
                      {
                        id: "4",
                        message: "Puedes efectuar tus compras con PayPal, en el futuro agregaremos más medios de pago 😉",
                        trigger: "1a"
                      },
                      {
                        id: "5",
                        message: "De malas papá", //Esta respuesta solo es momentanea 😂
                        trigger: "1a"
                      },
                      {
                        id:"6",
                        message: "Buen provecho: 🍕",
                        trigger: "1a"
                      },
                      {
                        id: "1a",
                        message: "¿Algo más?",
                        trigger: "2"
                      },
                     
                  ]}
                  />
          </ThemeProvider>
        </div>
      )
  }
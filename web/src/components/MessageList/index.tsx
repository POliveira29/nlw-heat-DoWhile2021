import { useEffect, useState } from 'react'
import io from 'socket.io-client'
import {api} from '../../services/api'

import styles from './styles.module.scss'
import logoImg from '../../assets/logo.svg'


type Message = {
    id: string,
    text: string,
    user:{
        name: string,
        avatar_url: string
    }
}

const messageQueue: Message[] = []

// Escutar em tempo real o back-end
const socket = io('http://localhost:4000')
//Quando for recebido uma nova mensagem
socket.on('new_message', (newMessage: Message) =>{
    messageQueue.push(newMessage)
})

export function MessageList(){
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(()=>{
        // Intervalo que vai executar a cada 3 segundos
        setInterval(()=>{
            // Verifica se na fila de mensagem tem alguma mensagem
            if (messageQueue.length > 0) {
                // Sobrepor o valor do Array de mensagem com um novo array

                /**
                 * Sempre que for feita uma atualização no estado e a nova info depender das infos anteriores
                 * ao invés de colocar um array é utilizado uma função
                */ 
                
                setMessages(prevState => [
                    // A primeira mensagem da fila, a mais antiga
                    messageQueue[0],
                    // A mensagem que ja existia no array de mensagem
                    prevState[0],
                    // A próxima mensagem que ja existia no array de mensagem
                    prevState[1]
                ].filter(Boolean)) // Filtrando caso não tenha 3 mensagem, e tiver algum valor null, undefined e remove esses valores

                
                /**
                 * Quando a gente pega a mensagem que estava na fila e coloca dentro das mensagens que estão sendo exibido em tela 
                 * é preciso tirar essa mensagem pra não repetir ela quando mostrada na tela.
                 * O shift() remove o item mais antigo da fila de mensagem
                 */
                messageQueue.shift()
            }
        }, 3000)
    },[])

    useEffect(()=>{
        //Chamada para api
        api.get<Message[]>("messages/last3").then(response =>{
            setMessages(response.data)
        })
    }, [])

    return(
        <div className={styles.messageListWrapper}>
            <img src={logoImg} alt="DoWhile 2021" />
            <ul className={styles.messageList}>
                {messages.map(message =>{
                    return(
                        <li key={message.id} className={styles.message} >
                            <p className={styles.messageContent}>{message.text}</p>
                            <div className={styles.messageUser}>
                                <div className={styles.userImage}>
                                    <img src={message.user.avatar_url} alt={message.user.name} />
                                </div>
                                <span>{message.user.name}</span>
                            </div>
                        </li>
                    )
                })}                
            </ul>
        </div>
    )
}
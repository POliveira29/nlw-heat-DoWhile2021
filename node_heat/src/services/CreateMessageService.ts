import prismaClient from '../prisma'
import {io} from '../app'
class CreateMessageService{
    async execute(text: string, user_id: string){
        const message = await prismaClient.message.create({
            data:{
                text,
                user_id
            },
            include:{
                user: true
            }
        })

        //Sempre que uma mensagem for criada quem estiver conectado irá receber em tempo real ela
        const infoWS = {
            text: message.text,
            user_id: message.user_id,
            createdAt: message.createdAt,
            user:{
                name: message.user.name,
                avatar_url: message.user.avatar_url
            }
        }
        io.emit("new_message", infoWS)

        return message
    }
}

export {CreateMessageService}
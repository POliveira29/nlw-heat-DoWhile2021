import {Request, Response, NextFunction} from 'express';
import {verify} from 'jsonwebtoken'

/**
 * O Middleware funciona da seguinte forma, por exemplo em uma atenticação
 * se o usuário ele não estiver autenticado, se o token for inválido a 
 * aplicação poderia retornar um erro. Mas se estiver autenticado ai
 * ele vai seguir o fluxo da aplicação.
 * 
 * Por isso da utilização do next, que irá passar pra quem estiver depois dele
 * 
 */

interface IPayLoad{
    sub: string
}

export function ensureAuthenticated(req: Request, res:Response, next: NextFunction){
    const authToken = req.headers.authorization;

    if (!authToken) {
        // Status 401 - sem autorização
        return res.status(401).json({
            errorCode: "token.invalid"
        })
    }

    // Bearer 44sd4fs9fsdfsd9f4sd94f9dfsdf
    // [0]Bearer
    // [1] 44sd4fs9fsdfsd9f4sd94f9dfsdf
    const [,token] = authToken.split(" ")

    try {
        const { sub } = verify(token, process.env.JWT_SECRET) as IPayLoad
        req.user_id  = sub

        return next()
    } catch (err) {
       return res.status(401).json({errorCode: 'token.expired'})
    }

   

}
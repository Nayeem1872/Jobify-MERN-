import User from '../models/User.js'
import { StatusCodes } from 'http-status-codes'

class CustomAPIError extends Error{
    constructor(message){
    super(message)
    
    }
}

class BadRquestError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.BAD_REQUEST
        }

}

class NotFoundError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCode = StatusCodes.NOT_FOUND
        }

}

const register =async (req , res)=>{
   
    const {name,email,password} = req.body
    
    if(!name ||!email ||!password){
        throw new BadRquestError('Please provide all Values correctly')
    }


    const user = await User.create(name,email,password)
    res.status(StatusCodes.OK).json({user })

    
    
}
const login = (req , res)=>{
    res.send('login user')
}
const updateUser = (req , res)=>{
    res.send('updateUser')
}

export { register, login, updateUser}
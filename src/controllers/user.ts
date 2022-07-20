import { Request, Response } from 'express'
import db from '../database/db'
import { compare, hashSync } from 'bcrypt'



const getUser = async (req: Request, res: Response) => {
    const users = await db('user').select('*')
    res.json(users)
}

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await db('user').select('*').where('id', id)
    const userName = user[0]?.username
    const isMatch = await compare('bangkit lag', userName)
    console.log(isMatch);

    res.json(user)
}

const postUser = async (req: Request, res: Response) => {
    const { username } = req.body
    const hashedName = hashSync(username, 15)
    console.log(hashedName);

    await db('user').insert({ username: hashedName })
    res.json('berhasil buat user')
}

const updateUser = async (req: Request, res: Response) => {
    res.json('hallo ini dari controller update user')
}

const deleteUser = async (req: Request, res: Response) => {
    res.json('hallo ini dari controller delete user')
}

export default {
    getUser,
    postUser,
    updateUser,
    deleteUser,
    getUserById
}
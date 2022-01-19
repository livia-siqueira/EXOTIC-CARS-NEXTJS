import {hash, compare} from 'bcryptjs'
export * from './api'


export const hashPassword = async(password: string) => {
    const hashPassword = await hash(password, 12);
    return hashPassword;
}

export const compareHashPassword = async(passwordNormal: string, passowrdHas: string) => {
    const res = await compare(passwordNormal, passowrdHas)
    return res;
}


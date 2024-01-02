import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";
import * as bcrypt from 'bcrypt'

export default new class AuthServices{
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(data: any) : Promise<object | string>{
        try {

            const checkEmail = await this.AuthRepository.count({where: {email: data.email}})
            if(checkEmail > 0){
                return `${data.email} has been registred!`
            }

            const hashPasword = await bcrypt.hash(data.password, 10)

            const response = this.AuthRepository.create({
                fullName: data.fullName,
                email: data.email,
                password: hashPasword,
                address: data.address,
                gender: data.gender,
                userName: data.userName
            })

            return response
            
        } catch (error) {
            return {
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

}
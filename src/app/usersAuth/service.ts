import { Repository } from "typeorm";
import { User } from "../../entities/User";
import { AppDataSource } from "../../data-source";

export default new class AuthServices{
    private readonly AuthRepository: Repository<User> = AppDataSource.getRepository(User)

    async register(data: any) : Promise<object | string>{
        try {
            
        } catch (error) {
            return {
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

}
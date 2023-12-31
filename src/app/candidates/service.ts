import { Repository } from "typeorm";
import { Candidate } from "../../entities/Candidate";
import { AppDataSource } from "../../data-source";

export default new class CandidateServices {
    private readonly CandidateRepository: Repository<Candidate> = AppDataSource.getRepository(Candidate)

    async create(data: any): Promise<object | string> {
        try {
            const candidate = await this.CandidateRepository.save(data)

            return{
                message: "Success, new Candidate has been added!",
                data: candidate
            }
        } catch (error) {
            return {
                message: `Ooops something went error, please see this ${error}`
            }
        }
    }

    async getAll(): Promise<object | string>{
        try {
            const candidate = await this.CandidateRepository.find()
            // const candidate = await this.CandidateRepository.createQueryBuilder('candidate').getMany()

            return candidate
        } catch (error) {
            return{
                message: `Ooops something went error, please see this ==>> ${error}`
            }
        }
    }
}
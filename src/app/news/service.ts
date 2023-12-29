import { Repository } from "typeorm";
import { News } from "../../entities/News";
import { AppDataSource } from "../../data-source";
import { title } from "process";

export default new class NewsServices {
    private readonly NewsRepository: Repository<News> = AppDataSource.getRepository(News)

    async create(data: any) : Promise<object | string> {
        try {
            const response = await this.NewsRepository.save(data)
            return {
                message: "Success, news has been added!",
                data: response
            }
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async find() : Promise<object | string> {
        try {
           const news = await this.NewsRepository.find({select: ["id", "title", "date", "author" ]})
            return news
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }
}
import { Repository } from "typeorm";
import { Article } from "../../entities/Article";
import { AppDataSource } from "../../data-source";

export default new class NewsServices {
    private readonly ArticleRepository: Repository<Article> = AppDataSource.getRepository(Article)

    async create(data: any) : Promise<object | string> {
        try {
            const response = await this.ArticleRepository.save(data)
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
           const article = await this.ArticleRepository.createQueryBuilder('article')
           .select(['article.id', 'article.title', 'article.date', 'article.author'])
           .getMany();

           return article
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }

    async getDetail(id: any) : Promise<object |string> {
        try {
            const detail = await this.ArticleRepository.findOne({ where: { id } })
            return detail
        } catch (error) {
            return{
                message: `Oops something went wrong, please see this ==>> ${error}`
            }
        }
    }
}
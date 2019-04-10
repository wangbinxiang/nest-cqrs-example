import { initModelInterface } from '../../system/models/init-model.interface'


export class Post implements initModelInterface {
    public id: string
    public name: string
    public content: string


    init() {
        this.id = null
        this.name = null
        this.content = null
    }
}
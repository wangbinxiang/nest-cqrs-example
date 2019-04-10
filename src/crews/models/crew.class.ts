import { CrewJsonApiAdapter } from '../adapter/crew-json-api.adapter';
import { initModelInterface } from '../../system/models/init-model.interface'
import { Post }  from './post.class'
import { Injectable } from '@nestjs/common';

@Injectable()
export class Crew implements initModelInterface {
    public id: string = null
    public userName: string = null
    public realName: string = null
    public cellphone: string = null
    public password: string = null
    public workNumber: string = null
    public avatar:  {
        name: string,
        identify: string
    }  = { name: null, identify: null }
    public status: number = null
    public createTime: string = null
    public updateTime: string = null
    public statusTime: string = null

    public post: Post = null
    public posts: Post[] = []

    constructor(private readonly crewJsonApiAdapter: CrewJsonApiAdapter) {}


    async signIn () {
        console.log(this.crewJsonApiAdapter)
        return this.crewJsonApiAdapter.signIn(this)
    }


    init() {
        this.id = null
        this.userName = null
        this.realName = null
        this.cellphone = null
        this.password = null
        this.workNumber = null
        this.avatar = null
        this.status = null
        this.createTime = null
        this.updateTime = null
        this.statusTime = null
        this.post = null
        this.posts = null
    }
}
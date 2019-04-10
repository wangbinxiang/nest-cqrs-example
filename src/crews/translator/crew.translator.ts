import { Crew } from '../models/crew.class'
import { BaseTranslator } from '../../system/translator/base-translator'
import { PostTranslator } from './post.translator'
import { Injectable } from '@nestjs/common';

@Injectable()
export class CrewTranslator extends BaseTranslator<Crew> {

    constructor(protected readonly object: Crew, private readonly postTranslator: PostTranslator) {
        super()
        this.initDependencyTemplate()
    }

    private initDependencyTemplate(): void {
        this.postTemplate()
        this.postsTemplate()
    }
    
    protected readonly template: any = {
        id: 'id',
        userName: 'name',
        realName: 'shortName',
        status: 'status',
        createTime: 'createTime',
        updateTime: 'updateTime',
        statusTime: 'statusTime',
        post: {},
        posts: []
    }

    private postTemplate() {
        this.template.post = { 
            key: 'post',
            type: this.IS_OBJECT,
            translator: this.postTranslator
        }
    }

    private postsTemplate() {
        this.template.posts = {
            key: 'posts',
            type: this.IS_ARRAY,
            translator: this.postTranslator
        }
    }
}
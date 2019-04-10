import { Post } from '../models/post.class'
import { BaseTranslator } from '../../system/translator/base-translator'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PostTranslator extends BaseTranslator<Post> {

    constructor(protected readonly object: Post) {
        super()
        // console.log(this.object)
    }

    protected template: object = {
        id: 'id',
        name: 'name',
        content: 'shortName',
    }
}
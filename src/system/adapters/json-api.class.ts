import { HttpService } from '@nestjs/common'


export class JsonApi{

    // 初始化 http client

    // 定义 get post put del patch

    // url 
    // resource
    // httpService
    // requestHeaders
    // responseHeaders
    // statusCode
    // contents



    constructor(
        private readonly url: string,
        private readonly httpService: HttpService
        ) {
            // this.httpService.axiosRef.create({ baseURL: ''}).baseURL
            this.httpService.axiosRef.defaults
    }

}
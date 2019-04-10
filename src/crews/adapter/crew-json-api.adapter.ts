import { Injectable } from '@nestjs/common';
import { crewAdapter } from './crew-adapter.interface';
import { Crew } from '../models/crew.class'
import { HttpService } from '@nestjs/common'




@Injectable()
export class CrewJsonApiAdapter implements crewAdapter {

    constructor(
        private readonly httpService: HttpService
        ) {
            // this.httpService.axiosRef.create({ baseURL: ''}).baseURL
            // this.httpService.axiosRef.defaults
    }


    async signIn(crew: Crew ) {
        // 调用接口 获取结果

        // 转换数据到本地类型

        // 转换器

        // Crew
        // this.httpService.axiosRef.
        const result = await this.httpService.post('/user', {
            passport: crew.cellphone,
            lastName: crew.password
          })
          
        console.log(result)

        return true
    }
}
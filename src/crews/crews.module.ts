import { Module, HttpModule } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CrewsAuthController } from './controller/crews.controller'
import { CrewsService } from './service/crews.service'
import { CrewJsonApiAdapter } from './adapter/crew-json-api.adapter'
import { CrewTranslator } from './translator/crew.translator'
import { PostTranslator } from './translator/post.translator'
import { Crew } from './models/crew.class'
import { Post } from './models/post.class'

@Module({
  imports: [
    CqrsModule, 
    HttpModule.register({
      // baseURL: 'http://kong.zx.qixinyun.com'
    }
  )],
  controllers: [CrewsAuthController],
  providers: [
    CrewsService,
    CrewJsonApiAdapter,
    Crew,
    Post,
    CrewTranslator,
    PostTranslator,
  ],
})
export class CrewsModule {}

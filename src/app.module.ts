import { Module } from '@nestjs/common';
import { HeroesGameModule } from './heroes/heroes.module';
import { CrewsModule  } from './crews/crews.module'

@Module({
  imports: [HeroesGameModule, CrewsModule],
})
export class ApplicationModule {}

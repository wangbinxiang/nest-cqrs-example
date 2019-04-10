import { Injectable } from '@nestjs/common';
import { PassportSignInDto } from '../interfaces/passport-sign-in-dto.interface';
// import { CommandBus, QueryBus } from '@nestjs/cqrs';
// import { KillDragonCommand } from './commands/impl/kill-dragon.command';
// import { KillDragonDto } from './interfaces/kill-dragon-dto.interface';
// import { Crew } from '../models/crew.class';
import { HttpService } from '@nestjs/common'
// import { map } from 'rxjs/operators';
// import { GetHeroesQuery } from './queries/impl';

@Injectable()
export class CrewsService {
  constructor(
    // private readonly crew: Crew,
    private readonly httpService: HttpService
  ) {}

  signIn(passportSignInDto: PassportSignInDto) {
        // this.crew.cellphone = passportSignInDto.passport
        // this.crew.password = passportSignInDto.password

        console.log(passportSignInDto)
        return this.httpService.get('http://kong.zx.qixinyun.com/userGroups/1?&apikey=JgBUzyGyQYPpBa00JeTWUwRUhPfZKWAN' ).toPromise()

        // const result = await this.crew.signIn()
  }

}

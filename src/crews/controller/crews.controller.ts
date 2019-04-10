import { Body, Controller, Post } from '@nestjs/common';
// import { HeroesGameService } from './heroes.service';
import { PassportSignInDto } from '../interfaces/passport-sign-in-dto.interface';
// import { Hero } from './models/hero.model';
import { Crew } from '../models/crew.class'
import { CrewsService } from '../service/crews.service'
import { Deserializer } from 'ts-jsonapi'
import { CrewTranslator } from '../translator/crew.translator'

@Controller('')
export class CrewsAuthController {
  constructor(
    private readonly crewsService: CrewsService, 
    private crew: Crew,
    private readonly crewTranslator: CrewTranslator
    ) {}

  @Post('sign-in')
  async signIn(@Body() dto: PassportSignInDto) {

    const result = await this.crewsService.signIn(dto);
    const deSerializeData = new Deserializer({ keyForAttribute: 'camelCase', AN_ATTRIBUTE_TYPE: 'transform'}).deserialize(result.data)
    this.crew
    console.log(result.data)
    console.log(deSerializeData)

    deSerializeData.post = {
      id: 1,
      name: 'asd',
      shortName: 'asdasdads'
    }

    deSerializeData.posts = [{
      id: 2,
      name: 'asdsss',
      shortName: 'asdas213123dads'
    },{
      id: 3,
      name: 'asdsss3',
      shortName: 'asdas213123dads'
    },{
      id: 4,
      name: 'asdsss4',
      shortName: 'asdas213123dads5',
      shortssName: 'asdas213123dads5'
    }]
    // const obj = {}
    this.crew = this.crewTranslator.arrayToObject(deSerializeData,)
    
    console.log(this.crew)
    // return result
    // console.log(isSignIn)
  }

//   @Get()
//   async findAll(): Promise<Hero[]> {
//     return this.heroesService.findAll();
//   }
}

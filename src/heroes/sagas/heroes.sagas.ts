import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import * as clc from 'cli-color';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { DropAncientItemCommand } from '../commands/impl/drop-ancient-item.command';
import { KillDragonCommand } from '../commands/impl/kill-dragon.command';
import { HeroKilledDragonEvent } from '../events/impl/hero-killed-dragon.event';
import { HeroFoundItemEvent } from '../events/impl/hero-found-item.event';

const itemId = '0';

@Injectable()
export class HeroesGameSagas {
  @Saga()
  dragonKilled = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(HeroKilledDragonEvent),
        delay(1000),
        map(event => {
          console.log(clc.redBright('Inside [HeroesGameSagas] dragonKilled Saga'));
          return new DropAncientItemCommand(event.heroId, itemId)
        }),
      );
  }


  @Saga()
  foundItem = (events$: Observable<any>): Observable<ICommand> => {
    return events$
      .pipe(
        ofType(HeroFoundItemEvent),
        delay(2000),
        map(event => {
          console.log(clc.redBright('Inside [HeroesGameSagas] foundItem Saga'));
          return new KillDragonCommand(event.heroId, itemId)
        }),
      );
  }
}

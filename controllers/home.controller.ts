import {Controller, Get, Render} from 'routing-controllers';

@Controller()
export class HomeController {
  @Get()
  @Render('home/index.html')
  public getAll (): Object {
    return {
      title: 'Home'
    };
  }
}

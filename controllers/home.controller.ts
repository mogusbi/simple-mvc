import {Controller, Get, Render} from 'routing-controllers';

@Controller()
export class HomeController {
  @Get()
  @Render('home/index.html')
  public index (): Object {
    return {
      title: 'Home'
    };
  }
}

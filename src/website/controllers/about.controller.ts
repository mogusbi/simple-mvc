import {Controller, Get, Render} from 'routing-controllers';

@Controller()
export class AboutController {
  @Get('/about')
  @Render('about/index')
  public getIndex (): Object {
    return {
      title: 'About'
    };
  }
}

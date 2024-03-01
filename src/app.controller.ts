import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':studentId')
  returnStudentId(@Param('studentId') studentId: number): string {
    return this.appService.returnStudentId(studentId);
  }
}

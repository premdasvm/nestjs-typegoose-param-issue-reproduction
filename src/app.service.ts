import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  returnStudentId(studentId: number): string {
    return `Student ID: ${studentId} `;
  }
}

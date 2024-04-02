import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
  constructor() {}

  async getGreeting(): Promise<string> {
    return new Promise((resolve) => resolve('hello'))
  }
}

import { Injectable } from '@nestjs/common'
import type { TestService } from './test.service'

@Injectable()
export class AppService {
  constructor(private testService: TestService) {}

  async pingTestService(): Promise<any> {
    console.log({ testService: this.testService })
    console.log({ test: await this.testService.getGreeting() })
    return null
  }
}

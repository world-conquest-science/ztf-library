import { Get, Response, Route } from 'tsoa'

@Route('/assistant')
class OpenApiSchema {
  /**
   * Recommend quote and book from a query
   */
  @Get('/')
  @Response<string>('200')
  getRecommendation() {}
}

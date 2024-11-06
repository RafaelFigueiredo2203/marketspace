export interface AppError {
  response: {
    data: {
      message: string
      statusCode: number
    }
  }
}

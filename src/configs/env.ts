export enum STAGE {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development'
}

export class Env {
  public static get STAGE(): STAGE {
    switch (process.env.NODE_ENV) {
      case 'development': return STAGE.DEVELOPMENT
      case 'production': return STAGE.PRODUCTION
    }
    throw new Error('Stage not supported')
  }

  public static get MONGO_URL(): string {
    switch (Env.STAGE) {
      case STAGE.DEVELOPMENT: return `mongodb://${process.env.MONGO_HOST_DEV}:${process.env.MONGO_PORT_DEV}/${process.env.MONGO_DB_DEV}`
      case STAGE.PRODUCTION: return `mongodb://${process.env.MONGO_HOST_PROD}:${process.env.MONGO_PORT_PROD}/${process.env.MONGO_DB_PROD}`
    }
  }

  public static get PORT(): string | number {
    return process.env.PORT || 3000
  }

}
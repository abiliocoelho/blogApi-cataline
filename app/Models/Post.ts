import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { CherryPick } from '@ioc:Adonis/Lucid/Model'
import User from 'App/Models/User'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column({ serializeAs: null })
  public authorId: number

  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @column.dateTime({
    autoCreate: true,
    serialize: (value) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    }
  })
  public createdAt: DateTime

  @column.dateTime({
    autoCreate: true,
    autoUpdate: true,
    serialize: (value) => {
      return value.toFormat('dd/MM/yyyy HH:mm:ss')
    }
  })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations(
        {
          author: {
            fields: ['id', 'email', 'name']
          }
        },
        false
      )
    }
  }
}

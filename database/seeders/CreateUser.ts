import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

import User from 'App/Models/User'

export default class CreateUserSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: 'admin@gmail.com',
        password: 'secret',
        role: 'admin',
        name: 'Abilio Soares Coelho'
      },
      {
        email: 'normal@gmail.com',
        password: 'secret',
        role: 'normal',
        name: 'Mateus Soares Coelho'
      }
    ])
  }
}

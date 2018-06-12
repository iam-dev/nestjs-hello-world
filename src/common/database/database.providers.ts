import * as mongoose from 'mongoose';

import { environment }  from '../../../environments/environment';

export const databaseProviders = [
  {
    provide: 'DbConnectionToken',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(environment.mongodb),
  },
];
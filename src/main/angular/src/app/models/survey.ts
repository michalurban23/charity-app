import {Question} from './question';
import {Schema} from './schema';

export class Survey {
  id: number;
  name: string;
  schema: Schema;

  constructor(id, name, schema) {
    this.id = id;
    this.name = name;
    this.schema = schema;
  }
}

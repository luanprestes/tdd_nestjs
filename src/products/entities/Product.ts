import { uuid } from 'uuidv4';

export class ProductEntity {
  public readonly id?: string;

  public name: string;
  public price: number;

  constructor(props: Omit<ProductEntity, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    } else {
      this.id = id;
    }
  }
}

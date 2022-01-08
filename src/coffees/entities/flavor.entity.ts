import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn() readonly id: number;
  @Column() readonly name: string;
  @ManyToMany(() => Coffee, (coffee) => coffee.flavors)
  readonly coffees: Coffee[];
}

import {Entity, PrimaryGeneratedColumn, Column} from '@gabliam/typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;
}

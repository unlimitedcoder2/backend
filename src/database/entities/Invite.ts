import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm'
@Entity()
export class Invite extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  invite: string

  @Column()
  creator: number

  @Column('timestamp with time zone')
  createdAt: Date

  @Column({
    default: false,
  })
  redeemed: boolean

  @Column('timestamp with time zone', {
    nullable: true,
  })
  redeemedAt?: Date

  @Column({
    nullable: true,
  })
  redeemedBy: number

  @Column({
    nullable: true,
  })
  redeemedByUsername: string

  serialize() {
    return {
      id: this.id,
      invite: this.invite,
      creator: this.creator,
      createdAt: this.createdAt,
      redeemed: this.redeemed,
      redeemedAt: this.redeemedAt,
      redeemedBy: this.redeemedBy,
      redeemedByUsername: this.redeemedByUsername,
    }
  }
}

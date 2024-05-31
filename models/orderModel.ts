import { Model, ModelObject } from "objection";
import { CarModel } from "./carModel"; // Import the carModel class
import { UserModel } from "./userModel"; // Import the userModel class

export class OrderModel extends Model {
    id!: number;
    id_car!: number;
    id_user!: number;
    email!: string;
    start_rent!: Date;
    finish_rent!: Date;
    total_price!: number;
    status!: 'active' | 'completed' | 'cancelled';
    created_at!: Date;
    updated_at!: Date;

    static get tableName() {
        return 'order';
    }

    static get relationMappings() {
        return {
            car: {
                relation: Model.BelongsToOneRelation,
                modelClass: CarModel,
                join: {
                    from: 'order.car_id',
                    to: 'car.id'
                }
            },

            user: {
                relation: Model.BelongsToOneRelation,
                modelClass: UserModel,
                join: {
                    from: 'order.user_id',
                    to: 'user.id'
                }
            }
        }
    }
}

export type Order = ModelObject<OrderModel>;
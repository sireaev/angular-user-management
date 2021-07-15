import { CarsModel } from "./cars.model";

export interface UserModel {
    id: number;
    name: string;
    age: number;
    gender: string;
    status: string;
    photo: string[];
    cars: CarsModel[];
}

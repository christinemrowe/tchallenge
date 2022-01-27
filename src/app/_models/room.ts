import User from './user';
import Device from './device';

export default interface Room {
    id: number;
    name: string;
    users?: User[];
    devices?: Device[];
}

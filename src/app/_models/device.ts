import Room from './room';
import User from './user';

export default interface Device {
    id: number;
    room: Room;
    users: User[];
}
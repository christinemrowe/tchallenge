export class Constants {

    // USER AUTHENTICATION
    public static AUTH_API_URL:string = 'http://localhost:8080/api/users/auth';

    // INVITE USER TO A ROOM
    public static INVITE_USER_API_URL:string = 'http://localhost:8080/api/users/invite';

    // ADD NEW DEVICE TO A ROOM
    public static ADD_NEW_DEVICE_API_URL:string = 'http://localhost:8080/api/device/add';
    
    // ASSIGN NEW DEVICE TO A ROOM
    public static ASSIGN_DEVICE_API_URL:string = 'http://localhost:8080/api/device/assign';

    // REMOVE DEVICE FROM A ROOM
    public static REMOVE_DEVICE_API_URL:string = 'http://localhost:8080/api/device/remove';

   // CREATE NEW ROOM
    public static CREATE_ROOM_API_URL:string = 'http://localhost:8080/api/create-room';

    // DELETE ROOM
    public static REMOVE_ROOM_API_URL:string = 'http://localhost:8080/api/room/remove';
}

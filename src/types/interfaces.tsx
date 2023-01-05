export interface RoomDataInterface {
  roomName: String;
  hotelName: String;
  roomType: String;
  travelStartDate: String;
  travelEndDate: String;
  roomStatus: String;
  remainingBalance: String;
}

export interface RoomData {
  roomName: string;
  hotelName: string;
  roomType: string;
  travelStartDate: string;
  travelEndDate: string;
  roomStatus: string;
  remainingBalance: string;
}

export interface RoomInfo {
  room: RoomData[];
  group: {
    groupName: string;
  }[];
  hotel: {
    hotelName: string;
    hotelImage: string;
  }[];
  travelers: {
    firstName: string;
    lastName: string;
  }[];
}

export interface ApiParams {
  url: string;
  method?: string;
  data?: any;
}

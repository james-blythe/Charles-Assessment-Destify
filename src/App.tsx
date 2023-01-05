import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ScrollableTabsButtonForce from "./components/ScrollableTabsButtonForce";
import Header from "../src/layouts/Header";
import RoomCard from "../src/components/RoomCard";
import { sagaActions } from "./sagas/sagaActions";
import { RootState } from "./app/store";
import { RoomData, RoomInfo } from "./types/interfaces";
import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.todo);
  const [roomData, setRoomData] = useState<RoomData>({
    roomName: "",
    hotelName: "",
    roomType: "",
    travelStartDate: "",
    travelEndDate: "",
    roomStatus: "",
    remainingBalance: "",
  });
  const [groupName, setGroupName] = useState<string>("");
  const [hotelName, setHotelName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]);
  const [imgURL, setImgURL] = useState<string>("");
  const id = data.id;

  // useEffect hook triggered on initial render
  useEffect(() => {
    // dispatch the FETCH_DATA_SAGA action to initiate the API call
    dispatch({ type: sagaActions.FETCH_DATA_SAGA });
  }, []);

  // useEffect hook triggered on data change
  useEffect(() => {
    // check if data is present
    if (!(data as any).todos.roomInfo?.length) return;
    // retrieve the current room info from the API response
    const currentRoomInfo = (data as any).todos.roomInfo[id] as RoomInfo;
    // destructure and set the room data
    const {
      roomName,
      hotelName,
      roomType,
      travelStartDate,
      travelEndDate,
      roomStatus,
      remainingBalance,
    } = currentRoomInfo.room[0];
    setRoomData({
      roomName,
      hotelName,
      roomType,
      travelStartDate,
      travelEndDate,
      roomStatus,
      remainingBalance,
    });
    // set the group name
    setGroupName(currentRoomInfo.group[0].groupName);
    // set the hotel name
    setHotelName(currentRoomInfo.hotel[0].hotelName);
    // set the image URL
    setImgURL(currentRoomInfo.hotel[0].hotelImage);
    // map the travelers to a string array of first and last names
    const updatedGuests = currentRoomInfo.travelers.map(
      (item: { firstName: string; lastName: string }) =>
        `${item.firstName} ${item.lastName}`
    );
    // set the guests
    setGuests(updatedGuests);
  }, [data]);

  return (
    <div className="App">
      <Header />
      <ScrollableTabsButtonForce />
      <RoomCard
        roomData={roomData}
        groupName={groupName}
        hotelName={hotelName}
        imgURL={imgURL}
        guests={guests}
      />
    </div>
  );
};

export default App;

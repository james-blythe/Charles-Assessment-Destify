import { render, screen } from "@testing-library/react";
import RoomCard from './index';
import React from 'react';

test('renders RoomCard component properly', () => {
  const testGroupName = 'Group_Name';
  const testHotelName = 'Hotel_Name';
  const testImgURL = 'Img_Url';
  const testGuests = ['guest1', 'guest2'];
  const testRoomData = {
      roomName: 'room1',
      hotelName: 'hotel1',
      roomType: 'room1',
      travelStartDate: 'start1',
      travelEndDate: 'end1',
      roomStatus: 'status1',
      remainingBalance: 'balance1'
    }
  render(<RoomCard
    roomData={testRoomData}
    groupName={testGroupName}
    hotelName={testHotelName}
    imgURL={testImgURL}
    guests={testGuests}
  />);

  expect(screen.getByText(testRoomData.roomName)).toBeInTheDocument();
  expect(screen.getByText(testGroupName)).toBeInTheDocument();
  expect(screen.getByText(`${testHotelName} - ${testRoomData.roomType}`)).toBeInTheDocument();
  expect(screen.getByText(`${testRoomData.travelStartDate} - ${testRoomData.travelEndDate}`)).toBeInTheDocument();
})
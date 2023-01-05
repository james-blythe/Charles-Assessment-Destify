import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import PersonIcon from "@mui/icons-material/Person";
import Typography from "@mui/material/Typography";
import { red, blue, teal, purple } from "@mui/material/colors";
import EditLocationAltIcon from "@mui/icons-material/EditLocationAlt";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import { RoomDataInterface } from "../../types/interfaces";
import "./style.scss";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  roomData,
  groupName,
  hotelName,
  imgURL,
  guests,
}: {
  roomData: RoomDataInterface;
  groupName: string;
  hotelName: string;
  imgURL: string;
  guests: String[];
}) {
  const [expanded, setExpanded] = React.useState(false);

  const [currentRoomStatus, setCurrentRoomStatus] = React.useState("");
  React.useEffect(() => {
    switch (roomData.roomStatus) {
      case "Active":
        setCurrentRoomStatus("Booked");
        break;
      case "Pending":
        setCurrentRoomStatus("Processing");
        break;
      case "Cancelled":
        setCurrentRoomStatus("Cancelled");
    }
  }, [roomData]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={roomData.roomName}
        subheader={
          <>
            <div>{groupName}</div>
            <div>
              {hotelName} - {roomData.roomType}
            </div>
            <div>
              {roomData.travelStartDate} - {roomData.travelEndDate}
            </div>
          </>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={imgURL}
        alt="Paella dish"
        sx={{ marginBottom: "10px" }}
      />
      <Button
        variant="outlined"
        startIcon={<CheckCircleOutlineIcon />}
        sx={{
          borderRadius: "20px",
          border: "1px solid",
          marginLeft: "16px",
          color: teal["A400"],
        }}
      >
        {currentRoomStatus}
      </Button>
      <Button
        variant="outlined"
        startIcon={<MonetizationOnOutlinedIcon />}
        sx={{
          borderRadius: "20px",
          border: "1px solid",
          marginLeft: "16px",
          color: purple["A400"],
        }}
      >
        {`Balence Due -  $${roomData.remainingBalance}`}
      </Button>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="modify"
          sx={{ color: blue[500], fontSize: "13px" }}
        >
          <EditLocationAltIcon sx={{ marginRight: "10px" }} /> Modify
        </IconButton>
        <IconButton
          aria-label="make payment"
          sx={{ color: blue[500], fontSize: "13px" }}
        >
          <MonetizationOnOutlinedIcon sx={{ marginRight: "10px" }} /> Make
          Payment
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse
        in={expanded}
        timeout="auto"
        unmountOnExit
        sx={{ marginBottom: "20px" }}
      >
        <>
          <CardContent>
            <Typography paragraph variant="h6">
              Guests in this room
            </Typography>
          </CardContent>
          {guests.map((guest, index) => (
            <Button
              variant="outlined"
              startIcon={<PersonIcon />}
              sx={{
                borderRadius: "20px",
                border: "1",
                marginLeft: "16px",
              }}
              key={index}
            >
              {guest}
            </Button>
          ))}
          <Button
            variant="outlined"
            startIcon={<ChildCareIcon />}
            sx={{ borderRadius: "20px", border: "1", marginLeft: "16px" }}
          >
            Child 1
          </Button>
        </>
      </Collapse>
    </Card>
  );
}

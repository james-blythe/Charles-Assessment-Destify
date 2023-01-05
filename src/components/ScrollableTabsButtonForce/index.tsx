import * as React from "react";
import { useDispatch } from "react-redux";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { selectRoom } from "../../app/store";

// ScrollableTabsButtonForce component to render two tabs
export default function ScrollableTabsButtonForce() {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Number>(0);

  // Handles tab selection
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  // Dispatches an action when a tab is clicked
  const onClickRoom = (id: number) => dispatch(selectRoom(id));

  return (
    <Box
      sx={{
        maxWidth: {
          xs: 320,
          sm: "100%",
          width: "100%",
          maxWidth: "none !important",
        },
        bgcolor: "background.paper",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
      >
        {new Array(2).fill(0).map((cur, ind) => (
          <Tab label={`Room ${ind + 1}`} onClick={() => onClickRoom(ind)} />
        ))}
      </Tabs>
    </Box>
  );
}
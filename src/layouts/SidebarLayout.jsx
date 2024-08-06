import { Backdrop, Box, Drawer, useMediaQuery } from "@mui/material";
import { Auth_Data } from "../constants/constant";
import Sidebar from "../components/global/Sidebar";

export const SidebarLayout = (props) => {
  const { open, onClose } = props;
  const lgUp = useMediaQuery((theme) => theme?.breakpoints?.up("md"));
  const sidebarLinks = Auth_Data?.sidebarLinks || [];

  const content = <Sidebar />;
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            color: "#40bf40",
            width: { xs: 280, xl: 350 },
            height: "100%",
            overflowX: "hidden",
            boxShadow: "10px 10px 50px 0px rgba(100, 116, 139, 0.04)",
          },
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }
  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      BackdropProps={{ click: false }}
      BackdropComponent={(props) => (
        <Backdrop {...props} sx={{ backgroundColor: "rgba(0, 0, 0, 0)" }} />
      )}
      PaperProps={{
        sx: {
          marginTop: "88px",
          height: "100%",
          overflowX: "hidden",
          width: 265,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

/**
 * @description      :
 * @author           : Grant
 * @group            :
 * @created          : 19/10/2021 - 15:23:20
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/10/2021
 * - Author          : Grant
 * - Modification    :
 **/
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              align="center"
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              React Training
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default TopBar;

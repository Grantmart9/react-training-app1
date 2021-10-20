/**
 * @description      :
 * @author           : Grant
 * @group            :
 * @created          : 19/10/2021 - 15:23:27
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 19/10/2021
 * - Author          : Grant
 * - Modification    :
 **/
import React from "react";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BrowserRouter as Router, Link } from "react-router-dom";

const AccordionItem1 = () => {
  return (
    <div>
      <Accordion style={{ backgroundColor: "#3c8ed6" }}>
        <AccordionSummary
          expandIcon={
            <div className="text-white">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
          color="white"
        >
          <div className="text-white text-xl">Main Menu</div>
        </AccordionSummary>
        <AccordionDetails>
          <div className="grid grid-rows-6 gap-2 justify-center pb-10">
            <Link to="/">
              <Button fullWidth="true" variant="contained" color="info">
                Home
              </Button>
            </Link>
            <Link to="/products">
              <Button fullWidth="true" variant="contained" color="info">
                Products
              </Button>
            </Link>
            <Link to="/about">
              <Button fullWidth="true" variant="contained" color="info">
                About
              </Button>
            </Link>
            <Link to="/contacts">
              <Button fullWidth="true" variant="contained" color="info">
                Contacts
              </Button>
            </Link>
            <Link to="/images">
              <Button fullWidth="true" variant="contained" color="info">
                Images
              </Button>
            </Link>
            <Link to="/styles">
              <Button fullWidth="true" variant="contained" color="info">
                Styles
              </Button>
            </Link>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const AccordionItem2 = () => {
  return (
    <div className="mt-2">
      <Accordion style={{ backgroundColor: "#3c8ed6" }}>
        <AccordionSummary
          expandIcon={
            <div className="text-white">
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="text-white text-xl">Sub Menu</div>
        </AccordionSummary>
        <AccordionDetails></AccordionDetails>
      </Accordion>
    </div>
  );
};

const AccordionItems = () => {
  return (
    <div className="inline">
      <AccordionItem1 />
      <AccordionItem2 />
    </div>
  );
};

const SideBar = () => {
  return (
    <div
      style={{ backgroundColor: "#3c81d6" }}
      className="inline-block h-screen w-56 p-2"
    >
      <AccordionItems />
    </div>
  );
};

export default SideBar;

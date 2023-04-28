import React, { useEffect, useState } from "react";
import DashNavbar from "./DashNavbar";
import axios from "axios";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { dashboard } from "../redux/dashboard/thunk/get";
// import DashNavbar from "./DashNavbar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.dashboard.get);
  console.log("list", list);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers(list);
  }, [list]);

  useEffect(() => {
    dispatch(dashboard());
  }, []);

  return (
    <>
      <DashNavbar />
      <div className="App">
        <h1>Welcome to Dashboard!</h1>
        <div className="flex">
          {users.length &&
            users.map((user, id) => {
              return (
                <>
                  <div style={{ margin: "1%" }}>
                    <Card sx={{ maxWidth: 2000 }}>
                      <CardContent>
                        <Typography variant="h6" gutterBottom>
                          {user.title} {user.firstName} {user.lastName}
                        </Typography>

                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Role: {user.role}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

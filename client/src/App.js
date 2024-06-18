import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";
import {
  Container,
  Paper,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { Component } from "react";

const theme = createTheme({
  root: {
    width: "100%",
    marginTop: 3, // theme.spacing.unit 대신 간단한 숫자 사용 가능
    overflowX: "auto",
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: "https://placeimg.com/64/64/1",
    name: "유아로",
    birthday: "220428",
    gender: "수컷",
    job: "고양이",
  },
  {
    id: 2,
    image: "https://placeimg.com/64/64/2",
    name: "모몰로",
    birthday: "230128",
    gender: "수컷",
    job: "고양이",
  },
  {
    id: 1,
    image: "https://placeimg.com/64/64/3",
    name: "모쨰순",
    birthday: "950211",
    gender: "남자",
    job: "사람",
  },
];

export default function App() {
  return (
    <Box sx={{ minWidth: "1080px", overflowX: "auto" }}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers.map((c) => {
              return (
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                ></Customer>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
      </Box>
  );
}

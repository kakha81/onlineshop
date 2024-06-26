import React from "react";
import styled from "styled-components";
import { ReactTabulator } from "react-tabulator";

const columns = [
  { title: "Name", field: "name", width: 300, headerFilter: true },
  {
    title: "Age",
    field: "age",
    hozAlign: "left",
    formatter: "handle",
    headerFilter: true,
  },
  { title: "Favourite Color", field: "col" },
  { title: "Date Of Birth", field: "dob", hozAlign: "center" },
  {
    title: "Rating",
    field: "rating",
    hozAlign: "center",
    formatter: "buttonTick",
  },
  {
    title: "Passed?",
    field: "passed",
    hozAlign: "center",
    formatter: "tickCross",
  },
];

var data = [
  { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
  { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
  {
    id: 3,
    name: "Christine Lobowski",
    age: "42",
    col: "green",
    dob: "22/05/1982",
  },
  {
    id: 4,
    name: "Brendon Philips",
    age: "125",
    col: "orange",
    dob: "01/08/1980",
  },
  {
    id: 5,
    name: "Margret Marmajuke",
    age: "16",
    col: "yellow",
    dob: "31/01/1999",
  },
];

const Container = styled.div`
  display: "flex";
`;

const TabulatorTest = () => {
  return (
    <Container>
      <ReactTabulator data={data} columns={columns} layout={"fitData"} />;
    </Container>
  );
};

export default TabulatorTest;

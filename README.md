# Editable Employee Table

## Project Overview

This project is about creating a high performance table to manage employees. It is built using React.js, Material UI and TanStack Table. The table allows employees to be edited directly in the table. It also supports sorting, filtering and breaking up the data into pages. You can even export the data into a CSV file. The table is designed to handle a number of employees without slowing down.

---

## Features

* You can edit the table rows directly

* You have options to edit, save, cancel and undo changes

* You can sort the data in ascending or descending order

* You can search for data

* The table supports breaking up the data into pages

* You can export the data into a CSV file

* The project uses Context API to manage the state of the table

* The editable cell components can be reused

* The table uses optimized rendering techniques

* It can handle, than 10,000 employee records

---

## Tech Stack

* React.js

* Material UI

* TanStack Table

* React Icons

* Faker.js

* Context API

---

## Project Structure

src/


|——— components/

│ |———— EditableCell.jsx

│ |———— EditableRow.jsx

│ |———— EditableTable.jsx

│ |———— Editable.css

│

|——— context/

│ |———— TableContext.jsx

│

|——— data/

│ |———— generateData.jsx

│

├── utils/

│ |———— exportCSV.jsx

│

|——— App.jsx

|——— main.jsx

|——— index.css

---

## Setup Instructions

### Install Dependencies

You need to run npm install to get all the dependencies.

### Run Development Server

You can start the development server by running npm run dev.

---

## Performance Optimizations

* The table uses pagination to handle datasets

* The components are designed to be reusable

* React.memo is used to prevent re-renders

* Context API is used to manage the state of the table

---

## Known Limitations

Initially, virtual scrolling was explored for handling large datasets more efficiently. However, to keep the table stable and maintain a clean user experience, pagination along with optimized rendering techniques was used for the final implementation.


---

## Author

Santosh Vannal
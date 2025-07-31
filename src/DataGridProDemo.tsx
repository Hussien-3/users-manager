import * as React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import FloatingActionButtonSize from './FloatingActionButtonSize';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
];


export default function DataGridDemo() {
  const [rowss, setRows] = useState([]);

  if (!localStorage.getItem('rows')) {
    localStorage.setItem('rows', JSON.stringify(rows))
  }

  useEffect(() => {
    const storedRows = localStorage.getItem("rows");
    if (storedRows) {
      setRows(JSON.parse(storedRows));
    }
  }, []);

  return (
    <Box sx={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rowss}
        columns={columns}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
      <FloatingActionButtonSize rowss={rowss} setrows2={setRows}/>
    </Box>
  );
}

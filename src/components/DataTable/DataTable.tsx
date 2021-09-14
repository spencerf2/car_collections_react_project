import React from 'react';
import {DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid'

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: 1, minWidth: 95 },
    {
      field: 'model',
      headerName: 'Model',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: 'make',
      headerName: 'Make',
      flex: 1,
      minWidth: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      headerAlign: 'left',
      type: 'number',
      align: 'left',
      flex: 1,
      minWidth: 110,
      editable: true,
    },
    {
      field: 'fullMakeAndModel',
      headerName: 'Make & Model',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      flex: 1,
      minWidth: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.getValue(params.id, 'make') || ''} ${
          params.getValue(params.id, 'model') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, make: 'Honda', model: 'Accord', price: 35000 },
    { id: 2, make: 'Toyota', model: 'Carola', price: 42000 },
    { id: 3, make: 'Honda', model: 'Element', price: 45000 },
    { id: 4, make: 'Mercedez Benz', model: 'C350', price: 16000 },
    { id: 5, make: 'Audi', model: 'A4', price: null },
    { id: 6, make: 'Nissan', model: null, price: 150000 },
    { id: 7, make: 'Nissan', model: 'Altima', price: 44000 },
    { id: 8, make: 'Accura', model: 'MDX', price: 36000 },
    { id: 9, make: 'BMW', model: 'iX', price: 65000 },
  ];

export const DataTable= () => {
    return (
        <div style={{height: 400, width: '100%'}}>
            <h2> Cars In Inventory </h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
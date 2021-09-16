import React, {useState} from 'react';
import {DataGrid, GridColDef, GridValueGetterParams, GridSelectionModel} from '@material-ui/data-grid'
import {server_calls} from '../../api';
import {useGetData} from '../../custom-hooks';
import {Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@material-ui/core';
import {CarForm} from '../../components';

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

  export const DataTable= () => {
    let {carData, getData} = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<GridSelectionModel>([]);
  
    let handleOpen = () => {
      setOpen(true)
    }
  
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData = () => {
      server_calls.delete(`${gridData[0]}`)
      getData()
    }

    return (
      <div style={{height: 400, width: '100%'}}>
          <h2> Cars In Collection </h2>
          <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection onSelectionModelChange={(newSelectionModel) => {
            setData(newSelectionModel);
            }}
            selectionModel={gridData}
            {...carData}
          />
        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>

        {/* Dialog Pop up starts here */}
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Update Your Car</DialogTitle>
          <DialogContent>
            <DialogContentText>Update Car {gridData[0]}</DialogContentText>
            <CarForm id={`${gridData[0]}`} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
import React, {useState} from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useNavigate } from 'react-router-dom';


export default function ColdStart() {
  const [show, setShow]=useState(true)

  const columns = [
    { id: 'more', label: ' ', minWidth: 170 },
     { id: 'chanelData', label: 'youtube chanel data', minWidth: 170 },
    { id: 'collectionId', label: 'collection ID', minWidth: 100 },
    {
      id: 'collectionName',
      label: 'collection name',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'prodUrl',
      label: 'tot of products URL',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'plusVotes',
      label: 'tot of + votes',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'moinVotes',
      label: 'tot of - votes',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'stat',
      label: 'Admin app status',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'density3',
      label: 'Automatic Aproval Status',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(more, chanelData, collectionId,collectionName,prodUrl, plusVotes,moinVotes, stat ) {
    const density = plusVotes ;
    return { more,chanelData, collectionName,collectionId,prodUrl, plusVotes,moinVotes,  density, stat };
  }
  
  const rows = [
    createData("more", 'Your chanel data',"Eder1548FDs2", ' your collection name', 1324171354, 3287263, 3287263),
  ];
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


// navigation button 
const navigate = useNavigate()
const hanndleNav = (val)=>{
  switch (val) {
    case "more":
      navigate ("/admin/CollectionPage")
      break;
      case "stat":
      setShow(!show)
      break;
    default:
      break;
  }

}

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      console.log(value)
                      return (
                        <TableCell key={column.id} align={column.align} onClick={()=>hanndleNav(value)} >
                          {column.id == "stat"? <button onClick={()=> setShow(!show)} > {show?"show": "hide" }  </button> : value == column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

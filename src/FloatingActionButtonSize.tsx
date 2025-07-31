import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { Modal } from "@mui/material";

export default function FloatingActionButtonModal({setrows2}) {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({
    id: null,
    lastName: '',
    firstName: '',
    age: ''
  });

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    const newInfo = { ...info, id: Date.now() };
    const getIt = JSON.parse(localStorage.getItem('rows'))
    const newRows = [...getIt, newInfo];
    setrows2([...getIt, newInfo])
    localStorage.setItem('rows', JSON.stringify(newRows))
    setOpen(false);
    setInfo({ id: null, lastName: '', firstName: '', age: '' }); 
  };

  return (
    <Box sx={{ position: "relative", m: 2 }}>
      <Fab
        color="secondary"
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '200px',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}>
          <TextField
            value={info.firstName}
            onChange={(e) => setInfo({ ...info, firstName: e.target.value })}
            style={{ margin: '10px' }}
            label="First name"
            variant="outlined"
          />
          <TextField
            value={info.age}
            onChange={(e) => setInfo({ ...info, age: e.target.value })}
            style={{ margin: '10px' }}
            label="Age"
            variant="outlined"
          />
          <TextField
            value={info.lastName}
            onChange={(e) => setInfo({ ...info, lastName: e.target.value })}
            style={{ margin: '10px' }}
            label="Last name"
            variant="outlined"
          />
          <Button onClick={handleClose} color="secondary">
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
}

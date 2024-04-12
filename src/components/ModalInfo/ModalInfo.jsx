import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';
import Modal from '@mui/material/Modal';
import { Button, Container } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '5px',
  boxShadow: 24,
  p: 4,
};

export default function ModalInfo({ modalInfo, showModal, closeModalHandler }) {
  const getIcon = (type) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon color="secondary" sx={{ fontSize: 40 }} />;
      case 'error':
        return <ErrorIcon color="error" sx={{ fontSize: 40 }} />;
      case 'info':
        return <InfoIcon color="primary" sx={{ fontSize: 40 }} />;
    }
  }
  return (
    <Modal
      open={showModal}
      onClose={closeModalHandler}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      >
      <Box sx={style}>
        <Container sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          { getIcon(modalInfo.type) }
          <br></br>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          {modalInfo.title}
          </Typography>
          <Typography id="modal-modal-description">
          {modalInfo.description}
          </Typography>
          <br></br>
          <Button color="secondary" onClick={closeModalHandler}>{modalInfo.buttonText}</Button>
        </Container>
      </Box>
    </Modal>
  );
}
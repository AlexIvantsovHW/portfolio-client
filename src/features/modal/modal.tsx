// components/PhoneModal.tsx
import { Modal, Box, Typography } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 360,
  bgcolor: "#0f172a",
  color: "#f1f5f9",
  border: "2px solid #334155",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

type Props = {
  open: boolean;
  onClose: () => void;
  text: string;
};

export const ModalComponent = ({ open, onClose, text }: Props) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            mb: 2,
            fontWeight: "bold",
            fontSize: "20px",
            color: "#38bdf8",
          }}
        >
          Telephone Number
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{
            fontSize: "18px",
            fontWeight: 500,
            letterSpacing: "0.5px",
            color: "#f8fafc",
          }}
        >
          {text}
        </Typography>
      </Box>
    </Modal>
  );
};

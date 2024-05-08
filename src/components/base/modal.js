import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/system";
import { Modal as BaseModal } from "@mui/base/Modal";
import modal from "../../assets/styles/components/base/modal.module.scss";
import success from "../../assets/images/svg/success.svg";

export default function ModalUnstyled({
  title,
  description,
  handleOpen,
  handleClose,
  children,
  type,
}) {
  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      open={handleOpen}
      onClose={handleClose}
      slots={{ backdrop: StyledBackdrop }}
    >
      <div className={modal.modal}>
        {type === "success" && (
          <div className={modal.image_container}>
            <img src={success} alt="success" />
          </div>
        )}
        <h2 className={modal.modal_title}>{title}</h2>
        <p className={modal.modal_description}>{description}</p>
        {children}
      </div>
    </Modal>
  );
}

const Backdrop = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ "base-Backdrop-open": open }, className)}
      ref={ref}
      {...other}
    />
  );
});

Backdrop.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(BaseModal)`
  position: fixed;
  z-index: 1300;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledBackdrop = styled(Backdrop)`
  z-index: -1;
  position: fixed;
  inset: 0;
  background-color: rgb(0 0 0 / 0.5);
  -webkit-tap-highlight-color: transparent;
`;

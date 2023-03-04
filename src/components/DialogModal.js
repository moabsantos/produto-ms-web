import { useEffect, useRef } from "react";
import styled from "styled-components";

const Container = styled.dialog`
  width: 400px;
  border-radius: 8px;
  border: 1px solid #888;

  ::backdrop {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
`;
/*
type Props = {
  title: string;
  isOpened: boolean;
  onProceed: () => void;
  onClose: () => void;
  children: React.ReactNode;
};
*/
const DialogModal = ({
  title,
  isOpened,
  onProceed,
  onClose,
  children,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    if (isOpened) {
      ref.current?.showModal();
      document.body.classList.add("modal-open"); // prevent bg scroll
    } else {
      ref.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [isOpened]);

  const proceedAndClose = () => {
    onProceed();
    onClose();
  };

  const preventAutoClose = (e) => e.stopPropagation();

  return (
    <Container ref={ref} onCancel={onClose} onClick={onClose}>
      <div onClick={preventAutoClose}>
        <h3>{title}</h3>

        {children}

        <Buttons>
          <button onClick={proceedAndClose}>Proceed</button>
          <button onClick={onClose}>Close</button>
        </Buttons>
      </div>
    </Container>
  );
};

export default DialogModal;
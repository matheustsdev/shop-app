import React, { ReactNode } from "react";

import {
  Modal,
  ModalProps,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ModalContainer, ModalOverlay } from "./styles";

interface ModalViewType extends ModalProps {
  children: ReactNode;
  closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: ModalViewType) {
  return (
    <Modal animationType="slide" statusBarTranslucent {...rest}>
      <TouchableWithoutFeedback onPress={closeModal}>
        <ModalOverlay>
          <ModalContainer>{children}</ModalContainer>
        </ModalOverlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

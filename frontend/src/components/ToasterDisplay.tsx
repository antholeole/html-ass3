import React from 'react';
import { Toast as BootstrapToast, ToastContainer as BootstrapToastContainer } from "react-bootstrap";
import { useContainer } from "unstated-next";
import { Toaster } from "../contexts/Toaster";

const ToastContainer = () => {
    const toaster = useContainer(Toaster);

    return (
        <BootstrapToastContainer position="top-end" className="m-2 position-fixed">
            {toaster.toasts.map((toast) => (
                <BootstrapToast
                    key={toast.id}
                    onClose={() => toaster.removeToast(toast.id)}
                    delay={10000}
                    autohide
                >
                    <BootstrapToast.Header>
                        <strong className="me-auto">{toast.title}</strong>
                    </BootstrapToast.Header>
                    <BootstrapToast.Body>{toast.body}</BootstrapToast.Body>
                </BootstrapToast>
            ))}
        </BootstrapToastContainer>
    );
};

export default ToastContainer;

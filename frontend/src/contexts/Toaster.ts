import React from "react";
import { useState } from "react"
import Toast from 'react-bootstrap/Toast';
import { createContainer } from "unstated-next";


export type Toast = {
    id: string;
    title: string;
    body: string;
};

const useToaster = () => {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const removeToast = (id: string) => {
        setToasts(prevToasts => prevToasts.filter((toast) => toast.id !== id));
    };

    const addToast = (toast: Omit<Toast, "id">) => {
        setToasts((prevToasts) => [...prevToasts, {
            ...toast,
            id: Math.floor(Math.random() * 0xFFFF).toString(16).padStart(4, "0")
        }]);
      };

    

    return {
        addToast,
        removeToast,
        toasts
    };
}

export const Toaster = createContainer(useToaster);
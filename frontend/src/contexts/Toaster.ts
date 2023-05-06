import React from "react";
import { useState } from "react"
import Toast from 'react-bootstrap/Toast';
import { createContainer } from "unstated-next";


const useToaster = () => {
    return {};
}

export const Toaster = createContainer(useToaster);
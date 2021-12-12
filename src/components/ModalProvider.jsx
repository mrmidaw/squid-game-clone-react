import { createContext, useContext, useMemo, useState } from "react";

const ModalContext = createContext({});

export const ModalProvider = ({children}) => {
    const [videoUrl, setVideoUrl] = useState('');
    const values = useMemo(() => ({videoUrl, setVideoUrl}), [videoUrl]);
    

    return <ModalContext.Provider value={values}>
        {children}
    </ModalContext.Provider>
};

export const useModal = () => useContext(ModalContext);
import { EncryptStorage } from 'encrypt-storage';

const key = process.env.REACT_APP_STORAGE_ENCRYPTION_KEY;

const encryptStorage = new EncryptStorage(key);

export const setLocalStorage = (key, value) =>{
    encryptStorage.setItem(key, value);
}

export const getLocalStorage = (key) =>{
    return encryptStorage.getItem(key);
}

export const removeLocalStorage = (key) =>{
    encryptStorage.removeItem(key);
}




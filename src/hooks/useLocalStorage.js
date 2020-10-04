import {useState, useEffect} from 'react';

const PREFIX = "whatsapp-clone-";

export default function useLocalStorage(key, initialVal) {
    const prefixedKey = PREFIX + key;
    const [value, setValue] = useState(() => {
        const jsonVal = localStorage.getItem(prefixedKey);
        if(jsonVal !== null) return JSON.parse(jsonVal);
        if(typeof initialVal === "function"){
            return initialVal();
        } else{
            return initialVal;
        }
    });

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(value));
    }, [prefixedKey, value]);

    return [value, setValue];
}

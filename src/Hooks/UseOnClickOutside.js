import {useEffect, useRef} from "react";

export const useOnClickOutside = (handler) => {

    const ref = useRef(null);
    const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) {
            return;
        }

        handler(event);
    };

    useEffect(
        () => {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);

            return () => {
                document.removeEventListener('mousedown', listener);
                document.removeEventListener('touchstart', listener);
            };
        },
        [ref]
    );

    return [ref];
};

import React, { useEffect } from 'react'
import { svgPaths } from '../paths/AlertPaths';


const Alert = ({ message = "", severity = "info", timeout = 0, handleDismiss = null, }) => {

    useEffect(() => {
        if (timeout > 0 && handleDismiss) {
        const timer = setTimeout(() => {
            handleDismiss();
        }, timeout * 1000);
        return () => clearTimeout(timer);
        }
    }, []);


    return (
        <div role="alert" className={`alert alert-${severity}`}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={svgPaths[severity]} />
            </svg>
            <span>{message}</span>
            <div>
                <button className="btn btn-sm" onClick={(e) => {
                    e.preventDefault();
                    handleDismiss();
                }}>
                    Dismiss
                </button>
            </div>
        </div>
    )
}

const AlertsWrapper = ({ children }) => {
    return (
    //   <div className="fixed top-0 right-0 p-4 z-50 pointer-events-none max-w-sm min-w-fit w-full">
    //     {children}
    //   </div>
        <div className="toast">
            {children}
        </div>
    );
};

export { Alert, AlertsWrapper };
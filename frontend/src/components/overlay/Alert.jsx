import React, { useEffect } from 'react'
import { svgPaths, svgFillColors, severityClassNames } from '../paths/AlertPaths';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../redux/alerts/alertsSlice';


const Alert = ({ alert, duration = 5000 }) => {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(removeAlert(alert))
    }
    useEffect(() => {
        const timer = setTimeout(handleClose, duration)
        return function () {
            clearTimeout(timer)
        }
    }, [])

    return (
        <div role="alert" className={`alert ${severityClassNames[alert.severity]}`}>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={svgPaths[alert.severity]} />
            </svg>
            <span>{alert.message}</span>
        </div>
    )
}

const AlertsWrapper = (props) => {
    const { currentAlerts } = useSelector(
        (state) => state.alerts
    )

    return (
        <div className="toast">
            {currentAlerts?.length > 0 &&
                currentAlerts.map((alert, index) => (
                    <Alert
                        key={alert.id + index}
                        alert={alert}
                        {...props}
                    />
                ))}
        </div>
    );
};

export { Alert, AlertsWrapper };
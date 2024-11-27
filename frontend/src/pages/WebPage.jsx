import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addAlert } from '../components/redux/alerts/alertsSlice';

const WebPage = () => {

  const dispatch = useDispatch();

  return (
    <div className="hero min-h-screen min-w-screen bg-base-100 rounded-md shadow-lg">
      <div className="hero-content text-center">
        This is the web page.
      </div>
    </div>
  )
}

export default WebPage
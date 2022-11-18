import React from 'react'
import { usePassContext } from '../context/PassContext'
import { Notification } from './Notification';

export const Layout = ({children}) => {
  const {showNotification} = usePassContext();
  return (
    <div className='App'>
      {showNotification && (
        <Notification />
      )}
      {children}
    </div>
  )
}

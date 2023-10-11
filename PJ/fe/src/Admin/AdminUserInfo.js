import React from 'react'
import AdminUserList from './AdminUserList';
import './css/AdminUserInfo.css';
import AdminPrint from './AdminPrint';

function AdminUserInfo() {

    const goBack = () => {               
        window.location.href='/adminMenu';
      };

  return (
    <div>
        <AdminUserList/>
        <div>
          <button className='backBu' onClick={goBack}>뒤로가기</button>
          <AdminPrint/>
        </div>
    </div>
  )
}

export default AdminUserInfo
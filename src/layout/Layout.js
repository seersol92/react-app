import React from 'react'
import ButtonAppBar from '../components/NavBar/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Layout extends React.Component {
  render() {
    return (
        <div>
            <ButtonAppBar
            isAuth = {this.props.isAuthenticated}
            user = {this.props.userInfo}
            /> 
            <main>
                {this.props.children}
                <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnVisibilityChange
                draggable
                pauseOnHover
                />
            </main>        
        </div>
    )
  }
}

  
export default  Layout;

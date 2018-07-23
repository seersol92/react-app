import React from 'react'
import ButtonAppBar from '../components/navBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Layout extends React.Component {
  render() {
    return (
        <div>
            <ButtonAppBar /> 
            <main>
                {this.props.children}
                <ToastContainer
                position="top-right"
                autoClose={5000}
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
export default Layout;
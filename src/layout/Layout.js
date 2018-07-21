import React from 'react'
import ButtonAppBar from './../components/navBar'

class Layout extends React.Component {
  render() {
    return (
        <div>
            <ButtonAppBar /> 
            <main>
                {this.props.children}
            </main>        
        </div>
    )
  }
}
export default Layout;
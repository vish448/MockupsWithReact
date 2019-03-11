import React from 'react'

export default class Footer extends React.Component {
  render (){
    return (
      <footer>
        <div className="footerTop">
          <p>Canada</p>
        </div>
        <div className="footerBootom">
          <nav className="footerLeftnav">
            <ul>
              <li>Advertising</li>
              <li>Business</li>
            </ul>
          </nav>
          <nav className="footerRightNav">
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Settings</li>
            </ul>
          </nav>

        </div>
      </footer>
    )
  }
}

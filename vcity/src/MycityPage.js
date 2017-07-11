import React, { Component } from 'react'
import { Link } from 'react-router'


export default class MycityPage extends Component {
    static onEnter(nextState, replace) {
    const login = window.localStorage.getItem('rr_login')
    if (login === 'no_login') {
      replace('/login')
    }
  }

  render() {
    return (

<div>

{/*navigation*/}
<nav className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-left">
        <ul className="uk-navbar-nav">
            <li className="uk-active"><Link to='/login'>Logout</Link></li>
            <li className="uk-parent"><Link to='/edit'>Edit Profile</Link></li>
            <li className="uk-parent"><Link to='/profile'>Profile</Link></li>
        </ul>
    </div>
</nav>

{/*second navigation*/}
<div className="uk-section uk-section-muted uk-section uk-padding-remove-vertical">
 <div className="uk-card uk-card-muted uk-card-small uk-grid-collapse uk-child-width-1-3@s uk-margin" data-uk-grid>
    
    <div className="uk-card-media-left uk-overflow-hidden">
        <div className="avatar">
            <img  className="uk-border-circle"  src="../images/girl2.jpg" alt=""/>
        </div>
    </div>
    
    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">User Girl</h3>
            <p>Description<br/>
                Interests:</p>
        </div>
    </div>

    <div>
        <div className="uk-card-body">
            <h3 className="uk-card-title">My Posts</h3>
        </div>
    </div>

   </div>
        {/*navigation tabs*/}
   <div class="uk-margin-medium-top">
        <ul className="uk-flex-center" data-uk-tab>
            <li className="uk-active"><a href="life">Life</a></li>
            <li><a href="meetings">Meetings</a></li>
            <li><a href="myposts">My Posts</a></li>
            <li><a href="messages">Messages</a></li>
        </ul>
    </div>

</div>




{/*primary info*/}
  <div className="uk-section uk-section-default">       
    <div className="uk-container uk-container-expand">



{/*life*/}
<div id="life" data-uk-grid>
    <div className="uk-width-3-5@l">
        <div >Auto
        </div>
    </div>
    <div className="uk-width-1-5@l">
        <div>Expand</div>
    </div>
</div>



{/*meetings*/}
    <div id="meetings" className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid >

    <div>
        <div className="uk-card uk-card-secondary">
            <div className="uk-card-media-top">
                <img src="../images/girl1.jpg" alt=""/>
            </div>
            <div className="uk-card-body">
                <p>April 01, 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

    <div>
        <div className="uk-card uk-card-secondary">
            <div className="uk-card-media-top">
                <img  src="../images/girl2.jpg" alt=""/>
            </div>
            <div className="uk-card-body">
              <p>April 01, 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

        <div>
        <div className="uk-card uk-card-secondary">
            <div className="uk-card-media-top">
                <img src="../images/girl.jpg" alt=""/>
            </div>
            <div className="uk-card-body">
              <p>April 01, 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>

        <div>
        <div className="uk-card uk-card-secondary">
            <div className="uk-card-media-top">
                <img src="../images/girl3.jpg" alt=""/>
            </div>
            <div className="uk-card-body">
              <p>April 01, 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
            </div>
        </div>
    </div>
    </div>



  {/*mu posts*/}  
    <div id="myposts" className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">

    </div>
 
 {/*messages*/}
    <div id="messages" className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">

    </div>


</div>
</div>
</div>
    )
  }



  
}


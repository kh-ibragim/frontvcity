import React, { Component } from 'react'
import { Link } from 'react-router'
import Maps from './Maps'

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
            <li className="uk-active"><Link to='/mycity'>Home</Link></li>
            <li className="uk-parent"><Link to='/login'>Logout</Link></li>
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









{/*primary info*/}

  <div className="uk-section uk-section-default uk-padding-remove ">       
    <div className="uk-container uk-container-expand ">




        {/*navigation tabs*/}

        <ul className="uk-flex-center uk-margin-remove " data-uk-tab>
            <li className="uk-active"><a href="">Life</a></li>
            <li><a href="">Meetings</a></li>
            <li><a href="">My Posts</a></li>
            <li><a href="">Messages</a></li>
        </ul>





<ul className="uk-switcher uk-margin">

<li className="uk-active">
{/*life*/}
<div  data-uk-grid>
    <div className="uk-width-3-5@l">
        <div >Auto
            <Maps />
        </div>
    </div>
    <div className="uk-width-1-5@l">
        <div>Expand</div>
    </div>
</div>
</li>

<li>
{/*meetings*/}
    <div  className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid >

    <div>
        <div className="uk-card uk-card-default">
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
        <div className="uk-card uk-card-default">
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
        <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src="../images/girl.jpg" alt=""/>
            </div>
            <div className="uk-card-body">
              <p>April 01, 2017</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>
        </div>
    </div>

        <div>
        <div className="uk-card uk-card-default">
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
</li>

<li>
  {/*mu posts*/}  
    <div  className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">



 <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="../images/girl3.jpg"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="#">This is a link</a></p>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
      <p>Here is some more information about this product that is only revealed once clicked on.</p>
    </div>
  </div>


    </div>
 </li>

 <li>
 {/*messages*/}
<div  data-uk-grid>
    <div className="uk-width-3-5@l">
        <div >Message
        </div>
    </div>
    <div className="uk-width-1-5@l">
        <div>My Messages</div>
    </div>
</div>
</li>

</ul>
</div>
</div>








 </div>








<script>
    UIkit.tab('.uk-tab');
</script>

</div>
    )
  }



  
}


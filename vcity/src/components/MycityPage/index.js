import React, { Component } from 'react'
import Maps from '../Maps'

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
{/*<nav className="uk-navbar-container" data-uk-navbar>
    <div className="uk-navbar-right">
        <ul className="uk-navbar-nav">
            <li className="uk-parent"><Link to='/login'><img className="iconsize" src="../images/logout.png" alt=""/></Link></li>
        </ul>        
    </div>
       

</nav>*/}

{/*second navigation*/}
<div className="uk-section uk-section-muted uk-section uk-padding-remove-top uk-padding-remove-bottom ">
 <div className="uk-card uk-card-muted uk-card-small uk-grid-collapse  uk-margin  uk-width-1-1 sect uk-margin-remove" data-uk-grid>
    
    <div className="uk-card-media-right uk-overflow-hidden uk-width-1-5@s ">
        <div className="avatar">
            <img  className="uk-border-circle"  src="../images/girl2.jpg" alt=""/>
        </div>
    </div>

    {/*<div className="uk-card-media-right uk-overflow-hidden uk-width-1-5@s ">
        <div className="uk-flex">
            <div className="uk-card uk-card-muted uk-card-body">
                <img  className="userimg radsuserimg"  src="../images/girl2.jpg" alt=""/>
            </div>
        </div>
    </div>*/}


    
{/*<div className="uk-card-media-left uk-overflow-hidden uk-width-expand@s ">
 <div className="uk-flex">
    <div className="uk-card uk-card-muted uk-card-body">
        <img  className="userimg"  src="../images/girl2.jpg" alt=""/>
    </div>
    <div className="uk-card uk-card-muted uk-card-body">
        <img  className="userimg"  src="../images/girl2.jpg" alt=""/>
    </div>
    <div className="uk-card uk-card-muted uk-card-body">
        <img  className="userimg"  src="../images/girl2.jpg" alt=""/>
    </div>
 </div>
</div>*/}


    

   </div>









{/*primary info*/}

  <div className="uk-section uk-section-default uk-padding-remove ">       





        {/*navigation tabs*/}

        <ul className="uk-flex-center uk-margin-remove uk-background-muted" data-uk-tab>
            <li className="uk-active"><a href="">Life</a></li>
            <li><a href="">Meetings</a></li>
            <li><a href="">My Posts</a></li>
            <li><a href="">Messages</a></li>
        </ul>





<ul className="uk-switcher uk-margin-remove uk-padding-remove">

<li className="uk-active">
{/*life*/}
<div  className="uk-margin-remove" >
    <div className="uk-width-1-1@s uk-margin-remove">
        <div >
            <Maps />
        </div>
    </div>
</div>
</li>

<li>
{/*meetings*/}
    <div  className=" uk-child-width-1-3@l uk-child-width-1-3@m uk-child-width-1-1@s uk-grid-medium  uk-margin-top uk-margin-remove-right" data-uk-grid >




<div className="uk-card uk-card-default uk-box-shadow-hover-xlarge">
    <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
                <img className="smallimg radius" src="../images/girl1.jpg" alt="User"/>
            </div>
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">Party</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <div><a href="" className="uk-button uk-button-text">Respond</a>
        </div>
    </div>
</div>





<div className="uk-card uk-card-default uk-box-shadow-hover-xlarge">
    <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
                <img className="smallimg radius"  src="../images/girl1.jpg" alt="User"/>
            </div>
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">Party</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <div><a href="" className="uk-button uk-button-text">Respond</a>
        </div>
    </div>
</div>






<div className="uk-card uk-card-default uk-box-shadow-hover-xlarge">
    <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
                <img className="smallimg radius"  src="../images/girl1.jpg" alt="User"/>
            </div>
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">Party</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <div><a href="" className="uk-button uk-button-text">Respond</a>
        </div>
    </div>
</div>


<div className="uk-card uk-card-default uk-box-shadow-hover-xlarge">
    <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
            <div className="uk-width-auto">
                <img className="smallimg radius"  src="../images/girl1.jpg" alt="User"/>
            </div>
            <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">Party</h3>
                <p className="uk-text-meta uk-margin-remove-top"><time datetime="2016-04-01T19:00">April 01, 2016</time></p>
            </div>
        </div>
    </div>
    <div className="uk-card-body">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
    </div>
    <div className="uk-card-footer">
        <div><a href="" className="uk-button uk-button-text">Respond</a>
</div>
    </div>
</div>





    </div>



</li>

<li>
  {/*mu posts*/}  
    <div  className="uk-child-width-1-3@s uk-grid-small uk-grid-match uk-margin-remove" data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">



 <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="../images/girl3.jpg" alt="User"/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
      <p><a href="">This is a link</a></p>
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
<div className="uk-margin-remove" data-uk-grid>
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








<script>
    UIkit.tab('.uk-tab');
</script>

</div>
    )
  }



  
}


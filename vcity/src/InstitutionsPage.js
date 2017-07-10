import React, { Component } from 'react';



export default class InstitutionsPage extends Component {


  render() {
    return (
<div>

{/*<br/>
    <form class="uk-grid" data-uk-grid>
      <div className="uk-width-1-6@s">
          <select className="uk-select" id="form-horizontal-select">
              <option value="">Select your country</option>
              <option>Russia</option>
              <option>USA</option>
          </select>
      </div>

      <div className="uk-width-1-6@s">
          <select className="uk-select" id="form-horizontal-select">
              <option value="">Select your city</option>
              <option></option>
              <option></option>
          </select>
      </div>


      <div className="uk-width-1-6@s">
          <select className="uk-select" id="form-horizontal-select">
              <option value="">Who are you looking for?</option>
              <option>All</option>
              <option>Man</option>
              <option>Female</option>
          </select>
      </div>

      <div className="uk-width-1-6@s">
        <button className="uk-button uk-button-default">Find</button>
      </div>

    </form>*/}
<div className="uk-section uk-section-muted uk-section uk-padding-remove-vertical">

 <div className="uk-card uk-card-secondary uk-card-small uk-grid-collapse uk-child-width-1-3@s uk-margin" data-uk-grid>
    <div className="uk-card-media-left uk-overflow-hidden">
        <img src="../images/girl2.jpg" alt=""/>
    </div>
    <div>
    <div className="uk-card-body">
        <h3 className="uk-card-title">User Girl</h3>
    </div>
    </div>
    <div className="uk-card-body">
        <h3 className="uk-card-title">Description</h3>
    </div>
</div>


    </div>





  <div className="uk-section uk-section-default">       
    <div className="uk-container uk-container-expand">




<ul className="uk-flex-center" data-uk-tab data-uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
    <li><a href="">Life</a></li>
    <li><a href="">Meetings</a></li>
    <li><a href="">Message</a></li>
</ul>


<ul className="uk-switcher uk-margin">
<li>

<div data-uk-grid>
    <div className="uk-width-3-5@l">
        <div >Auto


        </div>
    </div>
    <div className="uk-width-1-5@l">
        <div>Expand</div>
    </div>
</div>


</li>



<li>
    <div className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid >

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
</li>



    <li>
    <div className="uk-child-width-1-3@s uk-grid-small uk-grid-match " data-uk-grid data-uk-scrollspy="cls: uk-animation-fade; target: > div > .uk-card; delay: 500; repeat: true">







</div>
    </li>


    </ul>



</div>
</div>














    </div>

    )
  }
}


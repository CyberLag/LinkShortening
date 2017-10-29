import React , {Component} from "react";
import {createContainer} from "meteor/react-meteor-data";
import {Links} from "../../imports/collections/links"


class LinkList extends Component {
    rendenRows() 
    {
      return this.props.links.map(link => {
          const {url , token , clicks} = link;
          
          const shortlink = "http://localhost:3000/" + token;
          return (
              <tr key={token}>
              <td> {url}</td>
              <td><a href={shortlink}>{shortlink}
               </a></td>
               <td> {clicks}</td>
              </tr>

          )
      });
    }
    render (){
        return (
            <table className="table">
            <thead>
            <tr>
            <th>Url</th>
            <th>Shortlink</th>
            <th>Clicks</th>
            </tr>
            
            </thead>
            <tbody>
            {this.rendenRows()}
            </tbody>
            </table>
        )
    }
}

export default createContainer(()=>{
    Meteor.subscribe("links");
    return ( {links: Links.find({}).fetch()});

}, LinkList) ;
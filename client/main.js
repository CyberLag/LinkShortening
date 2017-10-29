
import React , {Component} from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import LinkCreate from "./component/link_create";
import  {Links} from "../imports/collections/links";
import LinkList from "./component/Link_list";



const App = ()=>
{
  return (
    <div>

    <Header />
    <LinkCreate />
    <LinkList />
    
    </div>
  );
};

Meteor.startup ( ()=>
{
ReactDOM.render(<App />
   , document.querySelector(".container"));
});
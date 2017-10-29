import { Meteor } from 'meteor/meteor';
import  { Links} from "../imports/collections/links";
import {WebApp } from "meteor/webapp"  ;
import ConnectRoute from "connect-route";

Meteor.startup(() => {

  Meteor.publish("links", function() {
    return Links.find({});
  }

  );
  // code to run on server at startup
});
function onRoute(req, res , next) {
  const link = Links.findOne({token : req.params.token});

  if (link)
    {
      Links.update(link, {$inc:{clicks :  1}})
      res.writeHead(307, {"location": link.url})
      res.end();
    }

    else 
      {
       next();
      }
}

const middleWare= ConnectRoute((route)=>{
  route.get(":/token", onRoute );

});




WebApp.connectHandlers.use(middleWare);
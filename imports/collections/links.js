import {Mongo} from "meteor/mongo";
import validUrl from "valid-url";
import {check , Match} from "meteor/check";


Meteor.methods({
    "links.insert": (url)=> {

check(url, Match.Where(url=>validUrl.is_uri(url)));

const token = Math.random().toString(36).slice(-5);
  Links.insert({url, token, clicks: 0});

    }

   

});

//cmd : meteor remove auto-publish
export const Links = new Mongo.Collection("links");
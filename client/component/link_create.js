import React , {Component} from "react";

class LinkCreate extends Component {
    constructor(props)
    {
        super(props);
        this.state= {error :""};
    }
    HandleLinks(event){
  event.preventDefault();

Meteor.call("links.insert",this.refs.link.value, (error)=>{
    if(error)
        {
           this.setState({error: "enter a valid url"});
        }
        else 
            {
                this.setState({error:""});
                this.refs.link.value=""  ;

            }
} )
    }
    //cmd: meteor remove insecure
    render() {
        return (
            <form  onSubmit={this.HandleLinks.bind(this)}>
            <div className="form-group">
             <label>Link to shorten </label>
             <input ref="link" className="form-control" />
             <div className="text-danger" >
             {this.state.error}
             </div>           
             <button className="btn btn-primary">
             Shorten!
             </button>
            </div>

            </form>
        );
    };
}

export default LinkCreate;
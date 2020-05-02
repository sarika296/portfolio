import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.png';
import './index.css'

class App extends Component {
    constructor()
    {
        super();
        this.state = {displayBio:false};
    }

    toggleDisplayBio = () =>
    {
        this.setState({displayBio : !this.state.displayBio})
    }

    render() {

        return(
            <div>
                <img src={profile} alt='profile ' className='profile' />
               <h1>Hello</h1>
               <p>My name is sarika.I'm a student.</p>
               <p>I'm always looking forward on meaningful projects.</p>
               {
               this.state.displayBio ?
                (<div>
                    <p>I live in kerala</p>
                    <p>My favourate language is Javascript</p>
                    <p>Besides coding, I also love music</p>
                    <button onClick={this.toggleDisplayBio} >Show Less</button>
                </div>):
                (
                    <button onClick={this.toggleDisplayBio} >Show More</button>

                )
        }
        <hr/>
        <Projects />
        <hr />
        <SocialProfiles />
            </div>
        )
    }
}
export default App;  
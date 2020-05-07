import React, {Component} from 'react';

class Tracks extends Component {
    state = { playing :false , audio:null, twiceClick:null };

    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        if(!this.state.playing)
        {
            audio.play();
            this.setState({ playing: true , audio, twiceClick:previewUrl});
        }
        else{
            this.state.audio.pause();
            if(this.state.twiceClick === previewUrl) {
                this.setState({ playing: false});
            }
            else {
                audio.play();
                this.setState({ audio, twiceClick:previewUrl});
            }
            
        }
        
    }

    trackIcon = track => {
        if(!track.preview_url) {
            return <span>N/A</span>;
        }
        if(
            this.state.playing &&
            this.state.twiceClick === track.preview_url
        ) {
            return <span>| |</span>;
        }
        return <span>&#9654;</span>;
    }

    render() {
        const {tracks}=this.props;

        return(
            <div>
                {
                    tracks.map(track => {
                        const {id, name, album, preview_url }=track;

                        return(
                            <div 
                                key={id}
                                onClick={this.playAudio(preview_url)} 
                                className='track' 
                            >
                            <img 
                                src={album.images[0].url} 
                                alt='track-profile' 
                                className='track-image'
                            />
                            <p className='track-text'>{name}</p>
                            <p className='track-icon'>{this.trackIcon(track)}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
} 


export default Tracks;
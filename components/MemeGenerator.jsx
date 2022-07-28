import React, { Component } from 'react';

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state= {
            topText: "",
            bottomText: "",
            randImage: "http://i.imgflip.com/1bij.jpg",
            allMemes: []
        }
    }

    async componentDidMount() {
        const pullAllMemes = await fetch("https://api.imgflip.com/get_memes")
        const memeJson = await pullAllMemes.json()
        const memeArray = memeJson.data.memes
        this.setState({
            allMemes : memeArray
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
    }

    switchImage() {
        const randNo = Math.floor(Math.random() * 100)
        const memestring = this.state.allMemes[randNo].url
        this.setState({
            randImage: memestring
        })
    }
    
    
    render() {
        const format = {
            display: "flex",
            paddingTop: "20px", 
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: 'column'
        }
        const styles = {
            textAlign: "center",
            backgroundColor: "#CBC3E3",
            border: "0px",
            fontSize: "32px",
            padding: "12px",
            borderRadius: "24px",
            fontFamily: "consolas",
            cursor: "pointer",
            boxShadow: "0 0 8px"
        }
        const formformat = {
            marginBottom: "12px",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column"
        }
        const inputformat = {
            alignItems: "center"
        }
        const imageformat = {
            position: "relative"
        }
        const caption = {
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "impact",
            color: 'white',
            fontSize: "42px",
            textTransform: "uppercase",
            textShadow: "4px 0 0 #000, 0 -4px 0 #000, 0 4px 0 #000, -4px 0 0 #000",
            whiteSpace: 'nowrap'
        }
        const top = {
            top: 0
        }
        const bottom = {
            bottom: 0
        }

        return (
            <div style = {format}>
                <form style= {formformat} >
                    <input style= {inputformat} placeholder="Top Text" type="text" name='topText' value={this.state.topText} onChange={(event) => this.handleChange(event)}/> <br />
                    <input style= {inputformat} placeholder="Bottom Text" type="text" name='bottomText' value={this.state.bottomText} onChange={(event) => this.handleChange(event)}/> <br />
                    <button type='button' style = {styles} onClick={() => this.switchImage()}>
                        Generate Meme
                    </button>
                </form>
                <div style={imageformat}>
                    <img src={this.state.randImage} alt="" />
                    <h2 style={{...caption, ...top}}>{this.state.topText}</h2>
                    <h2 style={{...bottom, ...caption}}>{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;

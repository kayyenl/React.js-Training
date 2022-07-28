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
        const memeArray = memeJson.data
        this.setState({
            allMemes : memeArray
        })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        console.log(name)
        console.log(value)
    }
    
    
    render() {
        const format = {
            display: "flex",
            paddingTop: "20px",
            justifyContent: "center",
            alignItems: 'center'
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
            transition: "all 300ms ease",
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

        return (
            <div style = {format}>
                <form style= {formformat} >
                    <input style= {inputformat} placeholder="Top Text" type="text" name='topText' value={this.state.topText} onChange={(event) => this.handleChange(event)}/> <br />
                    <input style= {inputformat} placeholder="Bottom Text" type="text" name='bottomText' value={this.state.bottomText} onChange={(event) => this.handleChange(event)}/> <br />
                    <button style = {styles}>
                        Generate Meme
                    </button>
                </form>
            </div>
        );
    }
}

export default MemeGenerator;

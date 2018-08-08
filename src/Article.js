import React, {Component} from 'react';



export default class Article extends Component {
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render() {
        const {article} = <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at corporis debitis distinctio, exercitationem expedita explicabo impedit, inventore mollitia nisi quae quod repellendus rerum temporibus! Architecto modi quasi recusandae.</section>
        const{isOpen} = this.state
        return (
            <html >
                <body>
                    <div id="app">
                                < button onClick={this.toggleOpen}>{isOpen ? 'Close' : 'Open'}</button>
                                {this.getbBody()}
                    </div>
                </body>
            </html>
        )
    }
    getbBody () {
        if (!this.state.isOpen) return null
        const {article} = <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at corporis debitis distinctio, exercitationem expedita explicabo impedit, inventore mollitia nisi quae quod repellendus rerum temporibus! Architecto modi quasi recusandae.</section>
        return <section>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores at corporis debitis distinctio, exercitationem expedita explicabo impedit, inventore mollitia nisi quae quod repellendus rerum temporibus! Architecto modi quasi recusandae.</section>

    }
    toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}
import React, {Component} from "react";

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <header>
                    <nav  className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="https://javaguides.net" className="navbar-brand">
                                Product Management App
                            </a>
                        </div>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Header;
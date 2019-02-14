import React, {Component} from 'react'
import "../component_css/TopMenu.css"

type Props = {
    title: string;
}

export class TopMenuItem extends Component<Props> {
    render() {
        const title = this.props.title;
        return (
            <li className="top-menu-item">
                <a>
                    {title}
                </a>
            </li>
        )
    }
}



export class TopMenu extends Component {
    render () {
        return (
            <ul className="top-menu">
                <TopMenuItem title="Events" />
                <TopMenuItem title="Prices" />
                <TopMenuItem title="Facebook" />
            </ul>
        )
    }
}






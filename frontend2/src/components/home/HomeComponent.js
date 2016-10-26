import React from "react"
import {PropTypes} from "react"
import _styles from "./styles.sass"
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Dimensions from 'react-dimensions'
import Component from "./../Component"
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: "100%",
        overflowY: 'auto',
    },

};
class HomeComponent extends Component {
    constructor() {
        super()
    }

    render() {
        let {model} = this.props
        let {selectedTag, selectedPlace, stores} = model
        let width = this.props.containerWidth/2
        return (<div className="displayFlex" style={{flexDirection: "column"}}>
                <div className="displayFlex" style={{flexDirection: "row"}}>
                    {model.tagSelector.getView({width})}
                    {model.placeSelector.getView({width})}
                </div>
            <RaisedButton onClick={model.goSearch} label="Search" primary={true} fullWidth={true} />
            <h1>{selectedTag.name} {selectedPlace.name}</h1>
            <div style={styles.root}>
                <GridList
                    cols={3}
                    cellHeight={180}
                    style={styles.gridList}
                >
                    <Subheader>December</Subheader>
                    {stores.map((store,i) => (
                        <GridTile
                            key={i}
                            title={store.name}
                            subtitle={<span>by <b>{store.author}</b></span>}
                            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                        >
                            <img src={store.image} />
                        </GridTile>
                    ))}
                </GridList>
            </div>
        </div>)
    }
}


export default Dimensions()(HomeComponent)


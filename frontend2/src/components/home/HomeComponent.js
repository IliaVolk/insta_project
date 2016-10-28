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
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

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
        let {selectedPlace, stores, selectedTags, removeTag} = model
        return (<div className="displayFlex cols flexCenter">
                <div className="displayFlex width100">
                    <div className="width50">
                        <div className="displayFlex flexWrap flexCenter marginTop">
                            {selectedTags.map(tag=><Chip
                                key={tag.name}
                                className="margin"
                                onRequestDelete={()=>removeTag(tag)}
                            >
                                {tag.name}
                            </Chip>)}
                        </div>
                        {model.tagSelector.getView()}
                    </div>
                    <div className="width50 marginTop">
                        {model.placeSelector.getView()}
                    </div>
                </div>
            <div className="small-container displayFlex flexCenter cols">
            <TextField
                    floatingLabelText="Tags..."
                    fullWidth={true}
                />
                <RaisedButton onClick={model.goSearch} label="Search" primary={true} fullWidth={true} />
            </div>
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


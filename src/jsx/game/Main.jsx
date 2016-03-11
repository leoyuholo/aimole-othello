import React from 'react';

import Score from 'game/Score.jsx';
import Board from 'game/Board.jsx';

const styles = {
    main: {
        height: 'calc(100vh - 60px)',
        width: '100vw',
        background: 'linear-gradient(#413887, #39C8AE)',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export default class Main extends React.Component {
    render() {
        return (
            <div style={styles.main}>
                <Board {... this.props}/>
                <Score score={this.props.score}/>
            </div>
        );
    }
}
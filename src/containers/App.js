import React from 'react';
import {connect} from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary';
import {setSearchField, requestRobots} from '../actions';
// State >> props
// state(changable props) is object whith is describing what kind of action user is doing
const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())
    }
}

class App extends React.Component {
    componentDidMount() {       // React's method so we haven't to create an arrow function. this method is calling imidiatelly when component is mounted 
        this.props.onRequestRobots();
    }
    render() {  // render is running every time state is changing
        const {searchField, onSearchChange, robots, isPending} = this.props;
        const filteredRobots = robots.filter(robot => {         // cleaner
            return robot.name.toLowerCase().includes(searchField.toLowerCase());    // cleaner
        })
        return isPending ?                           //cleaner, because by default will be equal zero
            <h1 className="tc">Loading...</h1>:
        (
        <div className = "tc">
            <h1 className="f1">RoboFriends</h1>
            <SearchBox searchChange = {onSearchChange}/>  
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
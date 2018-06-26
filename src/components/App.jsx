import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { v4 } from 'uuid';

import LocationList from './LocationList';
import CommentList from './CommentList';
import NewCommentControl from './NewCommentControl';
import Admin from './Admin';
import Error404 from './Error404';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCommentList: {},
      adminSelectedComment: null
    };
    this.handleAddingNewComment = this.handleAddingNewComment.bind(this);
    this.handleChangingAdminSelectedComment = this.handleChangingAdminSelectedComment.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() => {
      this.updateTicketWaitTime(),
      60000;
    });
  }

  componentWillUnmount() {
    clearInterval(this.waitTimeUpdateTimer);
  }

  handleChangingAdminSelectedComment(commentId) {
    this.setState({adminSelectedComment: commentId});
  }

  handleAddingNewComment(newComment) {
    var newCommentId = v4();
    var newMasterCommentList = Object.assign({}, this.state.masterCommentList, {
      [newCommentId]: newComment
    });
    newMasterCommentList[newCommentId].formattedWaitTime = newMasterCommentList[newCommentId].timeOpen.fromNow(true);
    this.setState({masterCommentList: newMasterCommentList});
  }

  updateTicketWaitTime() {
    var newMasterCommentList = Object.assign({}, this.state.masterCommentList);
    Object.keys(newMasterCommentList).forEach(commentId => {
      newMasterCommentList[commentId].formattedWaitTime = (newMasterCommentList[commentId].timeOpen).fromNow(true);
    });
    this.setState({masterCommentList: newMasterCommentList});
  }


  render() {
    return (
      <div>
        <h1>Avery's Organics</h1>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100vw',
          height: '100px',
          borderTop: '2px solid green',
          borderBottom: '2px solid green',
          color: 'green'

        }}>
          <div style={{
            width: '10%',
            padding: '2%'

          }}>
            <Link to='/' style={{
              textDecoration: 'none',
              color: 'green'
            }}>
              <h3>Home</h3>
            </Link>
          </div>
          <div style={{
            width: '10%',
            padding: '2%'
          }}>
            <Link to='newcomment' style={{
              textDecoration: 'none',
              color: 'green'
            }}>
              <h3>New Comment</h3>
            </Link>
          </div>
          <div style={{
            width: '10%',
            padding: '2%'
          }}>
            <Link to='comments' style={{
              textDecoration: 'none',
              color: 'green'
            }}>
              <h3>Comments</h3>
            </Link>
          </div>
        </div>

        <Switch>
          <Route exact path='/' component={LocationList} />
          <Route exact path='/comments' render={() => <CommentList commentList={this.state.masterCommentList} /> } />
          <Route path='/newcomment' render={() => <NewCommentControl onNewCommentCreation={this.handleAddingNewComment} />} />
          <Route path='/admin' render={(props) => <Admin commentList={this.state.masterCommentList} currentRouterPath={props.location.pathname} adminSelectedComment={this.state.adminSelectedComment} onCommentSelection={this.handleChangingAdminSelectedComment} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;

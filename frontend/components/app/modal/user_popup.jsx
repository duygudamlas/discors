import React from 'react';
import Popup from 'reactjs-popup';

class UserPopup extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addFriend = this.addFriend.bind(this);
  }

  handleClick() {
    this.props.createDmChannel(this.props.user.id).then((action) => this.props.history.push(`/channels/@me/${action.channel.id}`));
  }

  addFriend() {
    this.props.createFriendRequest({ friend_id: this.props.user.id });
  }

  render() {
    return (
      <Popup trigger={this.props.component}
        arrow={false}
        position={this.props.position}
        closeOnDocumentClick
        on="click"
        offsetX={this.props.offsetX || 0}
        offsetY={this.props.offsetY || 0}
        overlayStyle={{
          zIndex: 98,
        }}
        contentStyle={{
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgba(0, 0, 0, .2), 0 0 0 1px rgba(32, 34, 37, .6)',
          overflow: 'hidden',
          width: '250px',
          whiteSpace: 'nowrap',
          fontFamily: 'main3',
          color: '#fff',
          border: 'none',
          fontSize: '14px',
          display: 'flex',
          padding: '0',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'black',
          overflow: 'auto',
          zIndex: 99,
        }}
      >
        <div className="user-popup">
          <div className="user-popup-top">
            <div className="user-popup-img" style={this.props.user.image_url ? { backgroundImage: `url(${this.props.user.image_url})` } : {}}></div>
            <h5>{this.props.user.username}</h5>
          </div>
          <div className="user-popup-bottom">
            {this.props.user.id === this.props.currentUser.id ? null : <button id="session-submit"
              style={{ marginBottom: 0 }}
              onClick={this.handleClick}
            >Message</button>}
          </div>
          <div className="user-popup-bottom">
            {this.props.user.id === this.props.currentUser.id ? null : <button id="session-submit"
              style={{ marginBottom: 0 }}
              onClick={this.addFriend}
            >Add Friend</button>}
          </div>
        </div>
      </Popup>
    );
  }
}

export default UserPopup; 
import React from 'react'
import { connect } from 'react-redux'
import ChannelLink from './channelLink'
import CreateChannel from './createChannel'

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    channels: state.channels.available
  }
}

const ChannelList = ({ channels }) => (
  <div>
    <h2>Channels</h2>
    <CreateChannel />
    <ul className="nav nav-sidebar">
      <ChannelLink to="/channel/everything">Everything</ChannelLink>
      {channels.map((channel, i) => (
        <ChannelLink key={i} to={"/channel/" + channel.name}>{channel.name}</ChannelLink>
      ))}
    </ul>
  </div>
)

export default connect(mapStateToProps)(ChannelList)

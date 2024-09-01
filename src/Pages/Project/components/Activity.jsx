import React from 'react'

export default function Activity(props) {
  return (
    <div>
        Activity on this Job
        <p>Proposals: {props.proposals}</p>
        <p>Last Viewed by Client: {props.lastView}</p>
        <p>Interviewing: {props.interviewing}</p>
        <p>Invites Sent: {props.invite}</p>
        <p>Unanswered Invites: {props.unanswered}</p>

        Upgrade Membership to see biding range.
    </div>
  )
}

import React from 'react';
import moment from 'moment';

export default function Notification(props) {
  const { notifications } = props;
  return (
    <div className="section">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title deep-orange-text accent-2 center">NOTIFICATIONS</span>
          <ul className="notification">
            {notifications &&
              notifications.map(notif => (
                <li key={notif.id}>
                  <span className="orange-text">{`${notif.user} `}</span>
                  <span>{notif.content}</span>
                  <div className="grey-text note-date">{moment(notif.time.toDate()).fromNow()}</div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

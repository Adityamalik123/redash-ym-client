import React from 'react';
import classNames from 'classnames';
import { ReactComponent as Logo } from '../../assets/dashboard.svg';
import './EmptyState.less';

function Step({ show, completed, text, url, urlText, onClick }) {
  if (!show) {
    return null;
  }

  return (
    <li className={classNames({ done: completed })}>
      <a href={url} onClick={onClick}>
        {urlText}
      </a>{' '}
      {text}
    </li>
  );
}

export default class EmptyState extends React.Component {
  componentDidMount() {
    const path = document.querySelector('#GroupLine').lastElementChild;
    if (!path) {
      return;
    }
    setInterval(() => {
      const length = path.getTotalLength();
      // Clear any previous transition
      path.style.transition = 'none';
      path.style.WebkitTransition = 'none';
      // Set up the starting positions
      path.style.strokeDasharray = `${length} ${length}`;
      path.style.strokeDashoffset = length;
      // Trigger a layout so styles are calculated & the browser
      // picks up the starting position before animating
      path.getBoundingClientRect();
      // Define our transition
      path.style.transition = 'stroke-dashoffset 2s ease-in-out';
      path.style.WebkitTransition = 'stroke-dashoffset 2s ease-in-out';
      path.style.strokeDashoffset = '0';
    }, 3000);
  }

  render() {
    const { icon, header, description, helpLink } = this.props;
    return (
      <div
        className='empty-state bg-white tiled'
        style={{ background: '#ffff' }}
      >
        <div className='empty-state__summary'>
          {header && <h4>{header}</h4>}
          <h2>
            <i className={icon} />
          </h2>
          <p>{description}</p>
          <Logo style={{ width: '75%', height: '75%' }} />
        </div>
        <div className='empty-state__steps'>
          <h4>Let&apos;s get started</h4>
          <ol>
            <Step show completed urlText='Connect' text='a Data Source' />
            <Step
              show
              completed={false}
              urlText='Create'
              text='your first Query'
            />
            <Step
              show
              completed={false}
              urlText='Create'
              text='your first Alert'
            />
            <Step
              show
              completed={false}
              urlText='Create'
              text='your first Dashboard'
            />
            <Step
              show
              completed={false}
              urlText='Invite'
              text='your team members'
            />
          </ol>
          <p>
            Need more support?{' '}
            <a href={helpLink} target='_blank' rel='noopener noreferrer'>
              See our Help
              <i className='fa fa-external-link m-l-5' aria-hidden='true' />
            </a>
          </p>
        </div>
      </div>
    );
  }
}

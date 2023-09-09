import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

export const NotificationsContainer = styled.div`
  --width: 22rem; 
  --height: 5rem; 
  --gap: 1rem;

  position: fixed;
  top: 1rem; 
  right: 1rem; 
  pointer-events: none;

  &:hover {
    .notification {
      transform: translateY(0) scale(1);

      .notification-inner {
        opacity: 1;
        background-color: hsl(0 0% 100% / 40%);
      }

      &.exit-active {
        transform: translateY(0) scale(0.8); 
        margin-right: calc((var(--width) + var(--gap)) * -1); 
      }
    }
  }
`;

export const NotificationItem = styled(CSSTransition)`
  display: flex;
  transform: translateY(var(--y)) scale(var(--scale));
  transform-origin: center;
  transition: all var(--duration) ease-in-out;
  pointer-events: auto;

  &.enter {
    transform: translateY(-100%) scale(1); 
    margin-right: calc((var(--width) + var(--gap)) * -1);
  }

  &.enter-active {
    transform: translateY(var(--y)) scale(var(--scale));
    margin-right: 0;
  }

  &.exit-active {
    transform: translateY(calc(var(--y) - 10%)) scale(calc(var(--scale) - 0.1));

    .notification-inner {
      opacity: 0;
    }
  }
`;

export const NotificationInner = styled.div`
  background-color: var(--bg);
  -webkit-backdrop-filter: blur(0.5rem);
  backdrop-filter: blur(0.5rem);
  padding: 0 1rem;
  border-radius: 0.5rem;
  width: var(--width);
  height: var(--height);
  margin-right: var(--gap); 
  opacity: var(--opacity);
  transition: all var(--duration) ease-in-out;
  display: flex;
  align-items: center;

  h2 {
    font-weight: bold;
    font-size: 0.9rem;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.8rem;
  }

  .close {
    background: none;
    border: none;
    position: absolute;
    right: 0;
    top: 0;
    font-size: 0.8rem;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.8rem; 
  height: 2.8rem; 
  border-radius: 0.5rem;
  margin-right: 1rem;
  font-size: 1rem;
  color: white;

  &.error {
    background-color: #f87171;
  }

  &.success {
    background-color: #10b981;
  }

  &.info {
    background-color: #60a5fa;
  }

  &.warning {
    background-color: #f59e0b;
  }
`;

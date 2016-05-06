import React from 'react';
import { IonContent } from 'reactionic';
import CordovaLink from './CordovaLink'

var About = React.createClass({
  render() {
    return (
      <IonContent customClasses="padding"
                  {...this.props}>
        <h2>About React-Ionic</h2>
        <p>React-Ionic is an open source library for implementing hybrid mobile apps (iOS and Android).</p>
        <p>For more information go to <CordovaLink URL={'http://reactionic.github.io/'}> http://reactionic.github.io/</CordovaLink>
        </p>
      </IonContent>
    );
  }
});

export default About;

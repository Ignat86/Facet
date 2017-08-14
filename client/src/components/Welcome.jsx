import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Welcome extends PureComponent {
  render () {
    return (
      <div className="inner-cover">
        <h1 className="cover-heading-welcome">Добро пожаловать</h1>
        <p className="lead_welcome">Нажмите Старт для начала тестирования.</p>
        <p className="lead_welcome">
          <Link className="btn" to="/products">Старт!</Link>
        </p>
      </div>
    );
  }
}

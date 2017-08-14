import React, { PureComponent } from 'react';
import { Link } from 'react-router';

export default class Contact extends PureComponent {
  render () {
    return (
      <div className="inner-cover">
        <h1 className="cover-heading-contact">Есть вопросы?</h1>
        <p className="lead_contact">Свяжитесь с нами: example@mail.ru </p>
 	<Link className="btn" to="/">Назад к началу!</Link>
      </div>
    );
  }
}

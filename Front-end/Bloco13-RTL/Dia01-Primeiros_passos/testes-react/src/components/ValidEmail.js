import React from 'react';
import PropTypes from 'prop-types';
import '../css/ValidEmail.css';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {
        email && (
          verifyEmail(email)
            ? <h3 id="valid" data-testid="valid-email">Email Válido</h3>
            : <h3 id="invalid" data-testid="invalid-email">Email Inválido</h3>
        )
      }
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;

const Mailgun = require('mailgun-js');

const template = require('../config/template');

const sender ="mariemrouissi123@gmail.com"

class MailgunService {
  init() {
    try {
      return new Mailgun({
        apiKey: "5c563c915b3d7329d8d00bd0a36bab4a-e2e3d8ec-0d2984ab",
      });
    } catch (error) {
      console.warn('Missing mailgun keys');
    }
  }
}

const mailgun = new MailgunService().init();

exports.sendEmail = async (email, type, host, data) => {
  try {
    const message = prepareTemplate(type, host, data);

    const config = {
      from: `MERN Store! <${sender}>`,
      to: email,
      subject: message.subject,
      text: message.text
    };

    return await mailgun.messages().send(config);
  } catch (error) {
    return error;
  }
};

const prepareTemplate = (type, host, data) => {
  let message;

  switch (type) {
    case 'reset':
      message = template.resetEmail(host, data);
      break;

    case 'reset-confirmation':
      message = template.confirmResetPasswordEmail();
      break;

    case 'signup':
      message = template.signupEmail(data);
      break;

    case 'merchant-signup':
      message = template.merchantSignup(host, data);
      break;

    case 'merchant-welcome':
      message = template.merchantWelcome(data);
      break;

    case 'newsletter-subscription':
      message = template.newsletterSubscriptionEmail();
      break;

    case 'contact':
      message = template.contactEmail();
      break;

    case 'merchant-application':
      message = template.merchantApplicationEmail();
      break;

    case 'order-confirmation':
      message = template.orderConfirmationEmail(data);
      break;

    default:
      message = '';
  }

  return message;
};

import Navbar from '../components/Navbar';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';

const Faq = () => {
  const { isLoggedIn } = useContext(AuthContext);

  if (isLoggedIn) {
    return (
      <div>
        <Navbar />
        <div style={{ marginLeft: '20px' }}>
          <h1 style={{ marginTop: '20px', marginBottom: '20px' }}>
            Frequently Asked Questions (FAQ)
          </h1>

          <h5>What is Holdtheboats.com?</h5>

          <p style={{ marginRight: '300px' }}>
            Holdtheboats.com is a platform that allows individuals to buy and
            sell second-hand boats. It provides a user-friendly interface for
            browsing a wide range of boats, connecting buyers and sellers, and
            facilitating secure transactions.
          </p>

          <h5> How can I reset my password?</h5>

          <p style={{ marginRight: '300px' }}>
            If you forget your password, click on the Forgot Password link on
            the login page. Enter your registered email address, and you will
            receive an email with instructions to reset your password.
          </p>
          <h5> Is it free to create an account and list boats for sale?</h5>
          <p style={{ marginRight: '300px' }}>
            Yes, it is completely free to create an account and list boats for
            sale on Holdtheboats.com. There are no hidden fees or charges.
          </p>

          <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
            {' '}
            <u>Buying Boats</u>
          </h4>

          <h5> How can I contact the seller of a boat?</h5>

          <p style={{ marginRight: '300px' }}>
            To contact the seller of a boat, click on the Contact Seller button
            on the boat details page. You can send a message to the seller with
            your inquiries.
          </p>
          <h5> Are there any inspection services available?</h5>

          <p style={{ marginRight: '300px' }}>
            Holdtheboats.com does not provide inspection services. It is
            recommended that buyers arrange their own inspections or surveys
            before making a purchase.
          </p>

          <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
            {' '}
            <u>Selling Boats</u>
          </h4>

          <h5> How can I list my boat for sale on Holdtheboats.com?</h5>

          <p style={{ marginRight: '300px' }}>
            To list your boat for sale, you must first create an account or log
            in to your existing account. Once logged in, click on the Sell Your
            Boat button and fill in the details of your boat, including photos,
            specifications, and price. Your listing will be reviewed before
            being published.
          </p>
          <h5> How can I manage my boat listings?</h5>

          <p style={{ marginRight: '300px' }}>
            You can manage your boat listings by going to the My Boat Ads
            section of your profile. From there, you can edit or delete your
            listings as needed.
          </p>
          <h5> How are the payments processed for boat sales?</h5>

          <p style={{ marginRight: '300px' }}>
            Holdtheboats.com does not process payments directly. Buyers and
            sellers are responsible for arranging payment methods themselves. We
            recommend using secure payment methods to avoid scams.
          </p>
          <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
            {' '}
            <u>Security and Privacy</u>
          </h4>

          <h5> Is my personal information safe?</h5>

          <p style={{ marginRight: '300px' }}>
            At Holdtheboats.com, we take the privacy and security of our users
            seriously. We use industry-standard encryption to protect your
            personal information.
          </p>

          <h4 style={{ marginTop: '20px', marginBottom: '20px' }}>
            <u>Contact and Support</u>
          </h4>

          <h5> How can I get in touch with customer support?</h5>

          <p style={{ marginRight: '300px' }}>
            For any questions or assistance, you can contact our customer
            support team via email at holdtheboats.website@gmail.com.
          </p>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
};

export default Faq;

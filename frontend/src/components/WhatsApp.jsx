import React, { useState, useRef, useEffect } from 'react';
import styles from './WhatsApp.module.css';
import { FaWhatsapp, FaPaperPlane, FaCheck, FaCheckDouble } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const WhatsApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: 'Hello! Welcome to Universal Dialysis. How can we help you today?', 
      sender: 'support',
      timestamp: new Date(),
      status: 'read'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // WhatsApp number for sending messages
  const whatsappNumber = '7723015595';

  // Toggle WhatsApp chat open/close
  const toggleWhatsApp = () => {
    setIsOpen(!isOpen);
  };

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle sending a message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      status: 'sending'
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    
    // Send message to WhatsApp
    sendToWhatsApp(inputText);
    
    setInputText('');
    
    // Update message status to sent
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg === userMessage ? { ...msg, status: 'sent' } : msg
      ));
    }, 1000);

    // Update message status to delivered
    setTimeout(() => {
      setMessages(prev => prev.map(msg => 
        msg === userMessage ? { ...msg, status: 'delivered' } : msg
      ));
    }, 2000);

    // Show typing indicator and simulate response
    setTimeout(() => {
      setIsTyping(true);
    }, 3000);

    // Simulate support response
    setTimeout(() => {
      const supportResponse = generateSupportResponse(inputText);
      setMessages(prev => [
        ...prev.map(msg => 
          msg === userMessage ? { ...msg, status: 'read' } : msg
        ),
        {
          text: supportResponse,
          sender: 'support',
          timestamp: new Date(),
          status: 'read'
        }
      ]);
      setIsTyping(false);
    }, 5000);
  };

  // Send message to WhatsApp
  const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(
      `New message from Universal Dialysis website:\n\n${message}\n\nPlease respond to continue the conversation.`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  // Generate support response
  const generateSupportResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! Thank you for contacting Universal Dialysis. How can we assist you today?';
    } else if (lowerCaseMessage.includes('appointment')) {
      return 'I can help you schedule an appointment. Please call us at +91-7058373585 or let me know your preferred date and time.';
    } else if (lowerCaseMessage.includes('dialysis') || lowerCaseMessage.includes('treatment')) {
      return 'We provide comprehensive dialysis services with state-of-the-art equipment. Would you like to know more about our treatment options?';
    } else if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('address')) {
      return 'We have multiple locations across India. You can check our map section on the website or let me know your city for the nearest center.';
    } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('time')) {
      return 'Our centers are typically open Monday-Friday 7:00 AM to 7:00 PM, Saturday 8:00 AM to 2:00 PM. Specific hours may vary by location.';
    } else if (lowerCaseMessage.includes('emergency')) {
      return 'For medical emergencies, please call 108 immediately. For urgent dialysis needs, contact our 24/7 helpline at +91-7058373585.';
    } else if (lowerCaseMessage.includes('cost') || lowerCaseMessage.includes('price')) {
      return 'Treatment costs vary based on individual needs and insurance coverage. Please contact us for detailed pricing information.';
    } else {
      return 'Thank you for your message. Our support team will get back to you shortly. For immediate assistance, please call +91-7058373585.';
    }
  };

  // Format timestamp
  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  // Get message status icon
  const getStatusIcon = (status) => {
    switch (status) {
      case 'sending':
        return <div className={styles.clock}>⏰</div>;
      case 'sent':
        return <FaCheck className={styles.singleCheck} />;
      case 'delivered':
        return <FaCheckDouble className={styles.doubleCheck} />;
      case 'read':
        return <FaCheckDouble className={styles.readCheck} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles['whatsapp-container']}>
      {/* WhatsApp Icon */}
      <div className={styles['whatsapp-icon']} onClick={toggleWhatsApp}>
        <FaWhatsapp />
        {!isOpen && (
          <div className={styles['notification-badge']}>
            <span>💬</span>
          </div>
        )}
      </div>

      {/* WhatsApp Chat Box */}
      <div className={`${styles['whatsapp-box']} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles['whatsapp-header']}>
          <div className={styles['header-info']}>
            <div className={styles['avatar']}>
              <FaWhatsapp />
            </div>
            <div className={styles['contact-info']}>
              <h3>Universal Dialysis</h3>
              <span className={styles['online-status']}>Online</span>
            </div>
          </div>
          <button className={styles['close-button']} onClick={toggleWhatsApp}>
            <IoMdClose />
          </button>
        </div>

        <div className={styles['chat-messages']}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${
                message.sender === 'user' ? styles['user-message'] : styles['support-message']
              }`}
            >
              <div className={styles['message-content']}>
                {message.text}
              </div>
              <div className={styles['message-info']}>
                <span className={styles.timestamp}>
                  {formatTime(message.timestamp)}
                </span>
                {message.sender === 'user' && (
                  <span className={styles['message-status']}>
                    {getStatusIcon(message.status)}
                  </span>
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className={styles['typing-indicator']}>
              <div className={styles['typing-avatar']}>
                <FaWhatsapp />
              </div>
              <div className={styles['typing-dots']}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form className={styles['chat-input']} onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button type="submit" className={styles['send-button']}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default WhatsApp;
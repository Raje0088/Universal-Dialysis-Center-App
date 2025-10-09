import React, { useState, useRef, useEffect } from 'react';
import styles from './Chatbot.module.css';
import { FaRobot, FaPaperPlane } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'bot' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Toggle chatbot open/close
  const toggleChatbot = () => {
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
    const newMessages = [...messages, { text: inputText, sender: 'user' }];
    setMessages(newMessages);
    setInputText('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const botResponse = generateResponse(inputText);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
      setIsTyping(false);
    }, 1500);
  };

  // Simple response generator (can be replaced with actual AI integration)
  const generateResponse = (userMessage) => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello! How can I assist you with Universal Dialysis services?';
    } else if (lowerCaseMessage.includes('appointment')) {
      return 'You can schedule an appointment by calling our office or using the "Make an Appointment" button on our website.';
    } else if (lowerCaseMessage.includes('dialysis')) {
      return 'We offer comprehensive dialysis services with state-of-the-art equipment and caring staff.';
    } else if (lowerCaseMessage.includes('location') || lowerCaseMessage.includes('address')) {
      return 'Our main facility is located at 123 Healthcare Avenue. We also have satellite locations throughout the city.';
    } else if (lowerCaseMessage.includes('hours') || lowerCaseMessage.includes('time')) {
      return 'We are open Monday through Friday from 7:00 AM to 7:00 PM, and Saturday from 8:00 AM to 2:00 PM.';
    } else if (lowerCaseMessage.includes('insurance')) {
      return 'We accept most major insurance plans. Please contact our office for specific information about your coverage.';
    } else if (lowerCaseMessage.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with?";
    } else {
      return "I'm not sure I understand. Could you please rephrase your question or ask about our dialysis services, appointments, locations, or insurance coverage?";
    }
  };

  return (
    <div className={styles['chatbot-container']}>
      {/* Chatbot Icon */}
      <div className={styles['chatbot-icon']} onClick={toggleChatbot}>
        <FaRobot />
      </div>

      {/* Chatbot Box */}
      <div className={`${styles['chatbot-box']} ${isOpen ? styles.open : styles.closed}`}>
        <div className={styles['chatbot-header']}>
          <h3>Universal Dialysis Assistant</h3>
          <button className={styles['close-button']} onClick={toggleChatbot}>
            <IoMdClose />
          </button>
        </div>

        <div className={styles['chat-messages']}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${message.sender === 'user' ? styles['user-message'] : styles['bot-message']}`}
            >
              {message.text}
            </div>
          ))}
          
          {isTyping && (
            <div className={styles['typing-indicator']}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        <form className={styles['chat-input']} onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Type your message..."
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

export default Chatbot;
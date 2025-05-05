import React, { useState, useEffect, useRef } from 'react';
import './chatbot.scss';
import { Bot, X } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: 'Hi! 👋 How can I help you with MovieVault today?' }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getBotResponse = (inputText) => {
        const text = inputText.toLowerCase();

        if (text.includes('what is movievault')) {
            return '🎬 MovieVault is a platform where you can explore trending and top-rated movies and TV shows using data from TMDB.';
        }
        if (text.includes('watch') || text.includes('stream')) {
            return '🚫 Sorry, MovieVault doesn’t stream or host videos. We provide detailed info and trailers for movies and shows.';
        }
        if (text.includes('free')) {
            return '✅ Yes! MovieVault is completely free and requires no login or subscription.';
        }
        if (text.includes('update') || text.includes('latest')) {
            return '🔄 We regularly update content using TMDB’s latest data so you always see what’s trending!';
        }
        if (text.includes('contact') || text.includes('help')) {
            return '📧 For support or feedback, feel free to contact us at support@movievault.app.';
        }
        if (text.includes('action movie')) {
            return '🔥 Here are some great action movies:\n- John Wick\n- Mad Max: Fury Road\n- Extraction\n- The Dark Knight\n- Mission: Impossible – Fallout';
        }
        if (text.includes('romance movie')) {
            return '💖 Here are some romantic movie picks:\n- The Notebook\n- La La Land\n- Pride & Prejudice\n- To All the Boys I\'ve Loved Before\n- Me Before You';
        }

        return "🤖 I'm still learning! Please try asking about MovieVault's features, streaming, updates, or movie recommendations.";
    };

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessages = [...messages, { type: 'user', text: input }];
        const botReply = getBotResponse(input);

        setMessages([...newMessages, { type: 'bot', text: botReply }]);
        setInput('');
    };

    return (
        <div className="chatbot">
            {isOpen && (
                <div className="chatbot__box">
                    <div className="chatbot__header">
                        <h4>MovieVault Chat</h4>
                        <button className="chatbot__close-btn" onClick={toggleChat}>
                            <X size={20} />
                        </button>
                    </div>
                    <div className="chatbot__messages">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`chatbot__message chatbot__message--${msg.type}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                    <div className="chatbot__input">
                        <input
                            type="text"
                            placeholder="Ask me something..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        />
                        <button onClick={handleSend} className="chatbot__send-btn">
                            Send
                        </button>
                    </div>
                </div>
            )}

            {!isOpen && (
                <button className="chatbot__toggle" onClick={toggleChat} title="Chat with us">
                    <Bot size={24} />
                </button>
            )}
        </div>
    );
};

export default Chatbot;

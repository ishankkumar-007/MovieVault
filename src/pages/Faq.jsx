import React, { useEffect } from 'react';

const faqData = [
    {
        question: "What is MovieVault?",
        answer: "MovieVault is a web app that helps you discover trending and top-rated movies and TV shows, powered by The Movie Database (TMDB)."
    },
    {
        question: "Is MovieVault free to use?",
        answer: "Yes, MovieVault is completely free and does not require any subscriptions or sign-ups to explore content."
    },
    {
        question: "Where does the content data come from?",
        answer: "All movie and TV show data is fetched from TMDB (The Movie Database) via their public API."
    },
    {
        question: "Can I watch movies on MovieVault?",
        answer: "No, MovieVault only provides information about movies and TV shows. We do not host or stream any video content."
    },
    {
        question: "How often is the content updated?",
        answer: "The trending and top-rated sections are updated frequently to reflect the latest data from TMDB."
    }
];

const Faq = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container" style={{ marginTop: '12rem', marginBottom: '4rem' }}>
            <div className="section mb-3">
                <div className="section__header mb-2">
                    <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Frequently Asked Questions</h2>
                </div>
                <div className="faq__list">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="mb-3"
                            style={{
                                backgroundColor: '#1c1c1c',
                                padding: '1.5rem 2rem',
                                borderRadius: '0.8rem',
                                transition: 'transform 0.2s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.0)'}
                        >
                            <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem', color: '#fff' }}>
                                {item.question}
                            </h3>
                            <p style={{ fontSize: '1.5rem', lineHeight: '1.6', color: '#ccc' }}>
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;

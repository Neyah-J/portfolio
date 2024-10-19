import { useState } from 'react';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  // Generate AI response based on user input
  const generateResponse = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput.includes('who is neyah') || userInput.includes('tell me about neyah')) {
      return "AI Bot: Neyah Johnson is an Information Technology major at Kean University with experience in technical support, cloud management, web development, and leadership through her role in the Kean Leadership Institute and Girls Who Code.";
    } else if (userInput.includes('projects') || userInput.includes('work')) {
      return "AI Bot: Neyah has worked on multiple projects including a database system and a survey method project aimed at helping underrepresented students.";
    } else if (userInput.includes('experience') || userInput.includes('skills')) {
      return "AI Bot: Neyah is experienced in technical support, cloud management, web development, and leadership through her role in the Girls Who Code club.";
    } else if (userInput.includes('contact')) {
      return "AI Bot: You can reach Neyah at neyahjohnson07@gmail.com.";
    } else if (userInput.includes('education')) {
      return "AI Bot: Neyah is pursuing a Bachelor of Science in Information Technology from Kean University, expected to graduate in May 2025.";
    } else if (userInput.includes('help') || userInput.includes('assist')) {
      return "AI Bot: I'm here to help! You can ask me about Neyah's projects, skills, contact information, or education.";
    } else if (userInput.includes('hobbies') || userInput.includes('fun')) {
      return "AI Bot: Neyah enjoys playing video games, spending time with her cat Friday, and working on coding projects.";
    } else {
      return "AI Bot: I'm not sure how to answer that. Try asking about Neyah's projects, experience, education, or even hobbies!";
    }
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      const aiResponse = generateResponse(input);
      setMessages([...messages, newMessage, { text: aiResponse, sender: 'bot' }]);
      setInput('');
    }
  };

  return (
    <div className="chatbot">
      <h2>Chat with AI Bot</h2>
      <div className="chatbox">
        {messages.map((msg, index) => (
          <p key={index} className={msg.sender === 'user' ? 'user-msg' : 'bot-msg'}>
            {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask the AI bot..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;

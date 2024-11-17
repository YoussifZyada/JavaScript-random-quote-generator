const quotes = [
    {   
        text: "To live is the rarest thing in the world. Most people exist, that is all.", 
        author: "Oscar Wilde" 
    },
    {
        text: "We accept the love we think we deserve.", 
        author: "Stephen Chbosky, The Perks of Being a Wallflower" 
    },
    { 
        text: "I am so clever that sometimes I don't understand a single word of what I am saying.", 
        author: "Oscar Wilde, The Happy Prince and Other Stories" 
    },
    { 
        text: "It does not do to dwell on dreams and forget to live.", 
        author: "J.K. Rowling, Harry Potter and the Sorcerer's Stone" 
    },
    { 
        text: "You miss 100% of the shots you don’t take.", 
        author: "Wayne Gretzky" },
    { 
        text: "Life is what happens when you're busy making other plans.", 
        author: "John Lennon" 
    },
    { 
        text: "Get busy living or get busy dying.", 
        author: "Stephen King" 
    },
    { 
        text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", 
        author: "Ralph Waldo Emerson" 
    },
    { 
        text: "Happiness depends upon ourselves.", 
        author: "Aristotle" 
    },
    { 
        text: "The only impossible journey is the one you never begin.", 
        author: "Tony Robbins" 
    },
    { 
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.", 
        author: "Zig Ziglar" 
    },
    { 
        text: "If you want to go fast, go alone. If you want to go far, go together.", 
        author: "African Proverb" 
    },
    { 
        text: "Do what you can, with what you have, where you are.", 
        author: "Theodore Roosevelt" 
    },
    { 
        text: "Our greatest glory is not in never falling, but in rising every time we fall.", 
        author: "Confucius" 
    },
    { 
        text: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", 
        author: "Ralph Waldo Emerson" 
    },
    { 
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
        author: "Nelson Mandela" 
    },
    { 
        text: "The best way to predict the future is to create it.", 
        author: "Abraham Lincoln" 
    },
    { 
        text: "There is only one thing that makes a dream impossible to achieve: the fear of failure.", 
        author: "Paulo Coelho, The Alchemist" 
    },
    { 
        text: "Creativity is knowing how to hide your sources.", 
        author: "C.E.M. Joad" 
    },
    { 
        text: "With great power... comes great need to take a nap. Wake me up later.", 
        author: "Rick Riordan, The Last Olympian" 
    },
    { 
        text: "I would rather walk with a friend in the dark, than alone in the light.", 
        author: "Helen Keller" 
    },
    { 
        text: "I speak to everyone in the same way, whether he is the garbage man or the president of the university.", 
        author: "Albert Einstein" 
    },
    { 
        text: "An eye for an eye will only make the whole world blind.", 
        author: "Mahatma Gandhi" 
    },
    { 
        text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", 
        author: "Isaac Asimov" 
    },
    { 
        text: "It is never too late to be what you might have been.", 
        author: "George Eliot" 
    },
    { 
        text: "Our lives begin to end the day we become silent about things that matter.", 
        author: "Martin Luther King Jr." 
    },
    { 
        text: "In the middle of every difficulty lies opportunity.", 
        author: "Albert Einstein" 
    },
    { 
        text: "The future belongs to those who believe in the beauty of their dreams.", 
        author: "Eleanor Roosevelt" 
    },
    { 
        text: "Nothing is impossible, the word itself says ‘I’m possible!'", 
        author: "Audrey Hepburn" 
    },
    { 
        text: "Success usually comes to those who are too busy to be looking for it.", 
        author: "Henry David Thoreau" 
    }
];

let remainingQuotes = [...quotes]; 

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateRandomQuote() {
    if (remainingQuotes.length === 0) {
        remainingQuotes = [...quotes];
        shuffleArray(remainingQuotes);
    }

    const randomIndex = Math.floor(Math.random() * remainingQuotes.length);
    const randomQuote = remainingQuotes.splice(randomIndex, 1)[0];

    document.getElementById("quote").textContent = `"${randomQuote.text}"`;
    document.getElementById("author").textContent = `- ${randomQuote.author}`;
}

document.getElementById("generateQuote").addEventListener("click", generateRandomQuote);

shuffleArray(remainingQuotes);
generateRandomQuote();
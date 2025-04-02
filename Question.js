
let examData = [];

// Mapping of sections to their respective questions
const sectionQuestions = {
    "Maths": [
        {
            question: "What is the smallest even number?",
            options: ["1", "2", "0", "5"],
            correctAnswer: "2",
        },
        {
            question: "The product of 121X0X200X25?",
            options: ["1500", "4000", "0", "None of these"],
            correctAnswer: "0",
        },
        {
            question: "How many centimeters in 1 meters?",
            options: ["10", "100", "1000", "500"],
            correctAnswer: "100",
        },
        {
            question: "Solve: 300-(150X2)?",
            options: ["270", "0", "1", "600"],
            correctAnswer: "0",
        },
        {
            question: "What is the next prime number after 5?",
            options: ["6", "8", "7", "10"],
            correctAnswer: "7",
        },
        {
            question: "Cube of 5 is equal to:?",
            options: ["50", "125", "500", "25"],
            correctAnswer: "125",
        },
        {
            question: "How many months make a century?",
            options: ["12", "1200", "24", "100"],
            correctAnswer: "1200",
        },
        {
            question: "What is the solution of 2x^2-8=0?",
            options: ["x=-4", "x=2", "x=5", "x=4"],
            correctAnswer: "x=2",
        },
        {
            question: "Which number is equivalent to 3^(4)/3^(2)?",
            options: ["9", "27", "72", "124"],
            correctAnswer: "9",
        },
        {
            question: "What is 10% of 50?",
            options: ["5", "10", "15", "20"],
            correctAnswer: "5",
        },
        
    ],
    "General knowledge": [
        {
            question: "Who is consider the 'Father of nation' in India?",
            options: ["Atal bihari baajpai", "Mahatma Gandhi", "Bheemrao ambedkar", "Narendra modi"],
            correctAnswer: "Mahatma Gandhi",
        },
        {
            question: "What is the largest planet in our solar system?",
            options: ["Mars", "Sun", "Jupiter", "Moon"],
            correctAnswer: "Jupiter",
        },
        {
            question: "What is the highest mountain in the world?",
            options: ["Himalya", "Mount everest", "Kangchenjunga", "Lhotse"],
            correctAnswer: "Mount everest",
        },
        {
            question: "Chikungunya is an infection caused by ______ mosquito.",
            options: ["Anopheles", "Aedes", "Mansonia", "Culex"],
            correctAnswer: "Aedes",
        },
        {
            question: "How many planet are there in the solar system?",
            options: ["10", "15", "7", "8"],
            correctAnswer: "8",
        },
        {
            question: "the normal boiling point of water is?",
            options: ["75 degree", "50 degree", "100 degree", "200 degree"],
            correctAnswer: "100 degree",
        },
        {
            question: "Who painted the famous artwork 'Mona Lisa'?",
            options: ["Leonardo Da vinci", "Pablo Picasso", "Claude Monet", "Vincent van gogh"],
            correctAnswer: "Leonardo Da vinci",
        },
        {
            question: "Which is the longest river on the earth?",
            options: ["Ganga", "Amazon", "Congo", "Nile"],
            correctAnswer: "Nile",
        },
        {
            question: "Name a marine animal which is known as a 'Sea cow'?",
            options: ["Whale", "Manatees", "Octopus", "Tortoise"],
            correctAnswer: "Manatees",
        },
        {
            question: "Which among the following is another word for universe?",
            options: ["Astronomy", "Cosmos", "Big Crunch", "Supernova"],
            correctAnswer: "Cosmos",
        },
        
    ],
    "Computer": [
        {
            question: "Who is the father of computer?",
            options: ["Isaac newton", "Albert einstein", "Thomas edison", "Charles babbage"],
            correctAnswer: "Charles babbage",
        },
        {
            question: "What is the name of the most popular operating system used on personal computer?",
            options: ["Linux", "Windows", "Unix", "MacOS"],
            correctAnswer: "Windows",
        },
        {
            question: "What does 'www' stands for?",
            options: ["World wide web", "World web wide", "both", "none of these"],
            correctAnswer: "World wide web",
        },
        {
            question: "Scientific name of computer?",
            options: ["Sillico sapiens", "Digital screen", "Monitor", "none of these"],
            correctAnswer: "Sillico sapiens",
        },
        {
            question: "Which mouse click can you use to select items?",
            options: ["Double click", "Right click", "Single click", "Left click"],
            correctAnswer: "Single click",
        },
        {
            question: "What is the main page of a website called?",
            options: ["Home page", "Menu", "Back page", "Front page"],
            correctAnswer: "Home page",
        },
        {
            question: "The collection of pictures in MS word is called ?",
            options: ["Smart art", "Image", "Clip art", "None of these"],
            correctAnswer: "Clip art",
        },
        {
            question: "Neeti wants to use an input device that works by sensing the user’s finger movement and downward pressure. Which among the following should she use?",
            options: ["Scanner", "Light pen", "Keyboard", "Touchpad"],
            correctAnswer: "Touchpad",
        },
        {
            question: "Which of the following is NOT an application software?",
            options: ["Graphics software", "Spreadsheet software", "Operating systems", "Word-processing software"],
            correctAnswer: "Operating systems",
        },
        {
            question: "The full form of URL is?",
            options: ["User rule list", "Uniform resource locator", "Uniform research locator", "none of these"],
            correctAnswer: "Uniform resource locator",
        },
        
    ],
    "Geography": [
        {
            question: "What is the hardest substance on earth?",
            options: ["Platinum", "Diamond", "Metal", "Iron"],
            correctAnswer: "Diamond",
        },
        {
            question: "Where is the mount everest situated?",
            options: ["Nepal", "Pakistan", "Jammu & kashmir", "Afghanistan"],
            correctAnswer: "Nepal",
        },
        {
            question: "What is the smallest continent in the world?",
            options: ["Europe", "Africa", "Asia", "Australia"],
            correctAnswer: "Australia",
        },
        {
            question: "Which is the largest country in the world?",
            options: ["Canada", "Russia", "China", "United states"],
            correctAnswer: "Russia",
        },
        {
            question: "What is the length of India?",
            options: ["4532km", "3214km", "3200km", "2192km"],
            correctAnswer: "3214km",
        },
        {
            question: "Who is the father of geography?",
            options: ["Eratosthenes", "Herodotus", "Ptolemy", "Hipparchus"],
            correctAnswer: "Eratosthenes",
        },
        {
            question: "What are the celestial bodies that explore around the sun called?",
            options: ["Universe", "Planets", "Solar system", "Moon"],
            correctAnswer: "Planets",
        },
        {
            question: "Into how many parts is geography divided?",
            options: ["3", "5", "2", "6"],
            correctAnswer: "3",
        },
        {
            question: "Which layer is between the curst and the core layer?",
            options: ["Inner layer", "Mantle", "Outer core", "None of these"],
            correctAnswer: "Mantle",
        },
        {
            question: "In which state are the Ajanta and Ellora caves located?",
            options: ["Uttar pradesh", "Uttrakhand", "Maharashtra", "Madhya pradesh"],
            correctAnswer: "Maharashtra",
        },
        
    ],
};

// Fetch exam data based on the selected section
function fetchExamData() {
    const selectedSection = localStorage.getItem("selectedSection");
    if (selectedSection && sectionQuestions[selectedSection]) {
        examData = sectionQuestions[selectedSection];
        document.getElementById("examTitle").textContent = `${selectedSection} Exam`;
    } else {
        examData = []; // No questions if no section is selected
        document.getElementById("examTitle").textContent = "Exam";
    }
    renderQuestions();
}
// Timer functionality
function submitExam() {
    if (examData.length === 0) {
        alert("No questions available. Please select a valid section.");
        return;
    }

    const score = calculateScore();
    const totalQuestions = examData.length;

    // Save result to localStorage
    saveResult(score, totalQuestions);

    // Redirect to result page
    window.location.href = "Score.html";
}

// Timer functionality
let timeRemaining = 600; // 10 minutes in seconds
const timerElement = document.getElementById("timer");

function updateTimer() {
    if (timerElement) {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.textContent = `Time Remaining: ${minutes}:${seconds.toString().padStart(2, "0")}`;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting your exam.");
            submitExam();
        } else {
            timeRemaining--;
        }
    }
}

const timerInterval = setInterval(updateTimer, 1000);

// Function to render questions
function renderQuestions() {
    const questionsContainer = document.getElementById("questionsContainer");
    if (!questionsContainer) return; // Ensure the container exists

    questionsContainer.innerHTML = ""; // Clear existing content

    examData.forEach((question, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "question";

        // Add question text
        const questionText = document.createElement("p");
        questionText.textContent = `${index + 1}. ${question.question}`;
        questionDiv.appendChild(questionText);

        // Add options
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";

        question.options.forEach((option) => {
            const label = document.createElement("label");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${index}`; // Group by question
            input.value = option;

            label.appendChild(input);
            label.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        questionsContainer.appendChild(questionDiv);
    });
}

// Function to calculate score
function calculateScore() {
    let score = 0;

    examData.forEach((question, index) => {
        const selectedAnswer = document.querySelector(
            `input[name="question${index}"]:checked`
        )?.value;

        // Compare selected answer with the correct answer (case-insensitive)
        if (selectedAnswer && selectedAnswer.toLowerCase() === question.correctAnswer.toLowerCase()) {
            score++;
        }
    });

    return score;
}

// Save result to localStorage
function saveResult(score, totalQuestions) {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let username = users.length > 0 && users[0].username ? users[0].username : "Guest"; // Fetch username safely

    const result = {
        username: username,
        examName: localStorage.getItem("selectedSection") || "Unknown Exam",
        score: score,
        totalQuestions: totalQuestions,
        date: new Date().toLocaleDateString(),
        status: "completed", // Add status for pending results
    };

    // Get existing results from localStorage
    const userResults = JSON.parse(localStorage.getItem("userResults")) || [];
    userResults.push(result);

    // Save updated results to localStorage
    localStorage.setItem("userResults", JSON.stringify(userResults));
}

// Handle form submission
const examForm = document.getElementById("examForm");
if (examForm) {
    examForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (examData.length === 0) {
            alert("No questions available. Please select a valid section.");
            return;
        }

        const score = calculateScore();
        const totalQuestions = examData.length;

        // Save result to localStorage
        saveResult(score, totalQuestions);

        // Redirect to result page
        window.location.href = "Scores.html";
    });
}

// Fetch exam data when the page loads
window.onload = fetchExamData;
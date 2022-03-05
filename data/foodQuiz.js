const quizData = [
    {
        "parentId": 0,
        "id": 1,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What's for dinner?",
        "questionType": "single",
        "answers": [
            {"text": "Tacos", "nextQuestionId": 2},
            {"text": "Fend for yourself", "nextQuestionId": 3},
            {"text": "Pizza", "nextQuestionId": 4}
        ]
    },
    {
        "parentId": 0,
        "id": 100,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#10b981",
            "textColor": "#171717"
        },
        "text": "Thank you for completing the quiz.",
        "questionType": "single",
        "answers": [
            {"text": "take again", "nextQuestionId": 1}
        ]
    },
    {
        "parentId": 1,
        "id": 2,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What kind of Tacos?",
        "questionType": "single",
        "answers": [
            {"text": "Hard", "nextQuestionId": 13},
            {"text": "Soft", "nextQuestionId": 13}
        ]
    },
    {
        "parentId": 1,
        "id": 3,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#f87171",
            "textColor": "#171717"
        },
        "text": "What about the kids?",
        "questionType": "single",
        "answers": [
            {"text": "Noodles", "nextQuestionId": 100},
            {"text": "Cereal", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 1,
        "id": 4,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#dc2626",
            "textColor": "#e5e5e5"
        },
        "text": "Really pizza again?",
        "questionType": "single",
        "answers": [
            {"text": "Yes", "nextQuestionId": 5},
            {"text": "No", "nextQuestionId": 1}
        ]
    },
    {
        "parentId": 4,
        "id": 5,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#ef4444",
            "textColor": "#e5e5e5"
        },
        "text": "Okay, what kind are we going with?",
        "questionType": "single",
        "answers": [
            {"text": "Cheese", "nextQuestionId": 7},
            {"text": "Extra Cheese", "nextQuestionId": 8},
            {"text": "Meat Lovers", "nextQuestionId": 9},
            {"text": "Stuffed Crust", "nextQuestionId": 10}
        ]
    },
    {
        "parentId": 5,
        "id": 7,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#fef08a",
            "textColor": "#171717"
        },
        "text": "Do you want anything else?",
        "questionType": "single",
        "answers": [
            {"text": "Yes", "nextQuestionId": 11},
            {"text": "No", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 5,
        "id": 8,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#facc15",
            "textColor": "#171717"
        },
        "text": "Let's make it stuffed crust for the extra extra cheese",
        "questionType": "single",
        "answers": [
            {"text": "Yes", "nextQuestionId": 100},
            {"text": "No", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 5,
        "id": 9,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#854d0e",
            "textColor": "#e5e5e5"
        },
        "text": "Lots of meat, no veggies",
        "questionType": "single",
        "answers": [
            {"text": "Yes", "nextQuestionId": 100},
            {"text": "No, there is tomato sauce", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 5,
        "id": 10,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "Okay stuffed crust, do you want any other topping",
        "questionType": "single",
        "answers": [
            {"text": "No", "nextQuestionId": 100},
            {"text": "pepperoni", "nextQuestionId": 100},
            {"text": "sausage", "nextQuestionId": 100},
            {"text": "pineapple", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 7,
        "id": 11,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What else would you like?",
        "questionType": "single",
        "answers": [
            {"text": "Wings", "nextQuestionId": 12},
            {"text": "Bread Sticks", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 11,
        "id": 12,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What kind of wings?",
        "questionType": "single",
        "answers": [
            {"text": "Hot", "nextQuestionId": 100},
            {"text": "Barbecue", "nextQuestionId": 100},
            {"text": "Original", "nextQuestionId": 100}
        ]
    },
    {
        "parentId": 2,
        "id": 13,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What type of meat?",
        "questionType": "single",
        "answers": [
            {"text": "Beef", "nextQuestionId": 14},
            {"text": "Chicken", "nextQuestionId": 14},
            {"text": "Fish", "nextQuestionId": 14}
        ]
    },
    {
        "parentId": 13,
        "id": 14,
        "configuration": {
            "banner": "Make you order",
            "footer": "What's for Dinner",
            "bgColor": "#a5b4fc",
            "textColor": "#171717"
        },
        "text": "What toppings would you like?",
        "questionType": "multi",
        "answers": [
            {"text": "lettuce", "nextQuestionId": 100},
            {"text": "tomato", "nextQuestionId": 100},
            {"text": "sour cream", "nextQuestionId": 100},
            {"text": "Pico de gallo", "nextQuestionId": 100},
            {"text": "red salsa", "nextQuestionId": 100},
            {"text": "green salsa", "nextQuestionId": 100},
            {"text": "onion", "nextQuestionId": 100},
            {"text": "Black beans", "nextQuestionId": 100},
            {"text": "refried beans", "nextQuestionId": 100},
            {"text": "White rice", "nextQuestionId": 100},
            {"text": "Brown rice", "nextQuestionId": 100},
            {"text": "Mexican style rice", "nextQuestionId": 100},
            {"text": "shredded cheese", "nextQuestionId": 100},
            {"text": "lime", "nextQuestionId": 100}
        ]
    },
];

export default quizData;
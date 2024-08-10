

export const selectTravelList = [
    {
        id: 1,
        title:'Just Me',
        desc: 'A solo Trveles in exploring the world',
        icon: '👤',
        people: '1'
    },
    {
        id: 2,
        title:'A Couple',
        desc: 'Two Travelers in exploring the world',
        icon: '👫',
        people: '2'
    },
    {
        id: 3,
        title:'Family',
        desc: 'A family of fun loving adventurers',
        icon: '👨‍👩‍👧‍👦',
        people:'3 to 5 people'
    },
    {
        id: 4,
        title:'Friend',
        desc: 'A group of friends looking for fun',
        icon: '👨‍👨‍👦',
        people: '5 to 10 people'
    },  
]

export const SelectBudgetOptions = [
    {
        id: 1,
        title: 'Budget',
        desc: 'I am looking for a budget-friendly trip',
        icon: '💸'
    },
    {
        id: 2,
        title: 'Standard',
        desc: 'I am looking for a standard trip',
        icon: '💰'
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'I am looking for a luxury trip',
        icon: '💎'
    }
]

export const AI_PROMPT = 'Generate Travel plan for location : {place}, for {days} days for {people} people with a {budget} budget, give me hotel options list with hotel name,hotel address,hotel rating,hotel price,hotel image url,hotel description,geo cordinates and suggest itinerary with placeName, place details, place image url, Geo cordinates, ticket pricing, time travel to each of this locaton for {days} days with each day plan with best time to visit in JSON format.'
console.log('Script loaded');

// Array Types mini-challenge
// Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.

const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement;
const userNameDisplay = document.querySelector('#user') as HTMLElement;
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement;

let isOpen: boolean;

const reviews: {
	name: string;
	stars: number;
	loyaltyUser: boolean;
	date: string;
}[] = [
	{
		name: 'Sheia',
		stars: 5,
		loyaltyUser: true,
		date: '01-04-2021',
	},
	{
		name: 'Andrzej',
		stars: 3,
		loyaltyUser: false,
		date: '28-03-2021',
	},
	{
		name: 'Omar',
		stars: 4,
		loyaltyUser: true,
		date: '27-03-2021',
	},
];

function showReviewTotal(value: number, reviewer: string, isLoyalty: boolean) {
	const iconDisplay = isLoyalty ? '⭐' : '';
	reviewTotalDisplay.innerHTML =
		'review total ' + value.toString() + '| last reviewed by ' + reviewer + ' ' + iconDisplay;
}

showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser);

const you: {
	firstName: string;
	lastName: string;
	isReturning: boolean;
	age: number;
	stayedAt: string[];
} = {
	firstName: 'Bobby',
	lastName: 'Brown',
	isReturning: true,
	age: 35,
	stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
};

function populateUser(isReturning: boolean, userName: string) {
	if (isReturning == true) {
		returningUserDisplay.innerHTML = 'back';
	}
	userNameDisplay.innerHTML = userName;
}

populateUser(you.isReturning, you.firstName);

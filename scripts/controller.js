
import { ToDoService } from "./service.js";

const btn = document.querySelector('#click');
btn.addEventListener('click', displayJoke);
displayJoke();
const joke = document.querySelector('#joke');

async function displayJoke(){
    try {
        btn.textContent = "Loading...";
        btn.disabled = true;
        const JokeModel = await ToDoService.fetchJoke();
        console.log(`${JokeModel.id}: ${JokeModel.joke}`);
        joke.textContent = `"${JokeModel.joke}"`;
    } catch (error) {
        console.error("Error fetching joke:", error);
    } finally {
        btn.textContent = "Get a Dad Joke";
        btn.disabled = false;
    }
}
import JokeModel from './model.js'

export const ToDoService = {
  async fetchJoke () {
    const response = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'application/json'
      }
    })
    const data = await response.json()
    return new JokeModel(data.id, data.joke)
  }
}

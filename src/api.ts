const URL = 'https://jsonplaceholder.typicode.com';
export const api = {
  getPosts: async () => {
    let response = await fetch(`${URL}/posts`);
    let data = await response.json();
    return data;
  },

  addNewPost: async (title: string, body: string, userId: number) => {
    let response = await fetch(`${URL}/posts`, {
      method: 'POST',
      body: JSON.stringify({ title, body, userId }),
      headers: { 'Content-Type': 'application/json' },
    });
    let data = await response.json();
    return data;
  },
};

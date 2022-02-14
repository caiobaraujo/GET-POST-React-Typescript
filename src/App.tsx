import { useEffect, useState, ChangeEvent } from 'react';
import { Posts } from './types/Posts';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await response.json();
    setLoading(false);
    setPosts(data);
  };

  const handleAddPost = async (title: string, body: string) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        userId: 1,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    let data = await response.json();
    setPosts([...posts, data]);

    if (data.id) {
    } else {
      alert('Error adding post');
    }
  };

  return (
    <div className="m-4">
      {loading && <div>Loading...</div>}

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && (
        <>
          <h1>
            Total de Posts:<b> {posts.length}</b>
          </h1>

          <div>
            {posts.map((item, index) => (
              <PostItem data={item} key={index} />
            ))}
          </div>
        </>
      )}
      {!loading && posts.length === 0 && <div>Nao há Posts para exibir</div>}
    </div>
  );
};

export default App;

// https://api.b7web.com.br/cinema/

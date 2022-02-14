import { useEffect, useState, ChangeEvent } from 'react';
import { Posts } from './types/Posts';
import { PostForm } from './components/PostForm';
import { PostItem } from './components/PostItem';
import { api } from './api';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let data = await api.getPosts();

    setLoading(false);
    setPosts(data);
  };

  const handleAddPost = async (title: string, body: string) => {
    let data = await api.addNewPost(title, body, 1);
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

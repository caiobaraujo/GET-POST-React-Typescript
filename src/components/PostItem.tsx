import { Posts } from '../types/Posts';

type Prop = {
  data: Posts;
};

export const PostItem = ({ data }: Prop) => {
  return (
    <div className="my-5">
      <h4 className="font-bold">{data.title}</h4>
      <small>
        #{data.id} - Usuário: {data.userId}
      </small>
      <p>{data.body}</p>
    </div>
  );
};

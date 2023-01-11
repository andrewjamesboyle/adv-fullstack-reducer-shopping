import TimelinePost from './TimelinePost';

export default function TimelinePostList({ postList }) {
  return <ol>
    {postList.map(post => {
      return <li key={post.id}><TimelinePost post={post} /></li>;
    })}
  </ol>;
}

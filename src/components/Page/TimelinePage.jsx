import TimelinePostList from '../Timeline/TimelinePostList';

export default function TimelinePage() {
  const postList = [
    { id: 1, body: 'first post' },
  ];

  return <>
    <TimelinePostList postList={postList} />
  </>;
}

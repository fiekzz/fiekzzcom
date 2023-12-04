interface PostCardContent {
  title: string;
  description: string;
  date: string;
  tags: string[];
  index: number;
  length: number;
}

export default function PostCard(props: PostCardContent) {
  return (
    <div className="w-full rounded overflow-hidden">
      <div className="py-4">
        <div className="font-bold text-2xl mb-2">{props.title}</div>
        <h6 className="text-gray-800 text-lg">{props.description}</h6>
        <h6 className="text-gray-600 text-base font-bold mt-2">{props.date}</h6>
      </div>
      <div className="pb-2">
        {props.tags.map((e, key) => {
          return (
            <span
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              key={key}
            >
              {e}
            </span>
          );
        })}
      </div>
      {props.index !== props.length - 1 ? 
      <hr
        className="rounded"
        style={{
          borderTop: "1px solid #bbb",
          borderRadius: "5px",
          marginBottom: "1rem",
        }}
      />
       : null
      }
    </div>
  );
}

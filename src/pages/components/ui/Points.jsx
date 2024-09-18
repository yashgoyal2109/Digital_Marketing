export default function Points({title,content }) {
  return (
      <div className="text-white flex flex-col px-12">
          <p className="font-semibold text-[1.3rem]">{title}</p>
          <p>{content}</p>
      </div>
  );
}
